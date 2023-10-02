'use client'
import { DateRangeBtns } from '@/app/socialInsights/FilterBtns'
import TheResponsiveBar from '@/components/d3/AgeResponsiveBar'
import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { DateRange } from '@/types/socialInsights'
import { TTChartsDataSet, TikTokReportsBasic, TikTokReportsBasicResp, TikTokReportsResp } from '@/types/tiktok'
import { getDateListBetween, getDateRange } from '@/utils'
import { Empty, Spin } from 'antd'
import { useContext, useEffect, useState } from 'react'


const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

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

const SocialMetrics = () => {

  const { dateRange } = useContext(SocialInsightsContext)
  const [loadingChart, setLoadingChart] = useState(false)
  const [loadingBasic, setLoadingBasic] = useState(false)
  const [tikTokChartsDataSet, setTiktokChartsDataSet] = useState<Partial<TTChartsDataSet> | null>(null)
  const [tikTokBasicDataSet, setTikTokBasicDataSet] = useState<Partial<TikTokReportsBasic | null>>(null)

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
          const impressionsData = ageLabel?.length && impressions ? ageLabel.map((item, index) => {
            return {
              Age: item,
              Impressions: +impressions[index],
              age: +item.split('-')[0]
            }
          }) : []
          const ctrData = ageLabel?.length && ctr ? ageLabel.map((item, index) => {
            return {
              Age: item,
              CTR: +ctr[index],
              age: +item.split('-')[0]
            }
          }) : []
          const spendData = ageLabel?.length && spend ? ageLabel.map((item, index) => {
            return {
              Age: item,
              Spend: +spend[index],
              age: +item.split('-')[0]
            }
          }) : []
          const conversionData = ageLabel?.length && conversion ? ageLabel.map((item, index) => {
            return {
              Age: item,
              Conversion: +conversion[index],
              age: +item.split('-')[0]
            }
          }) : []
          const cpcData = ageLabel?.length && cpc ? ageLabel.map((item, index) => {
            return {
              Age: item,
              CPC: +cpc[index],
              age: +item.split('-')[0]
            }
          }) : []
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
          <DashCard label='Advertiser Id' value={tikTokBasicDataSet?.advertiser_id?.[0]} />
          <DashCard label='Start Date' value={tikTokBasicDataSet?.start_date} />
          <DashCard label='End Date' value={tikTokBasicDataSet?.end_date} />
        </div>
        <div className='mt-4 flex flex-wrap items-center gap-3'>
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
            <ChartCard
              title='Clicks'
              isEmpty={!tikTokChartsDataSet?.clicks?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='Clicks'
                data={tikTokChartsDataSet?.clicks || []} />
            </ChartCard>
            <ChartCard
              title='Impressions'
              isEmpty={!tikTokChartsDataSet?.impressions?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='Impressions'
                data={tikTokChartsDataSet?.impressions || []} />
            </ChartCard>
            <ChartCard
              title='Spend'
              isEmpty={!tikTokChartsDataSet?.spend?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='Spend'
                data={tikTokChartsDataSet?.spend || []} />
            </ChartCard>
            <ChartCard
              title='CTR'
              isEmpty={!tikTokChartsDataSet?.ctr?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='CTR'
                data={tikTokChartsDataSet?.ctr || []} />
            </ChartCard>
            <ChartCard
              title='Conversion'
              isEmpty={!tikTokChartsDataSet?.conversion?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='Conversion'
                data={tikTokChartsDataSet?.conversion || []} />
            </ChartCard>
            <ChartCard
              title='CPC'
              isEmpty={!tikTokChartsDataSet?.cpc?.length}>
              <TheResponsiveBar
                xLabel='Age'
                yLabel='CPC'
                data={tikTokChartsDataSet?.cpc || []} />
            </ChartCard>
          </div>
        </div>
      </Spin>
    </section>
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
