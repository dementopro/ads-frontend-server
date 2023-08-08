'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import googlecloudIcon from '@iconify/icons-devicon/googlecloud';
import microsoftIcon from '@iconify/icons-logos/microsoft';
import openaiFill from '@iconify/icons-ri/openai-fill';
import awsIcon from '@iconify/icons-bxl/aws'
import linkedinWordmark from '@iconify/icons-devicon-plain/linkedin-wordmark'

const IndustryLeader = () => {
  return (
    <div className='w-full max-sm:mb-4 sm:h-[78px] bg-[#1B1C21] px-[60px] flex max-sm:flex-col items-center justify-center sm:gap-[42px]'>
      <span className='text-white font-semibold text-base max-sm:py-4'>Backed by Industry Leaders</span>
      <div className='flex max-sm:flex-col items-center max-sm:gap-2 gap-8'>
        <Icon height={40} color='white' icon={openaiFill} />
        <Icon height={50} color='white' icon={awsIcon} />
        <Icon width={40} icon={googlecloudIcon} />
        <Icon height={26} icon={microsoftIcon} />
        <Icon height={100} icon={linkedinWordmark} color="white" />
      </div>
    </div>
  )
}

export default IndustryLeader
