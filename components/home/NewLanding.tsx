'use client'
import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import IndustryLeader from '@/components/home/IndustryLeader'

const NewLanding = () => {
  return (
    <div className={`w-full h-[calc(100vh-64px)] flex items-center justify-center text-center ${styles['new-home-bg']} overflow-hidden`}>
      <div className='flex flex-col items-center relative w-full max-w-[1100px] mx-auto'>
        <h1 className={`mt-[120px] sm:mt-16 max-sm:text-3xl text-5xl self-start italic font-extrabold text-left flex flex-col gap-2 uppercase max-sm:text-center max-sm:w-full`}>
          <div className='text-white max-sm:flex max-sm:flex-col'>
            <span>One Stop</span>
            <span className={`${styles['landing-title']} px-6`}>Ad Platform</span>
          </div>
          <div className='text-white'>Without Limits</div>
        </h1>
        <div className='flex items-center justify-between w-full mt-[-20px] max-sm:flex-col max-sm:mt-8'>
          <div className='flex flex-col gap-7'>
            <h2 className={`max-sm:text-lg text-2xl text-left flex flex-col justify-center items-baseline max-sm:items-center`}>
              <div className='flex items-baseline'>
                <span>We are an</span>
                <span className={`${styles['enabler-text']} text-4xl px-2`}
                >Enabler</span>
                <Image src='/images/home/sparkles.svg' width={36} height={36} alt='sparkles' />
              </div>
              <div>Not a disrupter</div>
            </h2>
            <Link href='/requestDemo'
              style={{
                clipPath: 'polygon(0% 28%, 6% 0px, 100% 0px, 100% 72%, 94% 100%, 0px 100%)'
              }}
              className={`${styles['request-demo-btn']}`}>
              <span>Request Demo</span>
              <Icon icon='akar-icons:arrow-right' className='text-2xl' />
            </Link>
          </div>
          <div className='relative sm:mt-12 flex justify-center rounded-2xl p-2 w-[540px] h-[300px] bg-primary-purple/10 max-sm:scale-50'>
            <Image
              className='rounded-2xl overflow-hidden'
              src='/images/home/demo.png' width={540} height={300} alt='demo' />
            <div className='absolute left-[-16%] top-[25%] rounded-2xl border-[#1ce8eb] border-2 w-[110px] h-[110px] bg-primary-purple/10 flex items-center justify-center'>
              <Image
                className='rounded-2xl overflow-hidden'
                src='/images/home/left-demo.png' width={110} height={110} alt='left' />
            </div>
            <div className='absolute right-[-18%] top-[-28%] max-sm:top-1/4 rounded-2xl border-[#1ce8eb] border-2 w-[300px] h-[180px] bg-primary-purple/10 flex items-center justify-center'>
              <Image
                className='rounded-2xl overflow-hidden'
                src='/images/home/right-demo.png' width={300} height={180} alt='right' />
            </div>
          </div>
        </div>
        <div className='max-sm:hidden mt-10 w-full flex flex-col items-center justify-center '>
          <IndustryLeader />
        </div>
      </div>
    </div>
  )
}

export default NewLanding
