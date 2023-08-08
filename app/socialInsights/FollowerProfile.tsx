import { DateRangeBtns } from '@/app/socialInsights/FilterBtns'
import LineChart from '@/components/d3/LineChart'
import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { BarData, IDashboardResp, LineData } from '@/types/socialInsights'
import { Spin, message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import BarChart from '@/components/d3/BarChart'
import { timeParse } from 'd3'
import Choropleth from '@/components/d3/Geo/Choropleth'
import { useGeoData } from '@/hooks/useGeoData'

type DashCardProps = {
  title: string
  value: number
  isActivated?: boolean
  onClick: () => void
}

const DashCard = ({ title, value, isActivated, onClick }: DashCardProps) => {
  return (
    <button onClick={onClick} className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] ${isActivated ? 'border-primary-gray bg-[#35363A]' : 'border-transparent bg-[#27282F]'}`}>
      <div className='text-lg font-semibold'>
        {value.toLocaleString('en')}
      </div>
      <div className='w-full flex items-center justify-between'>
        <span className='text-primary-gray text-sm'>
          {title}
        </span>
      </div>
    </button>
  )
}

const FollowerProfile = () => {

  const [followersNum, setFollowersNum] = useState(199780)
  const [currActive, setCurrActive] = useState(0)
  const [loading, setLoading] = useState(false);
  const { dateRange, dataMetric } = useContext(SocialInsightsContext)
  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState<LineData[]>([]);

  useEffect(() => {
    getData()
  }, [dataMetric, dateRange, currActive]);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch('/fapi/facebook/page_engagement_metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          time_mode: dateRange,
          metrics_mode: dataMetric,
        })
      })
      if (response.ok) {
        const data: IDashboardResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          const parseTime = timeParse("%Y-%m-%d");
          const lineData = data.data
            .reverse().map((item) => {
              return {
                date: parseTime(item.date)!,
                value: item.value,
              }
            })
          setData(lineData);
        } else {
          messageApi.error(data.message, 2);
        }
      } else {
        messageApi.error(response.status, 2);
      }
    } catch (error) {
      messageApi.error(error as string, 2)
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  const DATA: BarData[] = [
    { label: "New york", value: 100 },
    { label: "Shanghai", value: 200 },
    { label: "Toronto", value: 50 },
    { label: "Paris", value: 150 },
    { label: "Tokyo", value: 150 },
  ].sort((a, b) => b.value - a.value);

  const { geoData } = useGeoData();

  return (
    <>
      {contextHolder}
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          <span className='font-semibold'>{followersNum.toLocaleString()}</span> Followers profile
        </h2>
        <DateRangeBtns />
        <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
          <DashCard
            title='Unfollowers'
            isActivated={currActive === 0} value={123}
            onClick={() => setCurrActive(0)}
          />
          <DashCard
            title='New followers'
            isActivated={currActive === 1} value={9999}
            onClick={() => setCurrActive(1)}
          />
        </div>
        <Spin spinning={loading}>
          <div className='w-full mx-auto mt-8 bg-black/20 rounded-lg min-h-[400px]'>
            <LineChart data={data} title={currActive === 0 ? 'Unfollowers' : 'New followers'} />
          </div>
        </Spin>
      </section>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          Geographical Distribution
        </h2>
        <div className='grid grid-flow-row grid-cols-2 mt-6'>
          <div className='flex flex-col gap-6'>
            <span className='text-base'>
              Followers by courty
            </span>
            <Choropleth data={geoData} />
          </div>
          <div className='flex flex-col gap-6'>
            <span className='text-base'>
              Followers by cities
            </span>
            <BarChart data={DATA} />
          </div>
        </div>
      </section>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          Followers Gender
        </h2>
      </section>
    </>
  )
}

export default FollowerProfile
