
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext, useEffect, useState } from 'react'
import arrowUpBoldCircleOutline from '@iconify/icons-mdi/arrow-up-bold-circle-outline';
import { Icon } from '@iconify/react';
import { DateRange, IAdsFbManagementData, IAdsFbManagementResp, IFbChartResp } from '@/types/socialInsights';
import { Spin } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { DateRangeBtns } from '@/app/socialInsights/FilterBtns';
import { capitalize } from '@/lib/format';
import TheResponsiveLine, { TheResponsiveLineProps } from '@/components/d3/TheResponsiveLine';


type DashCardProps = {
  title: string
  value: number
  interpolation?: number
}

const DashCard = ({ title, value, interpolation }: DashCardProps) => {
  return (
    <div className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] border-transparent bg-[#27282F]`}>
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
    </div>
  )
}

const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

const SocialMetrics = () => {

  const { dateRange } = useContext(SocialInsightsContext)
  const [adsFbManagementData, setAdsFbManagementData] = useState<Partial<IAdsFbManagementData> | null>(null)
  const [loadingData, setLoadingData] = useState(false);
  const [loadingChart, setLoadingChart] = useState(false);
  const [lineData, setLineData] = useState<TheResponsiveLineProps['data'] | null>(null);

  useEffect(() => {
    fetchAdsData()
    fetchChartData()
  }, [dateRange]);

  async function fetchAdsData() {
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

  async function fetchChartData() {
    try {
      setLoadingChart(true)
      const response = await fetch('/fapi/get_charts', {
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
        const data: IFbChartResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          console.log('data', data)
          const { clicks, impressions, reaches, start_dates } = data.data
          const rLineData = [
            {
              id: 'Clicks',
              color: '#3CAFA4',
              data: clicks.map((click, i) => ({ x: start_dates[i], y: click }))
            },
            {
              id: 'Impressions',
              color: '#EF8F8F',
              data: impressions.map((impression, i) => ({ x: start_dates[i], y: impression }))
            },
            {
              id: 'Reaches',
              color: '#F9D34E',
              data: reaches.map((reach, i) => ({ x: start_dates[i], y: reach }))
            }
          ]
          setLineData(rLineData)
          console.log('rLineData', rLineData)
        }
      } else {
        console.log('response', response.statusText)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoadingChart(false)
    }
  }

  return (
    <>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>Social Metrics</h2>
        <DateRangeBtns />
        <Spin spinning={loadingData}>
          <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
            {
              adsFbManagementData && Object.entries(adsFbManagementData).map(([key, value], index) => (
                <DashCard
                  key={index}
                  title={capitalize(key)}
                  value={+value}
                />
              ))
            }
          </div>
        </Spin>
        <Spin spinning={loadingChart}>
          <div className='w-full mx-auto mt-6 bg-black/20 rounded-lg h-[400px]'>
            {!loadingChart && lineData && <TheResponsiveLine data={lineData} />}
          </div>
        </Spin>
      </section>
    </>
  )
}

export default SocialMetrics
