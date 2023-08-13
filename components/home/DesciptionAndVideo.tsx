import React from 'react'

const DesciptionAndVideo = () => {
  return (
    <div className='w-full h-min py-4 sm:py-12 bg-[#050a2a]'>
      <div className='flex gap-11 flex-wrap items-center justify-center max-w-[1100px] mx-auto'>
        <div className='flex flex-col text-white sm:gap-9 flex-1'>
          <div className='flex gap-5 items-center p-6 rounded-lg'
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)'
            }}
          >
            <div className='text-4xl sm:text-5xl'>🦄</div>
            <div className='max-w-[320px] flex items-center'>
              {`We've delivered over 77000+ Ads content for clients`}
            </div>
          </div>
          <div className='flex gap-5 items-center p-6 rounded-lg'
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)'
            }}
          >
            <div className='text-4xl sm:text-5xl'>⏰</div>
            <div className='max-w-[320px] flex items-center'>
              Saving time from training marketers, hiring agencies and conducting analysis.
            </div>
          </div>
          <div className='flex gap-5 items-center p-6 rounded-lg'
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)'
            }}
          >
            <div className='text-4xl sm:text-5xl'>☎️</div>
            <div className='max-w-[320px] flex items-center'>
              One-Click deployment + real time fine tuning on models
            </div>
          </div>
        </div>
        <div className='sm:w-[540px] sm:h-[400px] rounded-lg overflow-hidden '>
          <iframe className='w-full h-full' src="https://www.youtube.com/embed/aEEINIkBd20" title="AdsGency AI Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default DesciptionAndVideo
