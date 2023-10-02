import { SocialInsightsContext } from '@/context/socialInsights'
import Image from 'next/image'
import React, { useContext } from 'react'

// Define the Props type for the Button component
type Props = {
  children: React.ReactNode
  isActivated?: boolean
  onClick?: () => void
}

// Define the Button component
const Button = ({ children, isActivated, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-12 flex items-center justify-center gap-2 text-[18px] hover:bg-[#35363A] border-2 rounded-full  ${isActivated ? 'text-white border-primary-purple bg-[#35363A]' : 'border-[#989899] text-primary-gray bg-[#1B1C21]'}`}>
      {children}
    </button>
  )
}

// Define the Topbar component
const Topbar = () => {
  const { topTab, setTopTab } = useContext(SocialInsightsContext) // Get the topTab state and setTopTab function from context

  return (
    <div className='mt-6 flex items-center gap-4'>
      {/* Button for selecting 'Social Metrics' */}
      <Button
        onClick={() => setTopTab('social')} // Set the topTab state to 'social' when clicked
        isActivated={topTab === 'social'}> {/* Highlight the button if topTab is 'social' */}
        <Image src='/images/socialInsights/toptab/icon1.svg' alt={'Social Metrics'} width={24} height={24} />
        <span className='truncate' title='Social Metrics'>Social Metrics</span>
      </Button>
      {/* Button for selecting 'Click Metrics' */}
      {/* Commented out for now */}
      {/* <Button
        onClick={() => setTopTab('click')}
        isActivated={topTab === 'click'}>
        <Image src='/images/socialInsights/toptab/icon2.svg' alt={'Click Metrics'} width={24} height={24} />
        <span className='truncate' title='Click Metrics'>Click Metrics</span>
      </Button> */}
      {/* Button for selecting 'Follower Profile' */}
      <Button
        onClick={() => setTopTab('follower')} // Set the topTab state to 'follower' when clicked
        isActivated={topTab === 'follower'}> {/* Highlight the button if topTab is 'follower' */}
        <Image src='/images/socialInsights/toptab/icon3.svg' alt={'Follower Profile'} width={24} height={24} />
        <span className='truncate' title='Follower Profile'>Follower Profile</span>
      </Button>
    </div>
  )
}

export default Topbar