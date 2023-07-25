
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext, useEffect, useState } from 'react'
import arrowUpBoldCircleOutline from '@iconify/icons-mdi/arrow-up-bold-circle-outline';
import { Icon } from '@iconify/react';
import { random } from '@/utils';
import LineChart from '@/components/d3/LineChart';
import * as d3 from 'd3';
import { IDashboardResp, LineData } from '@/types/socialInsights';
import { Spin, message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { DataMetricMap } from '@/data/socialInsights';


type ButtonProps = {
  isActive: boolean
  onClick: () => void
  text: string
}

const Button = ({ isActive, onClick, text }: ButtonProps) => {
  return <button onClick={onClick} className={`rounded-lg  py-2 px-4 border hover:bg-[#35363A] ${isActive ? 'border-primary-gray bg-[#35363A] text-white' : 'border-transparent text-primary-gray bg-[#27282F]'}`}>
    {text}
  </button>
}

const DateRange = () => {
  const { dateRange, setDateRange } = useContext(SocialInsightsContext)

  return (
    <div className='mt-5 flex items-center gap-3'>
      <div className='text-primary-gray'>Date Range</div>
      <Button isActive={dateRange === 'last_day'} onClick={() => setDateRange('last_day')} text='Last Day' />
      <Button isActive={dateRange === 'last_week'} onClick={() => setDateRange('last_week')} text='Last Week' />
      <Button isActive={dateRange === 'last_month'} onClick={() => setDateRange('last_month')} text='Last Month' />
    </div>
  )
}

const DataMetrics = () => {
  const { dataMetric, setDataMetric } = useContext(SocialInsightsContext)

  return (
    <div className='mt-4 flex items-center gap-3'>
      <div className='text-primary-gray'>Data metrics</div>
      <Button isActive={dataMetric === 'page'} onClick={() => setDataMetric('page')} text='Page Engagement Metrics' />
      <Button isActive={dataMetric === 'post'} onClick={() => setDataMetric('post')} text='Post Engagement Metrics' />
      <Button isActive={dataMetric === 'video'} onClick={() => setDataMetric('video')} text='Video Metrics' />
      <Button isActive={dataMetric === 'ad'} onClick={() => setDataMetric('ad')} text='Ad Performance Metrics' />
    </div>
  )
}

type DashCardProps = {
  title: string
  value: number
  interpolation: number
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
        }
      </div>
    </button>
  )
}


const Dashboard = () => {



  const { dateRange, dataMetric, currentPlatform } = useContext(SocialInsightsContext)

  const [currActive, setCurrActive] = useState(0)
  const [randomData, setRandomData] = useState<any[]>([])


  useEffect(() => {
    const randomData = DataMetricMap[dataMetric].map((item) => {
      return {
        title: item,
        value: random(0, 100000, 0),
        interpolation: random(-2, 2)
      }
    })
    setRandomData(randomData)
  }, [dateRange, dataMetric, currentPlatform])


  const [data, setData] = useState<LineData[]>([]);

  useEffect(() => {
    getData()
  }, [dataMetric, dateRange, currActive]);

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [title, setTitle] = useState('Impressions');

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
    <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
      {contextHolder}
      <h2 className='text-lg'>General Metrics</h2>
      <DateRange />
      <DataMetrics />
      <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
        {
          randomData.map((item, index) => (
            <DashCard
              key={index}
              isActivated={currActive === index}
              onClick={() => {
                setCurrActive(index)
                setTitle(item.title)
              }}
              title={item.title}
              value={item.value}
              interpolation={item.interpolation}
            />
          ))
        }
      </div>
      <Spin spinning={loading}>
        <div className='w-full mx-auto mt-16 bg-black/20 rounded-lg min-h-[400px]'>
          <LineChart data={data} title={title} />
        </div>
      </Spin>
    </section>
  )
}

export default Dashboard

