import SocialMetrics from '@/app/socialInsights/TikTok/SocialMetrics'
import Image from 'next/image'
import React from 'react'


type Props = {
  children: React.ReactNode
  isActivated?: boolean
  onClick?: () => void
}

const Button = ({ children, isActivated, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-12 flex items-center justify-center gap-2 text-[18px] hover:bg-[#35363A] border-2 rounded-full  ${isActivated ? 'text-white border-primary-purple bg-[#35363A]' : 'border-[#989899] text-primary-gray bg-[#1B1C21]'}`}>
      {children}
    </button>
  )
}

const TikTokDashboard = () => {
  return (
    <>
      <div className='mt-6 flex items-center gap-4'>
        <Button
          isActivated={true}>
          <Image src='/images/socialInsights/toptab/icon1.svg' alt={'Social Metrics'} width={24} height={24} />
          <span className='truncate' title='Social Metrics'>Social Metrics</span>
        </Button>
      </div>
      <SocialMetrics />
    </>
  )
}

export default TikTokDashboard
