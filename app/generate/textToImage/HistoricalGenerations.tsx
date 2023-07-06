import Image from 'next/image'
import React from 'react'


const images = [
  '/images/admin/home/cover.png',
  '/images/admin/home/cover.png',
  '/images/admin/home/cover.png',
  '/images/admin/home/cover.png',
  '/images/admin/home/cover.png',
  '/images/admin/home/cover.png',
]
const HistoricalGenerations = () => {

  return (
    <>
      <h2 className='text-white font-medium text-xl my-6'>
        Historical Generations(13)
      </h2>
      <div className='flex flex-wrap gap-5 mb-8'>
        {
          images.map((image, index) => (
            <div key={index} className='flex gap-3 flex-col p-4 bg-[#1E1F22] rounded-lg border border-[#3A3A3A]'>
              <Image src={image} alt='generate image' width={228} height={228} />
              <div className='text-base'>Travel product</div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HistoricalGenerations
