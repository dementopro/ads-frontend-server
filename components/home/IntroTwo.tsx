import Image from 'next/image'
import React from 'react'

const IntroTwo = () => {
  return (
    <div className='w-full px-20 my-10 flex flex-row-reverse items-center justify-between'>
      <div className='flex flex-col gap-8'>
        <div className='text-3xl max-w-[500px]'>
          No code interface & low maintenance for users applications
        </div>
        <div className='text-primary-gray flex flex-col gap-4 max-w-[580px] text-sm'>
          <p>ML Model Retraining & Updating: PrecisionML continuously re-trains and updates your ML models using the latest data, ensuring the models stay relevant, accurate, and efficient.</p>
          <p>Adherence to Compliance: Our software is designed keeping in mind various compliance standards, ensuring your data processing and model deployment adheres to local and international laws and regulations.</p>
          <p>Advertisement Optimization: Above all, PrecisionML excels in ad optimization. It utilizes your data to its fullest potential, ensuring your advertisements reach the right people at the right time.</p>
        </div>
      </div>
      <div className='relative w-[580px] h-[400px]'>
        <Image src={'/images/home/view2.png'} width={448} height={344} alt='intro' className='absolute right-0 top-0' />
        <Image src={'/images/home/view1.png'} width={448} height={344} alt='intro' className='absolute left-0 bottom-0' />
      </div>
    </div>
  )
}

export default IntroTwo
