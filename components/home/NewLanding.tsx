'use client'
import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import IndustryLeader from '@/components/home/IndustryLeader'

const NewLanding = () => {
  return (
    <div className={`pt-[72px] w-full h-[calc(100vh-64px)] sm:h-[860px] flex flex-col items-center text-center ${styles['new-home-bg']} overflow-hidden relative`}>
      <div className='flex flex-col items-center justify-center gap-7 max-sm:w-[80%]'>
        <h1 className={`max-sm:text-3xl text-5xl font-extrabold text-center flex flex-wrap justify-center`}>
          One Stop
          <span className={`${styles['landing-title']} px-2`}>Ad Platform</span>
          Without Limits
        </h1>
        <h2 className={`max-sm:text-lg text-2xl text-center flex flex-wrap justify-center items-baseline`}>
          <div className='flex items-baseline'>
            <span>We are an</span>
            <span className={`${styles['landing-title']} text-4xl px-2`}>enabler</span>
            <Image src='/images/home/sparkles.svg' width={36} height={36} alt='sparkles' />
            <span className='mr-2'>,</span>
          </div>
          <div>Not a disrupter</div>
        </h2>
        <Link href='/requestDemo'
          className={`${styles['request-demo-btn']}`}>
          <span>Request Demo</span>
          <Icon icon='akar-icons:arrow-right' className='text-2xl' />
        </Link>
      </div>
      <div className='max-sm:hidden mt-10 w-full flex flex-col items-center justify-center '>
        <span className='text-white font-semibold text-xl'>
          Backed by Industry Leaders
        </span>
        <IndustryLeader />
      </div>
      <div className='relative sm:mt-8 flex justify-center border rounded-2xl border-primary-purple/80 p-2 w-[720px] h-[600px] bg-primary-purple/10 max-sm:scale-50'>
        <Image
          className='rounded-2xl overflow-hidden'
          src='/images/home/demo.png' width={720} height={600} alt='demo' />
        <div className='absolute left-[-28%] top-[25%] border rounded-2xl border-primary-purple/80 p-2 w-[188px] h-[180px] bg-primary-purple/10'>
          <Image
            className='rounded-2xl overflow-hidden'
            src='/images/home/left-demo.png' width={188} height={180} alt='demo' />
        </div>
        <div className='absolute right-[-28%] top-[16%] border rounded-2xl border-primary-purple/80 p-2 w-[430px] h-[250px] bg-primary-purple/10'>
          <Image
            className='rounded-2xl overflow-hidden'
            src='/images/home/right-demo.png' width={430} height={250} alt='demo' />
        </div>
      </div>
    </div>
  )
}

export default NewLanding
