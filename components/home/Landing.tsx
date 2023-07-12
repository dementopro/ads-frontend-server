import React from 'react'
import styles from './home.module.css'
import Button from '@/components/Button'

const Landing = () => {
  return (
    <div className={`w-full h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center justify-center gap-7 ${styles['home-bg']}`}>
      <h1 className={`${styles['landing-title']} max-w-[928px] text-[64px] font-extrabold text-center flex flex-col`}>
        <span>One stop ads</span>
        <span>platform without limits</span>
      </h1>
      <p className='text-center text-2xl text-white'>We are an enabler, Not a disrupter</p>
      <Button btnStyle='w-[406px] h-12 text-semibold'>Try AdsGency</Button>
      <div className='text-white text-[26px] text-center mt-[30px] flex items-center'>
        Trusted by <span className='px-4 font-extrabold text-5xl'>10,000+</span> businesses cross <span className='px-4 font-extrabold text-5xl'>145+</span> countries
      </div>
    </div>
  )
}

export default Landing