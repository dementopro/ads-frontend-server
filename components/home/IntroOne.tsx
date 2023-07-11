import Image from 'next/image'
import React from 'react'

const IntroOne = () => {
  return (
    <div className='w-full px-20 my-10 flex items-center justify-between'>
      <div className='flex flex-col gap-8'>
        <div className='text-3xl max-w-[500px]'>One click deployment to public or on-premise cloud</div>
        <div className='text-primary-gray flex flex-col gap-4 max-w-[580px] text-sm'>
          <p>Advanced Automation: PrecisionML implements end-to-end automated workflows, freeing up your data science teams to focus on crafting superior ML models instead of toiling with routine tasks.</p>
          <p>Intelligent Monitoring: With PrecisionML, you&apos;ll receive real-time performance metrics of your models. Our software continuously monitors these metrics, ensuring that any drift or anomaly is promptly identified and notified for immediate attention.</p>
          <p>Seamless Integration: PrecisionML easily integrates with your existing tech stack. Whether you&apos;re using AWS, GCP, Azure, or any other platform, our software molds itself to your environment, providing seamless operations.</p>
        </div>
      </div>
      <Image src={'/images/home/base.png'} width={580} height={440} alt='intro' />
    </div>
  )
}

export default IntroOne
