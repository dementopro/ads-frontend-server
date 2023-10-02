// Import necessary dependencies and components
import { DateRangeBtns } from '@/app/socialInsights/FilterBtns'
import TheResponsiveBar from '@/components/d3/AgeResponsiveBar'
import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { DateRange } from '@/types/socialInsights'
import { TTChartsDataSet, TikTokReportsBasic, TikTokReportsBasicResp, TikTokReportsResp } from '@/types/tiktok'
import { getDateListBetween, getDateRange } from '@/utils'
import { Empty, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'

// Define a mapping of date ranges to their respective number of days
const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

// Define the DashCard component for displaying metric values
const DashCard = ({ value, label }: { value: string | undefined, label: string }) => {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <div className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] border-transparent bg-[#27282F]`}>
        <div className='text-lg font-semibold'>
          {label}
        </div>
        <div className='w-full flex items-center justify-between'>
          <span className='text-primary-gray text-sm'>
            {value === '' ? '-' : value ?? '-'}
          </span>
        </div>
      </div>
    </div>
  )
}

// Define the SocialMetrics component
const SocialMetrics = () => {
  // Get the date range from the context
  const { dateRange } = useContext(SocialInsightsContext)
  const [loadingChart, setLoadingChart] = useState(false)
  const [loadingBasic, setLoadingBasic] = useState(false)
  const [tikTokChartsDataSet, setTiktokChartsDataSet] = useState<Partial<TTChartsDataSet> | null>(null)
  const [tikTokBasicDataSet, setTikTokBasicDataSet] = useState<Partial<TikTokReportsBasic | null>>(null)

  // Function to fetch TikTok Basic data
  async function fetchTikTokBasicData() {
    try {
      setLoadingBasic(true)
      const [start, end] = getDateRange(dateMap[dateRange])
      const response = await fetch('/fapi/get_tt_reports_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start_date: start,
          end_date: end,
          report_type: 'BASIC',
        })
      })
      if (response.ok) {
        const data: TikTokReportsBasicResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          setTikTokBasicDataSet(data.data)
        } else {
          console.log('data', data.message)
        }
      } else {
        console.log('response', response.statusText)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoadingBasic(false)
    }
  }

  // Function to fetch TikTok Audience data
  async function fetchTikTokAudienceData() {
    try {
      setLoadingChart(true)
      const [start, end] = getDateRange(dateMap[dateRange])
      const response = await fetch('/fapi/get_tt_reports_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          start_date: start,
          end_date: end,
          report_type: 'AUDIENCE',
        })
      })
      if (response.ok) {
        const data: TikTokReportsResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          // Extract and format data for different metrics
          const { clicks, impressions, ctr, spend, age, conversion, cpc } = data.data
          const start_dates = getDateListBetween(start, end)
          const ageLabel = age?.map(item => `${item.split('_').slice(1).join('-')}`).filter(Boolean)
          const clicksData = ageLabel?.length && clicks ? ageLabel.map((item, index) => {
            return {
              Age: item,
              Clicks: +clicks[index],
              age: +item.split('-')[0]
            }
          }) : []
          // ... Repeat for other metrics
          
          // Set the formatted data in the state
          setTiktokChartsDataSet({
            clicks: clicksData.sort((a, b) => a.age - b.age),
            impressions: impressionsData.sort((a, b) => a.age - b.age),
            ctr: ctrData.sort((a, b) => a.age - b.age),
            spend: spendData.sort((a, b) => a.age - b.age),
            conversion: conversionData.sort((a, b) => a.age - b.age),
            cpc: cpcData.sort((a, b) => a.age - b.age),
          })
          console.log('tikTokChartsDataSet', tikTokChartsDataSet)
        } else {
          console.log('data', data.message)
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

  // Fetch data when the date range changes
  useEffect(() => {
    fetchTikTokAudienceData()
    fetchTikTokBasicData()
  }, [dateRange])

  return (
    <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
      <h2 className='text-lg'>Social Metrics</h2>
      <DateRangeBtns />
      <Spin spinning={loadingBasic}>
        <div className='mt-4 flex flex-wrap items-center gap-3'>
          {/* Display DashCard components for basic metrics */}
          <DashCard label='Advertiser Id' value={tikTokBasicDataSet?.advertiser_id?.[0]} />
          <DashCard label='Start Date' value={tikTokBasicDataSet?.start_date} />
          <DashCard label='End Date' value={tikTokBasicDataSet?.end_date} />
        </div>
        <div className='mt-4 flex flex-wrap items-center gap-3'>
          {/* Display DashCard components for other basic metrics */}
          <DashCard label='Clicks' value={tikTokBasicDataSet?.clicks?.[0]} />
          <DashCard label='Impressions' value={tikTokBasicDataSet?.impressions?.[0]} />
          <DashCard label='Spend' value={tikTokBasicDataSet?.spend?.[0]} />
          <DashCard label='Conversion' value={tikTokBasicDataSet?.conversion?.[0]} />
          <DashCard label='CTR' value={tikTokBasicDataSet?.ctr?.[0]} />
          <DashCard label='CPC' value={tikTokBasicDataSet?.cpc?.[0]} />
        </div>
      </Spin>
      <Spin spinning={loadingChart}>
        <div className='w-full mx-auto mt-6 rounded-lg flex flex-col gap-4'>
          <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4'>
            {/* Display charts for different metrics */}
            <ChartCard
              title='Clicks'
              isEmpty={!tikTokChartsDataSet?.clicks?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='Clicks'
                data={tikTokChartsDataSet?.clicks || []} />
            </ChartCard>
            {/* Repeat for other metrics */}
          </div>
        </div>
      </Spin>
    </section>
  )
}

// Define the ChartCard component for displaying charts
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

// Export the SocialMetrics component as the default export
export default SocialMetrics