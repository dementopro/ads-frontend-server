'use client'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[64px] border-b border-[#3A3A3A] bg-[#1B1C21] px-8 flex items-center justify-between'>
      <Image src={'/logo.svg'} width={131} height={28} alt='logo' />
      <div className='flex items-center gap-4'>
        <button
          onClick={() => window.open('https://adsgency.ai/login')}
          className='flex items-center justify-center h-[44px] rounded-lg bg-primary-purple text-white cursor-pointer hover:opacity-80 px-4'>
          Try AdsGency
        </button>
        <div className='px-4 h-[44px] flex items-center cursor-pointer hover:opacity-80 text-primary-gray text-base'>contact us</div>
      </div>
    </div>
  )
}

export default Header
