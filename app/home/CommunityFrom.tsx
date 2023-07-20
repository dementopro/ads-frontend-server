'use client'
import Empty from '@/components/Empty'
import Image from 'next/image'
import React, { useState } from 'react'

const tags = [
  'All',
  'Top 10',
  'Top 50',
  'Best from Canada',
]

const demoImages = Array
  .from({ length: 68 }, (_, k) => k + 1)
  .map(item => ({
    url: `/images/demo/demo${item}.png`,
    tag: 'All',
  }))



const CommunityFrom = () => {

  const [currentTag, setCurrentTag] = useState('All')

  const showImages = demoImages.filter(image => {
    return image.tag === currentTag || currentTag === 'All'
  })

  return (
    <div className='mt-12 w-full overflow-auto'>
      <h2 className='text-white font-medium text-2xl'>
        Get inspired from the community
      </h2>
      {/* <div className='flex items-center gap-4 mt-6'>
        {
          tags.map(tag => (
            <button onClick={() => setCurrentTag(tag)} key={tag}
              className={
                `flex items-center justify-center px-4 py-1 min-w-[64px] text-base hover:bg-[#7D55FA] hover:text-white rounded-lg truncate
                ${currentTag === tag ? 'bg-[#7D55FA] text-white' : 'bg-[#35363A] text-primary-gray'}
                `
              }
            >
              {tag}
            </button>
          ))
        }
      </div> */}
      <div className='mt-8 flex flex-wrap items-center gap-5'>
        {
          showImages.map((image, index) => (
            <div key={index} className='w-[260px] h-[260px] rounded-[10px] overflow-hidden broder shadow relative'>
              <Image src={image.url} fill alt='cover-image' className='object-fill' />
            </div>
          ))
        }
        {!showImages.length && <Empty text='No cases found.' />}
      </div>
    </div>
  )
}

export default CommunityFrom
