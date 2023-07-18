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

const images = [
  {
    url: '/images/home/demo/demo1.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo2.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo3.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo4.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo5.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo6.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo7.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo8.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo9.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo10.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo11.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo12.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo13.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo14.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo15.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo16.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo17.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo18.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo19.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo20.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo21.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo22.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo23.png',
    tag: 'All',
  },
  {
    url: '/images/home/demo/demo24.png',
    tag: 'All',
  },
]


const CommunityFrom = () => {

  const [currentTag, setCurrentTag] = useState('All')

  const showImages = images.filter(image => {
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
