import { SocialInsightsContext } from '@/context/socialInsights'
import Image from 'next/image'
import React, { useContext } from 'react'


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


const Topbar = () => {

  const { topTab, setTopTab } = useContext(SocialInsightsContext)

  return (
    <div className='mt-6 flex items-center gap-4'>
      <Button
        onClick={() => setTopTab('social')}
        isActivated={topTab === 'social'}>
        <Image src='/images/socialInsights/toptab/icon1.svg' alt={'Social Metrics'} width={24} height={24} />
        <span className='truncate' title='Social Metrics'>Social Metrics</span>
      </Button>
      {/* <Button
        onClick={() => setTopTab('click')}
        isActivated={topTab === 'click'}>
        <Image src='/images/socialInsights/toptab/icon2.svg' alt={'Social Metrics'} width={24} height={24} />
        <span className='truncate' title='Click Metrics'>Click Metrics</span>
      </Button> */}
      <Button
        onClick={() => setTopTab('follower')}
        isActivated={topTab === 'follower'}>
        <Image src='/images/socialInsights/toptab/icon3.svg' alt={'Social Metrics'} width={24} height={24} />
        <span className='truncate' title='Follower Profile'>Follower Profile</span>
      </Button>
    </div>
  )
}

export default Topbar
