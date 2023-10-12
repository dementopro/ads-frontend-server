
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext, useEffect, useState } from 'react'
import arrowUpBoldCircleOutline from '@iconify/icons-mdi/arrow-up-bold-circle-outline';
import { Icon } from '@iconify/react';
import { DateRange, FbChartsDataSet, IAdsFbManagementResp, ICampaignsData, ICampaignsResp, IFbChartResp } from '@/types/socialInsights';
import { Empty, Spin } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { CampaignsSelect, DateRangeBtns } from '@/app/socialInsights/FilterBtns';
import { capitalize } from '@/lib/format';
import TheResponsiveLine from '@/components/d3/TheResponsiveLine';
import TheResponsiveBar from '@/components/d3/TheResponsiveBar';
import axios from '@/lib/axios';

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
    // fetchAdsData()
    fetchChartData()
  }, [dateRange, selectedCampaign]);

  async function fetchAdsData() {
    try {
      setLoadingData(true)
      const response = await axios({
        url: '/fapi/ads_fb_management',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          mode: selectedCampaign,
          date_range: dateMap[dateRange]
        })
      })
      if (response.status === 200) {
        const data: IAdsFbManagementResp & {
          [key in keyof FbChartsDataSet]: number | string
        } = response.data
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
      const response = await axios({
        url: '/fapi/get_charts',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          mode: selectedCampaign,
          date_range: dateMap[dateRange]
        })
      })
      if (response.status === 200) {
        const data: IFbChartResp = response.data
        if (data.status === SUCCESS_CODE) {
          const { clicks, impressions, reach, start_dates, conversions, cost_per_conversion, cost_per_unique_click, cpc, cpm, cpp, ctr, purchase_roas, spend, video_avg_time_watched_actions, website_ctr } = data.data
          const clicksData = clicks ? [{
            id: 'Clicks',
            color: '#844fff',
            data: clicks.map((click, i) => ({ x: start_dates[i], y: click }))
          }] : []
          const impressionsData = impressions ? [{
            id: 'Impressions',
            color: '#844fff',
            data: impressions.map((impression, i) => ({ x: start_dates[i], y: impression }))
          }] : []
          const reachData = reach ? [{
            id: 'Reach',
            color: '#844fff',
            data: reach.map((reach, i) => ({ x: start_dates[i], y: reach }))
          }] : []
          const conversionsData = conversions ? [{
            id: 'Conversions',
            color: '#844fff',
            data: conversions.map((conversion, i) => ({ x: start_dates[i], y: conversion }))
          }] : []
          const costPerConversionData = cost_per_conversion ? [{
            id: 'Cost Per Conversion',
            color: '#844fff',
            data: cost_per_conversion.map((costPerConversion, i) => ({ x: start_dates[i], y: costPerConversion }))
          }] : []
          const costPerUniqueClickData = cost_per_unique_click ? [{
            id: 'Cost Per Unique Click',
            color: '#844fff',
            data: cost_per_unique_click.map((costPerUniqueClick, i) => ({ x: start_dates[i], y: costPerUniqueClick }))
          }] : []
          const cpcData = cpc ? [{
            id: 'CPC',
            color: '#844fff',
            data: cpc.map((cpc, i) => ({ x: start_dates[i], y: cpc }))
          }] : []
          const cpmData = cpm ? [{
            id: 'CPM',
            color: '#844fff',
            data: cpm.map((cpm, i) => ({ x: start_dates[i], y: cpm }))
          }] : []
          const cppData = cpp ? [{
            id: 'CPP',
            color: '#844fff',
            data: cpp.map((cpp, i) => ({ x: start_dates[i], y: cpp }))
          }] : []
          const ctrData = ctr ? [{
            id: 'CTR',
            color: '#844fff',
            data: ctr.map((ctr, i) => ({ x: start_dates[i], y: ctr }))
          }] : []
          const purchaseRoasData = purchase_roas ? [{
            id: 'Purchase ROAS',
            color: '#844fff',
            data: purchase_roas.map((purchaseRoas, i) => ({ x: start_dates[i], y: purchaseRoas }))
          }] : []
          const spendData = spend ? start_dates.map((item, index) => {
            return {
              Date: item,
              Spend: spend[index],
            }
          }) : []
          const videoAvgTimeWatchedActionsData = video_avg_time_watched_actions ? [{
            id: 'Video Avg Time Watched Actions',
            color: '#844fff',
            data: video_avg_time_watched_actions.map((videoAvgTimeWatchedActions, i) => ({ x: start_dates[i], y: videoAvgTimeWatchedActions }))
          }] : []
          const websiteCtrData = website_ctr ? [{
            id: 'Website CTR',
            color: '#844fff',
            data: website_ctr.map((websiteCtr, i) => ({ x: start_dates[i], y: websiteCtr }))
          }] : []
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
      const response = await axios({
        url: '/fapi/get_campaigns',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if (response.status === 200) {
        const data: ICampaignsResp = response.data
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
        {/* <Spin spinning={loadingData}>
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
        </Spin> */}
        <Spin spinning={loadingChart}>
          <div className='w-full mx-auto mt-6 rounded-lg flex flex-col gap-4'>
            <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4'>
              <ChartCard title='Clicks' isEmpty={!fbChartsDataSet?.clicks?.length}>
                {fbChartsDataSet?.clicks && <TheResponsiveLine data={fbChartsDataSet?.clicks} />}
              </ChartCard>
              <ChartCard title='Impressions' isEmpty={!fbChartsDataSet?.impressions?.length}>
                {fbChartsDataSet?.impressions && <TheResponsiveLine data={fbChartsDataSet?.impressions} />}
              </ChartCard>
              <ChartCard title='Spend' isEmpty={!fbChartsDataSet?.spend?.length}>
                {fbChartsDataSet?.spend && <TheResponsiveBar data={fbChartsDataSet?.spend} />}
              </ChartCard>
              <ChartCard title='Reach' isEmpty={!fbChartsDataSet?.reach?.length}>
                {fbChartsDataSet?.reach && <TheResponsiveLine data={fbChartsDataSet?.reach} />}
              </ChartCard>
              <ChartCard title='Conversions' isEmpty={!fbChartsDataSet?.conversions?.length}>
                {fbChartsDataSet?.conversions && <TheResponsiveLine data={fbChartsDataSet?.conversions} />}
              </ChartCard>
              <ChartCard title='Cost Per Conversion' isEmpty={!fbChartsDataSet?.cost_per_conversion?.length}>
                {fbChartsDataSet?.cost_per_conversion && <TheResponsiveLine data={fbChartsDataSet?.cost_per_conversion} />}
              </ChartCard>
              <ChartCard title='Cost Per Unique Click' isEmpty={!fbChartsDataSet?.clicks?.length}>
                {fbChartsDataSet?.cost_per_unique_click && <TheResponsiveLine data={fbChartsDataSet?.cost_per_unique_click} />}
              </ChartCard>
              <ChartCard title='CPC' isEmpty={!fbChartsDataSet?.cpc?.length}>
                {fbChartsDataSet?.cpc && <TheResponsiveLine data={fbChartsDataSet?.cpc} />}
              </ChartCard>
              <ChartCard title='CPM' isEmpty={!fbChartsDataSet?.cpm?.length}>
                {fbChartsDataSet?.cpm && <TheResponsiveLine data={fbChartsDataSet?.cpm} />}
              </ChartCard>
              <ChartCard title='CPP' isEmpty={!fbChartsDataSet?.cpp?.length}>
                {fbChartsDataSet?.cpp && <TheResponsiveLine data={fbChartsDataSet?.cpp} />}
              </ChartCard>
              <ChartCard title='CTR' isEmpty={!fbChartsDataSet?.ctr?.length}>
                {fbChartsDataSet?.ctr && <TheResponsiveLine data={fbChartsDataSet?.ctr} />}
              </ChartCard>
              <ChartCard title='Purchase ROAS' isEmpty={!fbChartsDataSet?.purchase_roas?.length}>
                {fbChartsDataSet?.purchase_roas && <TheResponsiveLine data={fbChartsDataSet?.purchase_roas} />}
              </ChartCard>
              <ChartCard title='Video Avg Time Watched Actions' isEmpty={!fbChartsDataSet?.video_avg_time_watched_actions?.length}>
                {fbChartsDataSet?.video_avg_time_watched_actions && <TheResponsiveLine data={fbChartsDataSet?.video_avg_time_watched_actions} />}
              </ChartCard>
              {/* <ChartCard title='Website CTR' isEmpty={!fbChartsDataSet?.website_ctr?.length}>
                {fbChartsDataSet?.website_ctr && <TheResponsiveLine data={fbChartsDataSet?.website_ctr} />}
              </ChartCard> */}
            </div>
          </div>
        </Spin>
      </section>
    </>
  )
}

const ChartCard = ({ title, children, isEmpty }: { title: string, children: React.ReactNode, isEmpty?: boolean }) => {
  return (
    <div className='flex flex-col p-4 bg-[#27282F] rounded-lg'>
      <span className='text-base text-primary-gray pl-4'>
        {title}
      </span>
      <div className='w-full mx-auto h-[300px] flex items-center justify-center'>
        {isEmpty
          ? <Empty
            image="/images/empty.svg"
            description={<span className='text-primary-gray'>No Data</span>}
          />
          : children}
      </div>
    </div>
  )
}

export default SocialMetrics
