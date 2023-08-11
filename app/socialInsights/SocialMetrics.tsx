
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext, useEffect, useState } from 'react'
import arrowUpBoldCircleOutline from '@iconify/icons-mdi/arrow-up-bold-circle-outline';
import { Icon } from '@iconify/react';
import { DateRange, FbChartsDataSet, IAdsFbManagementResp, ICampaignsData, ICampaignsResp, IFbChartResp } from '@/types/socialInsights';
import { Spin } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { CampaignsSelect, DateRangeBtns } from '@/app/socialInsights/FilterBtns';
import { capitalize } from '@/lib/format';
import TheResponsiveLine from '@/components/d3/TheResponsiveLine';
import TheResponsiveBar from '@/components/d3/TheResponsiveBar';


type DashCardProps = {
  title: string
  value: number | string
  interpolation?: number
}

const DashCard = ({ title, value, interpolation }: DashCardProps) => {
  return (
    <div className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] border-transparent bg-[#27282F]`}>
      <div className='text-lg font-semibold'>
        {value ?? '-'}
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
  const [adsFbManagementData, setAdsFbManagementData] = useState<{
    [key in keyof FbChartsDataSet]: number | string
  } | null>(null)
  const [loadingData, setLoadingData] = useState(false);
  const [loadingChart, setLoadingChart] = useState(false);
  const [campaigns, setCampaigns] = useState<ICampaignsData[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<string>('all');
  const [fbChartsDataSet, setFbChartsDataSet] = useState<Partial<FbChartsDataSet> | null>(null);

  useEffect(() => {
    getCampaigns()
  }, []);

  useEffect(() => {
    fetchAdsData()
    fetchChartData()
  }, [dateRange, selectedCampaign]);

  async function fetchAdsData() {
    try {
      setLoadingData(true)
      const response = await fetch('/fapi/ads_fb_management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mode: selectedCampaign,
          date_range: dateMap[dateRange]
        })
      })
      if (response.ok) {
        const data: IAdsFbManagementResp & {
          [key in keyof FbChartsDataSet]: number | string
        } = await response.json()
        if (data.status === SUCCESS_CODE) {
          setAdsFbManagementData({
            clicks: data.data.clicks,
            impressions: data.data.impressions,
            reach: data.data.reach,
            conversions: data.data.conversions,
            cost_per_conversion: data.data.cost_per_conversion,
            cost_per_unique_click: data.data.cost_per_unique_click,
            cpc: data.data.cpc,
            cpm: data.data.cpm,
            cpp: data.data.cpp,
            ctr: data.data.ctr,
            purchase_roas: data.data.purchase_roas,
            spend: data.data.spend,
            video_avg_time_watched_actions: data.data.video_avg_time_watched_actions,
            website_ctr: data.data.website_ctr,
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
          mode: selectedCampaign,
          date_range: dateMap[dateRange]
        })
      })
      if (response.ok) {
        const data: IFbChartResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          const { clicks, impressions, reach, start_dates, conversions, cost_per_conversion, cost_per_unique_click, cpc, cpm, cpp, ctr, purchase_roas, spend, video_avg_time_watched_actions, website_ctr } = data.data
          const clicksData = [{
            id: 'Clicks',
            data: clicks.length > 0 ? clicks.map((click, i) => ({ x: start_dates[i], y: click })) : []
          }]
          const impressionsData = [{
            id: 'Impressions',
            data: impressions.length > 0 ? impressions.map((impression, i) => ({ x: start_dates[i], y: impression })) : []
          }]
          const reachData = [{
            id: 'Reach',
            data: reach.length > 0 ? reach.map((reach, i) => ({ x: start_dates[i], y: reach })) : []
          }]
          const conversionsData = [{
            id: 'Conversions',
            data: conversions.length > 0 ? conversions.map((conversion, i) => ({ x: start_dates[i], y: conversion })) : []
          }]
          const costPerConversionData = [{
            id: 'Cost Per Conversion',
            data: cost_per_conversion.length > 0 ? cost_per_conversion.map((costPerConversion, i) => ({ x: start_dates[i], y: costPerConversion })) : []
          }]
          const costPerUniqueClickData = [{
            id: 'Cost Per Unique Click',
            data: cost_per_unique_click.length > 0 ? cost_per_unique_click.map((costPerUniqueClick, i) => ({ x: start_dates[i], y: costPerUniqueClick })) : []
          }]
          const cpcData = [{
            id: 'CPC',
            data: cpc.length > 0 ? cpc.map((cpc, i) => ({ x: start_dates[i], y: cpc })) : []
          }]
          const cpmData = [{
            id: 'CPM',
            data: cpm.length > 0 ? cpm.map((cpm, i) => ({ x: start_dates[i], y: cpm })) : []
          }]
          const cppData = [{
            id: 'CPP',
            data: cpp.length > 0 ? cpp.map((cpp, i) => ({ x: start_dates[i], y: cpp })) : []
          }]
          const ctrData = [{
            id: 'CTR',
            data: ctr.length > 0 ? ctr.map((ctr, i) => ({ x: start_dates[i], y: ctr })) : []
          }]
          const purchaseRoasData = [{
            id: 'Purchase ROAS',
            data: purchase_roas.length > 0 ? purchase_roas.map((purchaseRoas, i) => ({ x: start_dates[i], y: purchaseRoas })) : []
          }]
          const spendData = start_dates.map((item, index) => {
            return {
              Date: item,
              Spend: spend[index]
            }
          })
          const videoAvgTimeWatchedActionsData = [{
            id: 'Video Avg Time Watched Actions',
            data: video_avg_time_watched_actions.length > 0 ? video_avg_time_watched_actions.map((videoAvgTimeWatchedActions, i) => ({ x: start_dates[i], y: videoAvgTimeWatchedActions })) : []
          }]
          const websiteCtrData = [{
            id: 'Website CTR',
            data: website_ctr.length > 0 ? website_ctr.map((websiteCtr, i) => ({ x: start_dates[i], y: websiteCtr })) : []
          }]
          setFbChartsDataSet({
            clicks: clicksData,
            impressions: impressionsData,
            reach: reachData,
            conversions: conversionsData,
            cost_per_conversion: costPerConversionData,
            cost_per_unique_click: costPerUniqueClickData,
            cpc: cpcData,
            cpm: cpmData,
            cpp: cppData,
            ctr: ctrData,
            purchase_roas: purchaseRoasData,
            spend: spendData,
            video_avg_time_watched_actions: videoAvgTimeWatchedActionsData,
            website_ctr: websiteCtrData
          })
          console.log('fbChartsDataSet', fbChartsDataSet)
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

  async function getCampaigns() {
    try {
      setLoadingData(true)
      const response = await fetch('/fapi/get_campaigns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if (response.ok) {
        const data: ICampaignsResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          setCampaigns(data.data)
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

  return (
    <>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>Social Metrics</h2>
        <CampaignsSelect
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onChange={(value) => {
            setSelectedCampaign(value)
          }}
        />
        <DateRangeBtns />
        <Spin spinning={loadingData}>
          <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
            {
              adsFbManagementData && Object.entries(adsFbManagementData).map(([key, value], index) => (
                <DashCard
                  key={index}
                  title={capitalize(key)}
                  value={value}
                />
              ))
            }
          </div>
        </Spin>
        <Spin spinning={loadingChart}>
          <div className='w-full mx-auto mt-6 rounded-lg flex flex-col gap-4'>
            <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4'>
              <ChartCard title='Clicks'>
                {fbChartsDataSet?.clicks && <TheResponsiveLine data={fbChartsDataSet?.clicks} />}
              </ChartCard>
              <ChartCard title='Impressions'>
                {fbChartsDataSet?.impressions && <TheResponsiveLine data={fbChartsDataSet?.impressions} />}
              </ChartCard>
              <ChartCard title='Spend'>
                {fbChartsDataSet?.spend && <TheResponsiveBar data={fbChartsDataSet?.spend} />}
              </ChartCard>
              <ChartCard title='Reach'>
                {fbChartsDataSet?.reach && <TheResponsiveLine data={fbChartsDataSet?.reach} />}
              </ChartCard>
              <ChartCard title='Conversions'>
                {fbChartsDataSet?.conversions && <TheResponsiveLine data={fbChartsDataSet?.conversions} />}
              </ChartCard>
              <ChartCard title='Cost Per Conversion'>
                {fbChartsDataSet?.cost_per_conversion && <TheResponsiveLine data={fbChartsDataSet?.cost_per_conversion} />}
              </ChartCard>
              <ChartCard title='Cost Per Unique Click'>
                {fbChartsDataSet?.cost_per_unique_click && <TheResponsiveLine data={fbChartsDataSet?.cost_per_unique_click} />}
              </ChartCard>
              <ChartCard title='CPC'>
                {fbChartsDataSet?.cpc && <TheResponsiveLine data={fbChartsDataSet?.cpc} />}
              </ChartCard>
              <ChartCard title='CPM'>
                {fbChartsDataSet?.cpm && <TheResponsiveLine data={fbChartsDataSet?.cpm} />}
              </ChartCard>
              <ChartCard title='CPP'>
                {fbChartsDataSet?.cpp && <TheResponsiveLine data={fbChartsDataSet?.cpp} />}
              </ChartCard>
              <ChartCard title='CTR'>
                {fbChartsDataSet?.ctr && <TheResponsiveLine data={fbChartsDataSet?.ctr} />}
              </ChartCard>
              <ChartCard title='Purchase ROAS'>
                {fbChartsDataSet?.purchase_roas && <TheResponsiveLine data={fbChartsDataSet?.purchase_roas} />}
              </ChartCard>
              <ChartCard title='Video Avg Time Watched Actions'>
                {fbChartsDataSet?.video_avg_time_watched_actions && <TheResponsiveLine data={fbChartsDataSet?.video_avg_time_watched_actions} />}
              </ChartCard>
              <ChartCard title='Website CTR'>
                {fbChartsDataSet?.website_ctr && <TheResponsiveLine data={fbChartsDataSet?.website_ctr} />}
              </ChartCard>
            </div>
          </div>
        </Spin>
      </section>
    </>
  )
}

const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className='flex flex-col p-4 bg-[#27282F] rounded-lg'>
      <span className='text-base text-primary-gray pl-4'>
        {title}
      </span>
      <div className='w-full mx-auto h-[300px]'>
        {children}
      </div>
    </div>
  )
}

export default SocialMetrics
