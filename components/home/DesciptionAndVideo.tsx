import React from 'react'

const DesciptionAndVideo = () => {
  return (
    <div className='w-full h-min my-10'>
      <div className='flex gap-11 flex-wrap items-center justify-center '>
        <div className='flex flex-col text-white gap-9'>
          <div className='flex gap-5 items-center p-6 bg-[#27282F] rounded-xl h-[120px] w-[594px]'>
            <div className='text-[60px]'>🦄</div>
            <div className='h-[66px] max-w-[300px] flex items-center'>We’ve delivered over 77000+ Ads content for clients</div>
          </div>
          <div className='flex gap-5 items-center p-6 bg-[#27282F] rounded-xl h-[120px]'>
            <div className='text-[60px]'>⏰</div>
            <div className='h-[66px] max-w-[300px] flex items-center'>Saving time from training marketers, hiring agencies and conducting analysis.</div>
          </div>
          <div className='flex gap-5 items-center p-6 bg-[#27282F] rounded-xl h-[120px]'>
            <div className='text-[60px]'>☎️</div>
            <div className='h-[66px] max-w-[300px] flex items-center'>One-Click deployment + real time fine tuning on models</div>
          </div>
        </div>
        <div className='w-[655px] h-[438px] rounded-lg overflow-hidden '>
          <iframe width="655" height="438" src="https://www.youtube.com/embed/aEEINIkBd20" title="AdsGency AI Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default DesciptionAndVideo
