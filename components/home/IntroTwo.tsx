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
            <p>
              {`AdsGency AI tirelessly updates your machine learning models with the latest data, ensuring relevance and accuracy. Committed to compliance, our platform is built to align with local and international regulations, providing peace of mind in your data processing and deployment.`}
            </p>
            <p>
              {`But what sets AdsGency AI apart is our expertise in advertisement optimization. We use your data to its fullest potential, making sure your ads reach the right people at the right time. With AdsGency AI, your advertising becomes more targeted and effective, keeping you ahead in the competitive marketplace.`}
            </p>
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
