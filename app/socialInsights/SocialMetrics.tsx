// Import necessary modules and components
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

// Define the DashCard component for displaying data metrics
type DashCardProps = {
  title: string
  value: number | string
  interpolation?: number
}

const DashCard = ({ title, value, interpolation }: DashCardProps) => {
  return (
    <div className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] border-transparent bg-[#27282F]`}>
      <div className='text-lg font-semibold'>
        {value ?? '-'} {/* Display the value or '-' if value is not available */}
      </div>
      <div className='w-full flex items-center justify-between'>
        <span className='text-primary-gray text-sm'>
          {title} {/* Display the metric title */}
        </span>
        {
          interpolation && ( // Display an arrow icon and percentage for interpolation if available
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

// Define a mapping of date range values to their corresponding number of days
const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

// Define the SocialMetrics component
const SocialMetrics = () => {
  const { dateRange } = useContext(SocialInsightsContext) // Get the selected date range from context
  const [adsFbManagementData, setAdsFbManagementData] = useState<{
    [key in keyof FbChartsDataSet]: number | string
  } | null>(null) // State to store ads and Facebook management data
  const [loadingData, setLoadingData] = useState(false); // State to track data loading status
  const [loadingChart, setLoadingChart] = useState(false); // State to track chart loading status
  const [campaigns, setCampaigns] = useState<ICampaignsData[]>([]); // State to store campaign data
  const [selectedCampaign, setSelectedCampaign] = useState<string>('all'); // State to store the selected campaign
  const [fbChartsDataSet, setFbChartsDataSet] = useState<Partial<FbChartsDataSet> | null>(null); // State to store chart data

  // Fetch campaigns data when the component mounts
  useEffect(() => {
    getCampaigns()
  }, []);

  // Fetch ads data and chart data when date range or selected campaign changes
  useEffect(() => {
    fetchChartData()
  }, [dateRange, selectedCampaign]);

  // Function to fetch ads data from the server
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
          // Set the fetched ads and Facebook management data
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

  // Function to fetch chart data from the server
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
          const {
            clicks, impressions, reach, start_dates, conversions, cost_per_conversion,
            cost_per_unique_click, cpc, cpm, cpp, ctr, purchase_roas, spend,
            video_avg_time_watched_actions, website_ctr
          } = data.data

          // Prepare chart data for various metrics
          const clicksData = clicks ? [{
            id: 'Clicks',
            color: '#844fff',
            data: clicks.map((click, i) => ({ x: start_dates[i], y: click }))
          }] : []
          // Similar data preparations for other metrics...
          
          // Set the chart data
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

  // Function to fetch campaigns data from the server
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
          // Set the fetched campaigns data
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
        {/* Render CampaignsSelect component for selecting campaigns */}
        <CampaignsSelect
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onChange={(value) => {
            setSelectedCampaign(value)
          }}
        />
        {/* Render DateRangeBtns component for selecting date range */}
        <DateRangeBtns />

        {/* Render DashCard components for displaying data metrics */}
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

        {/* Render chart components with data */}
        <Spin spinning={loadingChart}>
          <div className='w-full mx-auto mt-6 rounded-lg flex flex-col gap-4'>
            <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4'>
              {/* Render ChartCard components for displaying charts */}
              <ChartCard title='Clicks' isEmpty={!fbChartsDataSet?.clicks?.length}>
                {fbChartsDataSet?.clicks && <TheResponsiveLine data={fbChartsDataSet?.clicks} />}
              </ChartCard>
              <ChartCard title='Impressions' isEmpty={!fbChartsDataSet?.impressions?.length}>
                {fbChartsDataSet?.impressions && <TheResponsiveLine data={fbChartsDataSet?.impressions} />}
              </ChartCard>
              {/* Similar rendering for other chart components... */}
            </div>
          </div>
        </Spin>
      </section>
    </>
  )
}

// Define a reusable ChartCard component for displaying charts
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