'use client'
import React from 'react'
import styles from './features.module.css'

const TopContent = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 mb-8 pb-12 border-b border-primary-purple/50'>
      <h1 className={`${styles['landing-txt']}`}>
        Features with AdsGency AI
      </h1>
      <p className='text-center max-sm:px-6 max-w-[800px] my-8 text-white/80 '>
        {`AdsGency AI is not just a tool; it's a comprehensive solution designed to enhance every aspect of your advertising strategy. By leveraging advanced AI algorithms, we make it easier for you to reach your audience, convey your message, and achieve your marketing goals.`}
      </p>
      <div className='flex items-center'>
        <button
          onClick={() => {
            const features = document.getElementById('features')
            features?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-8 truncate`}>
          View Features
        </button>
      </div>
    </div>
  )
}

export default TopContent
