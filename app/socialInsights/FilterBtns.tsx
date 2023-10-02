import { SocialInsightsContext } from '@/context/socialInsights'
import { ICampaignsData } from '@/types/socialInsights'
import { Select } from 'antd'
import React, { useContext } from 'react'

// Button Component for custom buttons with onClick and isActive properties
const Button = ({ isActive, onClick, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      // Conditional classes based on isActive prop
      className={`rounded-lg py-2 px-4 border hover:bg-[#35363A] ${
        isActive
          ? 'border-primary-gray bg-[#35363A] text-white'
          : 'border-transparent text-primary-gray bg-[#27282F]'
      }`}
    >
      {text}
    </button>
  )
}

// Component for selecting the date range
const DateRangeBtns = () => {
  const { dateRange, setDateRange } = useContext(SocialInsightsContext)

  return (
    <div className='mt-5 flex items-center gap-3'>
      <div className='text-primary-gray'>Date Range</div>
      {/* Button for selecting "Last Day" */}
      <Button
        isActive={dateRange === 'last_day'}
        onClick={() => setDateRange('last_day')}
        text='Last Day'
      />
      {/* Button for selecting "Last Week" */}
      <Button
        isActive={dateRange === 'last_week'}
        onClick={() => setDateRange('last_week')}
        text='Last Week'
      />
      {/* Button for selecting "Last Month" */}
      <Button
        isActive={dateRange === 'last_month'}
        onClick={() => setDateRange('last_month')}
        text='Last Month'
      />
    </div>
  )
}

// Component for selecting data metrics
const DataMetrics = () => {
  const { dataMetric, setDataMetric } = useContext(SocialInsightsContext)

  return (
    <div className='mt-4 flex items-center gap-3'>
      <div className='text-primary-gray'>Data metrics</div>
      {/* Button for selecting "Page Engagement Metrics" */}
      <Button
        isActive={dataMetric === 'page'}
        onClick={() => setDataMetric('page')}
        text='Page Engagement Metrics'
      />
      {/* Button for selecting "Post Engagement Metrics" */}
      <Button
        isActive={dataMetric === 'post'}
        onClick={() => setDataMetric('post')}
        text='Post Engagement Metrics'
      />
      {/* Button for selecting "Video Metrics" */}
      <Button
        isActive={dataMetric === 'video'}
        onClick={() => setDataMetric('video')}
        text='Video Metrics'
      />
      {/* Button for selecting "Ad Performance Metrics" */}
      <Button
        isActive={dataMetric === 'ad'}
        onClick={() => setDataMetric('ad')}
        text='Ad Performance Metrics'
      />
    </div>
  )
}

// Component for selecting campaigns
const CampaignsSelect = ({ selectedCampaign, campaigns, onChange }: CampaignsSelectProps) => {
  const options = campaigns.map(campaign => ({
    label: campaign.name,
    value: campaign.name,
  }))

  return (
    <div className='mt-4 flex items-center gap-3'>
      <div className='text-primary-gray'>Campaigns</div>
      {/* Dropdown Select for Campaigns */}
      <Select
        defaultValue={selectedCampaign}
        style={{
          width: 280,
        }}
        onChange={onChange}
        // Adding "All" option to the beginning of the options list
        options={[{ label: 'All', value: 'all' }, ...options]}
      />
    </div>
  )
}

export { DateRangeBtns, DataMetrics, CampaignsSelect }