
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext, useEffect, useState } from 'react'
import arrowUpBoldCircleOutline from '@iconify/icons-mdi/arrow-up-bold-circle-outline';
import { Icon } from '@iconify/react';
import LineChart from '@/components/d3/LineChart';
import * as d3 from 'd3';
import { DateRange, IAdsFbManagementData, IAdsFbManagementResp, IDashboardResp, LineData } from '@/types/socialInsights';
import { Spin, message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { DateRangeBtns } from '@/app/socialInsights/FilterBtns';
import { capitalize } from '@/lib/format';


type DashCardProps = {
  title: string
  value: number
  interpolation?: number
  isActivated?: boolean
  onClick: () => void
}

const DashCard = ({ title, value, interpolation, isActivated, onClick }: DashCardProps) => {
  return (
    <button onClick={onClick} className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] ${isActivated ? 'border-primary-gray bg-[#35363A]' : 'border-transparent bg-[#27282F]'}`}>
      <div className='text-lg font-semibold'>
        {value.toLocaleString('en')}
      </div>
      <div className='w-full flex items-center justify-between'>
        <span className='text-primary-gray text-sm'>
          {title}
        </span>
        {
          interpolation && (
            interpolation > 0 ?
              <div className='flex justify-center items-center gap-[6px] text-[13px] text-[#3CAFA4]'>
                <span>{interpolation}%</span>
                <Icon icon={arrowUpBoldCircleOutline} className='text-lg' />
              </div>
              :
              <div className='flex justify-center items-center gap-[6px] text-[13px] text-[#EF8F8F]'>
                <span>{interpolation}%</span>
                <Icon icon={arrowUpBoldCircleOutline} className='text-lg rotate-180' />
              </div>
          )
        }
      </div>
    </button>
  )
}

const SocialMetrics = () => {

  const { dateRange, dataMetric } = useContext(SocialInsightsContext)
  const [currActive, setCurrActive] = useState(0)
  const [adsFbManagementData, setAdsFbManagementData] = useState<Partial<IAdsFbManagementData> | null>(null)
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [title, setTitle] = useState('Impressions');
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState<LineData[]>([]);

  useEffect(() => {
    fetchAdsData()
  }, [dateRange]);

  useEffect(() => {
    getData()
  }, [dataMetric, dateRange, currActive]);

  async function fetchAdsData() {
    const dateMap: Record<DateRange, number> = {
      last_day: 1,
      last_week: 7,
      last_month: 30,
    }
    try {
      setLoadingData(true)
      const response = await fetch('/fapi/ads_fb_management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mode: 'all',
          date_range: dateMap[dateRange]
        })
      })
      if (response.ok) {
        const data: IAdsFbManagementResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          setAdsFbManagementData({
            clicks: data.data.clicks,
            cpc: data.data.cpc,
            cpm: data.data.cpm,
            ctr: data.data.ctr,
            impressions: data.data.impressions,
            reach: data.data.reach,
            spend: data.data.spend,
          })
        }
      } else {
        console.log('response', response.statusText)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoadingData(false)
    }
  }

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
          const parseTime = d3.timeParse("%Y-%m-%d");
          let lineData = data.data
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

  return (
    <>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        {contextHolder}
        <h2 className='text-lg'>Social Metrics</h2>
        <DateRangeBtns />
        {/* <DataMetrics /> */}
        <Spin spinning={loadingData}>
          <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
            {
              adsFbManagementData && Object.entries(adsFbManagementData).map(([key, value], index) => (
                <DashCard
                  key={index}
                  isActivated={currActive === index}
                  onClick={() => {
                    setCurrActive(index)
                    setTitle(key)
                  }}
                  title={capitalize(key)}
                  value={+value}
                />
              ))
            }
          </div>
        </Spin>
        <Spin spinning={loading}>
          <div className='w-full mx-auto mt-16 bg-black/20 rounded-lg min-h-[400px]'>
            <LineChart data={data} title={title} />
          </div>
        </Spin>
      </section>
    </>
  )
}

export default SocialMetrics
