import { DateRangeBtns } from '@/app/socialInsights/FilterBtns'
import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { DateRange, IFbFollowersResp } from '@/types/socialInsights'
import { Spin, message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import Choropleth, { ChoroplethProps } from '@/components/d3/Geo/Choropleth'
import TheResponsivePie, { TheResponsivePieProps } from '@/components/d3/TheResponsivePie'
import { getCountryISO3 } from '@/utils'

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

const dateMap: Record<DateRange, number> = {
  last_day: 1,
  last_week: 7,
  last_month: 30,
}

const FollowerProfile = () => {

  const [followersNum, setFollowersNum] = useState(199780)
  const [loading, setLoading] = useState(false);
  const { dateRange } = useContext(SocialInsightsContext)
  const [messageApi, contextHolder] = message.useMessage();
  const [genderData, setGenderData] = useState<TheResponsivePieProps['data'] | null>(null)
  const [ageData, setAgeData] = useState<TheResponsivePieProps['data'] | null>(null)
  const [countryData, setCountryData] = useState<ChoroplethProps['data'] | null>(null)

  useEffect(() => {
    fetchData()
  }, [dateRange]);

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


  return (
    <>
      {contextHolder}
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          {/* <span className='font-semibold'>{followersNum.toLocaleString()}</span> */}
          Followers profile
        </h2>
        <DateRangeBtns />
        {/* <div className='mt-4 flex flex-wrap items-center gap-[18px]'>
          <DashCard title='Unfollowers' value={123} />
          <DashCard title='New followers' value={9999} />
        </div> */}
      </section>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <h2 className='text-lg'>
          Geographical Distribution
        </h2>
        <div className='grid grid-flow-row grid-cols-1 mt-6'>
          <div className='flex flex-col gap-6'>
            <span className='text-base'>
              Followers by courty
            </span>

            <Spin spinning={loading}>
              <div className='w-full mx-auto h-[360px]'>
                {countryData && <Choropleth data={countryData} />}
              </div>
            </Spin>
          </div>
        </div>
      </section>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        <div className='grid grid-flow-row grid-cols-2 gap-4'>
          <div className='flex flex-col gap-6'>
            <span className='text-base'>
              Followers by gender
            </span>
            <Spin spinning={loading}>
              <div className='w-full mx-auto h-[360px]'>
                {genderData && <TheResponsivePie data={genderData} />}
              </div>
            </Spin>
          </div>
          <div className='flex flex-col gap-6'>
            <span className='text-base'>
              Followers by age
            </span>
            <Spin spinning={loading}>
              <div className='w-full mx-auto h-[360px]'>
                {ageData && <TheResponsivePie data={ageData} />}
              </div>
            </Spin>
          </div>
        </div>
      </section>
    </>
  )
}

export default FollowerProfile
