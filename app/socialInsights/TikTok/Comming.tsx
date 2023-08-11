import { SocialInsightsContext } from '@/context/socialInsights'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useContext } from 'react'

const Comming = () => {

  const { platforms } = useContext(SocialInsightsContext)

  return (
    <div className='mx-auto flex flex-col items-center justify-center mt-5 py-5 gap-10'>
      <h2 className='text-[18px] flex items-center justify-center '>
        Tik Tok Connected! 🎊
      </h2>
      <div className='flex items-center justify-between gap-10'>
        <Icon icon={platforms[1].icon} width={54} height={54} />
        <Image src={'/images/socialInsights/link.svg'} alt='tiktok' width={130} height={34} />
        <Image src={'/images/socialInsights/logo.svg'} alt='tiktok' width={54} height={54} />
      </div>
      <Image src='/images/socialInsights/man.svg' alt='man' width={204} height={176} />
      <div
        className='text-primary-gray flex items-center justify-center'>
        Dashboard is comming soon!
      </div>
    </div>
  )
}

export default Comming
