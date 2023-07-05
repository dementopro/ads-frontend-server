'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const tags = [
  'All',
  'Strategy',
  'Content',
  'Social',
  'Ads',
  'Analytics',
  'Community',
]

const images = [
  {
    url: '/images/admin/home/cover.png',
    tag: 'Strategy',
  },
  {
    url: '/images/admin/home/cover.png',
    tag: 'Strategy',
  },
  {
    url: '/images/admin/home/cover2.png',
    tag: 'Content',
  },
]

const CommunityFrom = () => {

  const [currentTag, setCurrentTag] = useState('All')

  const showImages = images.filter(image => {
    return image.tag === currentTag || currentTag === 'All'
  })

  return (
    <div className='my-[50px] px-[76px] w-full overflow-auto'>
      <h2 className='text-[#3A3A3A] font-semibold text-xl'>
        From the community
      </h2>
      <div className='flex items-center gap-3 mt-5'>
        {
          tags.map(tag => (
            <button onClick={() => setCurrentTag(tag)} key={tag} className={`flex items-center justify-center px-6 py-2  hover:bg-[#AC43FF] hover:text-white rounded-[10px]  ${currentTag === tag ? 'bg-[#AC43FF] text-white' : 'bg-[#ECECEC] text-[#3A3A3A]'}`}>
              {tag}
            </button>
          ))
        }
      </div>
      <div className='mt-8 flex flex-wrap items-center gap-[38px]'>
        {
          showImages.map((image, index) => (
            <div key={index} className='w-[266px] h-[266px] rounded-[10px] overflow-hidden broder shadow relative'>
              <Image src={image.url} fill alt='cover-image' />
            </div>
          ))
        }
        {
          !showImages.length && (
            <div className='w-full flex items-center justify-center'>
              <span className='text-[#3A3A3A]'>No projects found</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CommunityFrom
