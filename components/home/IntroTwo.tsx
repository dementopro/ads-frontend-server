import Image from 'next/image'
import React from 'react'

const IntroTwo = () => {
  return (
    <div className='w-full mx-auto max-sm:p-4 py-2 sm:py-20 bg-[black]'>
      <div className='mx-auto max-w-[1100px] flex flex-row-reverse items-center justify-between max-sm:flex-col'>
        <div className='flex flex-col gap-8 max-sm:mb-6'>
          <h2 className='italic  text-3xl max-sm:text-center max-w-[500px]'>
            {`No code interface & low maintenance for users applications`}
          </h2>
          <div className='text-primary-gray max-sm:text-center flex flex-col gap-4 max-w-[540px] text-sm'>
            <p>{`ML Model Retraining & Updating: PrecisionML continuously re-trains and updates your ML models using the latest data, ensuring the models stay relevant, accurate, and efficient.`}</p>
            <p>Adherence to Compliance: Our software is designed keeping in mind various compliance standards, ensuring your data processing and model deployment adheres to local and international laws and regulations.</p>
            <p>Advertisement Optimization: Above all, PrecisionML excels in ad optimization. It utilizes your data to its fullest potential, ensuring your advertisements reach the right people at the right time.</p>
          </div>
        </div>
        <div className='relative max-sm:w-[90%] max-sm:mt-8 w-[500px] sm:h-[400px] h-[400px]'>
          <Image src={'/images/home/view2.png'} width={400} height={320} alt='intro' className='absolute right-0 top-0 rounded-lg overflow-hidden shadow-purple-600 shadow-lg' />
          <Image src={'/images/home/view1.png'} width={400} height={320} alt='intro' className='absolute left-0 max-sm:top-[40%] bottom-0 rounded-lg overflow-hidden shadow-[#24e7e0] shadow-lg' />
        </div>
      </div>
    </div>
  )
}

export default IntroTwo
