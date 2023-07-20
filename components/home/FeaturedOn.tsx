'use client'
import Image from 'next/image'
import React from 'react'
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';


const FeaturedOn = () => {
  return (
    <div className='flex flex-wrap gap-7 my-4 sm:my-10 lg:px-20 items-center justify-evenly w-full'>
      <a href='https://www.futurepedia.io/tool/adsgency-ai' target='_blank' className='cursor-pointer max-sm:w-[80%] border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Image alt='futurepedia' src={'/images/home/futurepedia.png'} width={50} height={50} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Futurepedia</div>
        </div>
      </a>
      <a href='https://www.theinformation.com/articles/what-doom-loop-a-six-day-tech-party-tries-to-shift-the-vibes-in-san-francisco' target='_blank' className='cursor-pointer max-sm:w-[80%] border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Image alt='The Information' src={'/images/home/The Information.webp'} width={50} height={50} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>The Information</div>
        </div>
      </a>
      <a href='https://www.producthunt.com/products/adsgency-ai-beta' target='_blank' className='cursor-pointer max-sm:w-[80%] border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Icon width={50} height={50} icon={producthuntIcon} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Product Hunt</div>
        </div>
      </a>
      <a href='https://www.joinsuperhuman.ai/p/metas-new-ai-model-brings-sketches-life' target='_blank' className='cursor-pointer max-sm:w-[80%] border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Icon width={50} height={50} icon={brandSuperhuman} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Superhuman</div>
        </div>
      </a>
    </div>
  )
}

export default FeaturedOn
