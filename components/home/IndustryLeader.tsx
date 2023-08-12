'use client'
import React from 'react'
import Image from 'next/image';

const IndustryLeader = () => {
  return (
    <div className='mt-8 w-full flex items-center justify-center gap-10'>
      <div className={'flex flex-col items-center justify-between w-[100px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/micro.svg' width={40} height={40} alt='Microsoft Azure' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>Microsoft Azure</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/gcloud.svg' width={40} height={40} alt='Google Cloud' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>Google Cloud</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/aws.svg' width={40} height={40} alt='Amazon' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>Amazon</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/tiktok.svg' width={40} height={40} alt='TikTok' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>TikTok</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <Image src='/images/home/icon/shopify.svg' width={40} height={40} alt='Shopify' />
        <span className='text-center line-clamp-1 w-[160px]'>Shopify</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/google.svg' width={40} height={40} alt='Google' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>Google</span>
      </div>
      <div className={'flex flex-col items-center justify-between w-[80px] h-[80px] gap-2'}>
        <div className='w-10 h-10 flex items-center justify-center'>
          <Image src='/images/home/icon/reddit.svg' width={40} height={40} alt='Reddit' />
        </div>
        <span className='text-center line-clamp-1 w-[160px]'>Reddit</span>
      </div>
    </div>
  )
}

export default IndustryLeader
