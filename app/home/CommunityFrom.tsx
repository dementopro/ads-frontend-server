'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const tags = [
  'All',
  'Top 10',
  'Top 50',
  'Best from Canada',
]

const images = [
  {
    url: '/images/admin/home/cover.png',
    tag: 'All',
  },
  {
    url: '/images/admin/home/cover.png',
    tag: 'All',
  },
  {
    url: '/images/admin/home/cover2.png',
    tag: 'Top 10',
  },
]

const CommunityFrom = () => {

  const [currentTag, setCurrentTag] = useState('All')

  const showImages = images.concat(...images).concat(...images).filter(image => {
    return image.tag === currentTag || currentTag === 'All'
  })

  return (
    <div className='my-12 w-full overflow-auto'>
      <h2 className='text-white font-medium text-2xl'>
        Get inspired from the community
      </h2>
      <div className='flex items-center gap-4 mt-6'>
        {
          tags.map(tag => (
            <button onClick={() => setCurrentTag(tag)} key={tag}
              className={
                `flex items-center justify-center px-4 py-1 min-w-[64px] text-base hover:bg-[#7D55FA] hover:text-white rounded-lg 
                ${currentTag === tag ? 'bg-[#7D55FA] text-white' : 'bg-[#35363A] text-primary-gray'}
                `
              }
            >
              {tag}
            </button>
          ))
        }
      </div>
      <div className='mt-8 flex flex-wrap items-center gap-5'>
        {
          showImages.map((image, index) => (
            <div key={index} className='w-[260px] h-[196px] rounded-[10px] overflow-hidden broder shadow relative'>
              <Image src={image.url} fill alt='cover-image' />
            </div>
          ))
        }
        {
          !showImages.length && (
            <div className='w-full flex items-center justify-center'>
              <span className='text-primary-gray'>No cases found</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CommunityFrom
