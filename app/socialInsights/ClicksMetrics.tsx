import { DateRange } from '@/app/socialInsights/FilterBtns';
import AreaChart from '@/components/d3/AreaChart';
import { SocialInsightsContext } from '@/context/socialInsights';
import { areaData } from '@/data/socialInsights';
import { AreaData, ClicksMetricLabel } from '@/types/socialInsights';
import { Spin, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react'


type LabelSelectProps = {
  text: ClicksMetricLabel
  color: string
  selectedSet: Set<ClicksMetricLabel>
  setSelectedSet: (set: Set<ClicksMetricLabel>) => void
}

const LabelSelect = ({ text, color, selectedSet, setSelectedSet }: LabelSelectProps) => {

  function onClick() {
    if (selectedSet.has(text)) {
      selectedSet.delete(text)
    } else {
      selectedSet.add(text)
    }
    setSelectedSet(new Set(selectedSet))
  }

  return (
    <button
      onClick={onClick}
      className={
        `h-min flex flex-col gap-[6px] px-4 py-3 rounded-lg bg-[#27282F] border hover:opacity-80 transition-all duration-300
        ${selectedSet.has(text) ? 'border-primary-purple text-white' : 'border-[#27282F] text-primary-gray'}
      `}
    >
      <div className='flex flex-col'>
        <span className={`w-4 h-[2px]`} style={{ backgroundColor: color }} />
        <span className={`w-4 h-1 opacity-40`} style={{ backgroundColor: color }} />
      </div>
      <div className='text-xs'>{text}</div>
    </button>
  )
}

const colors = ['#80B4FF', '#FFC775', '#34A853', '#844FFF', '#EE77A2'] as const

const ClicksMetrics = () => {

  const { dateRange } = useContext(SocialInsightsContext)
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<AreaData[]>(areaData)
  const [colorMap, setColorMap] = useState<Record<ClicksMetricLabel, string>>({
    'Email link clicks': colors[0],
    'Website clicks': colors[1],
    'Phone call clicks': colors[2],
    'Text message clicks': colors[3],
    'Profile link clicks': colors[4]
  })

  const [selectedSet, setSelectedSet] = useState<Set<ClicksMetricLabel>>(new Set([
    'Email link clicks',
    'Website clicks',
    'Phone call clicks',
    'Text message clicks',
    'Profile link clicks'
  ]))

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setData(areaData())
      setLoading(false)
    }, 1000)
  }, [dateRange])

  return (
    <>
      <section className='mt-8 p-7 bg-[#1B1C21] border border-[#27282F] rounded-xl'>
        {contextHolder}
        <h2 className='text-lg'>Clicks Metrics</h2>
        <DateRange />
        <Spin spinning={loading}>
          <div className='w-full mx-auto mt-8 p-8 bg-black/20 rounded-lg'>
            <div className='flex gap-3 justify-end mb-3'>
              {
                Object.entries(colorMap).map(([key, value]) => (
                  <LabelSelect key={key} selectedSet={selectedSet} setSelectedSet={setSelectedSet} text={key as ClicksMetricLabel} color={value} />
                ))
              }
            </div>
            {!!selectedSet.size && <AreaChart data={data.filter(d => selectedSet.has(d.name as ClicksMetricLabel))} colorMap={colorMap} />}
          </div>
        </Spin>
      </section>
    </>
  )
}

export default ClicksMetrics
