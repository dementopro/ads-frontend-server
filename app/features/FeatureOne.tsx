import Image from 'next/image'
import React from 'react'

type Props = {
  feature: {
    title: string
    description: string[]
    image: string
  }
  isReverse?: boolean
}

const FeatureOne = ({ isReverse, feature }: Props) => {
  return (
    <div className='mx-auto w-full flex flex-col items-center gap-8 max-w-[1000px] max-sm:px-6'>
      <h2 className='text-2xl text-center font-semibold text-white'>
        🌟 {feature.title} 🌟
      </h2>
      <div className={
        `flex flex-col items-center justify-between sm:flex-row gap-4 sm:gap-8 w-full ${isReverse ? 'sm:flex-row-reverse' : ''}`
      }>
        <div className='flex flex-col gap-2 flex-1 max-w-[500px] max-sm:mb-6'>
          {
            feature.description.map((desc, index) => (
              <p key={index} className='text-primary-gray text-sm max-sm:text-center'>
                {desc}
              </p>
            ))
          }
        </div>
        <div className={'flex items-center justify-end rounded-lg overflow-hidden'}
          style={{
            boxShadow: 'rgba(132, 79, 255, 0.26) 9px 8px 23px 6px'
          }}
        >
          <Image alt={feature.title} src={feature.image} width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default FeatureOne
