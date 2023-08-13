import Image from 'next/image'
import React from 'react'

const IntroOne = () => {
  return (
    <div className='w-full mx-auto max-sm:p-4 py-2 sm:py-20 bg-[#050a2a]'>
      <div className='mx-auto max-w-[1100px] flex items-center justify-between max-sm:flex-col'>
        <div className='flex flex-col gap-8 max-sm:mb-6'>
          <h2 className='italic text-3xl max-sm:text-center max-w-[500px]'>
            One click deployment to public or on-premise cloud
          </h2>
          <div className='text-primary-gray max-sm:text-center flex flex-col gap-4 max-w-[540px] text-sm'>
            <p>Advanced Automation: PrecisionML implements end-to-end automated workflows, freeing up your data science teams to focus on crafting superior ML models instead of toiling with routine tasks.</p>
            <p>Intelligent Monitoring: With PrecisionML, you&apos;ll receive real-time performance metrics of your models. Our software continuously monitors these metrics, ensuring that any drift or anomaly is promptly identified and notified for immediate attention.</p>
            <p>Seamless Integration: PrecisionML easily integrates with your existing tech stack. Whether you&apos;re using AWS, GCP, Azure, or any other platform, our software molds itself to your environment, providing seamless operations.</p>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <div className='z-50 p-2 rounded-lg bg-[#9f70be] w-full h-full'>
            <Image src={'/images/home/base.png'} width={480} height={360} alt='intro' />
          </div>
          <div className='z-20 flex items-center justify-center rounded-lg bg-[#7d3e8f] absolute inset-0 w-[90%] h-[110%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
          <div className='z-30 flex items-center justify-center rounded-lg bg-[#88539b] absolute inset-0 w-[95%] h-[105%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
        </div>
      </div>
    </div>
  )
}

export default IntroOne
