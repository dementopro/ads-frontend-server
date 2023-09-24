// Import the necessary dependencies
import Image from 'next/image'
import React from 'react'

// Define the Props type for the FeatureOne component
type Props = {
  feature: {
    title: string
    description: string[]
    image: string
  }
  isReverse?: boolean // Optional boolean prop to control the layout direction
}

// Define the FeatureOne component
const FeatureOne = ({ isReverse, feature }: Props) => {
  return (
    <div className='mx-auto w-full flex flex-col items-center gap-8 max-w-[1000px] max-sm:px-6'>
      {/* Display the feature title */}
      <h2 className='text-2xl text-center font-semibold text-white'>
        🌟 {feature.title} 🌟
      </h2>
      <div className={
        `flex flex-col items-center justify-between sm:flex-row gap-4 sm:gap-8 w-full ${isReverse ? 'sm:flex-row-reverse' : ''}`
      }>
        <div className='flex flex-col gap-2 flex-1 max-w-[500px] max-sm:mb-6'>
          {/* Map through and display each line of the feature description */}
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
            boxShadow: 'rgba(132, 79, 255, 0.26) 9px 8px 23px 6px' // Apply a box shadow
          }}
        >
          {/* Display the feature image using Next.js Image component */}
          <Image alt={feature.title} src={feature.image} width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

// Export the FeatureOne component as the default export
export default FeatureOne