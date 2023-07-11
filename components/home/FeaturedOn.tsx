'use client'
import Image from 'next/image'
import React from 'react'
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';

// The Information, Product Hunt, Superhuman, TopApps.AI


const FeaturedOn = () => {
  return (
    <div className='flex flex-wrap gap-7 my-10 px-20 items-center justify-evenly w-full'>
      <div className='border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Image alt='futurepedia' src={'/images/home/futurepedia.png'} width={50} height={50} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Futurepedia</div>
        </div>
      </div>
      <div className='border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Image alt='The Information' src={'/images/home/The Information.webp'} width={50} height={50} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>The Information</div>
        </div>
      </div>
      <div className='border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Icon width={50} height={50} icon={producthuntIcon} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Product Hunt</div>
        </div>
      </div>
      <div className='border border-primary-purple rounded-lg py-4 px-8 gap-3 flex items-center'>
        <Icon width={50} height={50} icon={brandSuperhuman} />
        <div className='flex flex-col'>
          <div>Featured on</div>
          <div className='text-xl font-semibold'>Superhuman</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedOn
