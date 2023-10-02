// Import necessary dependencies and components
import { DateRangeBtns } from '@/app/socialInsights/FilterBtns'
import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { DateRange, IFbFollowersResp } from '@/types/socialInsights'
import { Empty, Spin, message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import Choropleth from '@/components/d3/Geo/Choropleth'
import TheResponsivePie from '@/components/d3/TheResponsivePie'
import { getCountryISO3 } from '@/utils'
import { MayHaveLabel } from '@nivo/pie'

// Define a component for individual dashboard cards
type DashCardProps = {
  title: string
  value: number
}

const DashCard = ({ title, value }: DashCardProps) => {
  return (
    <div className={`w-[244px] rounded-xl p-4 flex flex-col gap-2 border cursor-pointer hover:bg-[#35363A] border-transparent bg-[#27282F]`}>
      <div className='text-lg font-semibold'>
        {value.toLocaleString('en')}
      </div>
      <div className='w-full flex items-center justify-between'>
        <span className='text-primary-gray text-sm'>
          {title}
        </span>
      </div>
    </div>
  )
}

// Define a mapping of date range options to their respective day counts
const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

// Main component for follower profile
const FollowerProfile = () => {
  // Define states to manage data fetching, loading, and retrieved data
  const [followersNum, setFollowersNum] = useState(199780)
  const [loading, setLoading] = useState(false);
  const { dateRange } = useContext(SocialInsightsContext)
  const [messageApi, contextHolder] = message.useMessage();
  const [genderData, setGenderData] = useState<MayHaveLabel[] | null>(null)
  const [ageData, setAgeData] = useState<MayHaveLabel[] | null>(null)
  const [countryData, setCountryData] = useState<{
    id: string,
    value: number
  }[] | null>(null)

  // Fetch data when the date range changes
  useEffect(() => {
    fetchData()
  }, [dateRange]);

  // Function to fetch follower data
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('/fapi/get_fb_reach_by', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mode: 'all',
          date_range: dateMap[dateRange],
        })
      })
      if (response.ok) {
        const data: IFbFollowersResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          const { gender, age, country } = data.data
          const genderData = gender?.map(([label, value]) => ({
            id: label,
            label,
            value,
          })) || []
          const ageData = age?.map(([label, value]) => ({
            id: label,
            label,
            value,
          })) || []
          const countryData = country?.map(([label, value]) => ({
            id: getCountryISO3(label),
            value,
          })) || []
          setGenderData(genderData)
          setAgeData(ageData)
          setCountryData(countryData)
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

  // Render the follower profile section
  return (
    <>
      {contextHolder}
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          Followers profile
        </h2>
        <DateRangeBtns />
        <Spin spinning={loading}>
          {/* Rendering charts */}
          <div className='w-full mx-auto mt-6 rounded-lg flex flex-col gap-4'>
            <div className='grid grid-flow-row grid-cols-1 gap-4'>
              <ChartCard title='Followers by country' isEmpty={!countryData?.length}>
                {countryData && <Choropleth data={countryData} />}
              </ChartCard>
            </div>
          </div>
        </Spin>
        <Spin spinning={loading}>
          <div className='w-full mx-auto mt-4 rounded-lg flex flex-col gap-4'>
            <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4'>
              <ChartCard title='Followers by gender' isEmpty={!genderData?.length}>
                {genderData && <TheResponsivePie data={genderData} />}
              </ChartCard>
              <ChartCard title='Followers by age' isEmpty={!ageData?.length}>
                {ageData && <TheResponsivePie data={ageData} />}
              </ChartCard>
            </div>
          </div>
        </Spin>
      </section>
    </>
  )
}

// Chart card component to display a chart with title
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

export default FollowerProfile