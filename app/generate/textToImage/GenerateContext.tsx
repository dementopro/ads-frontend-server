'use client'
import React, { useState } from 'react'
import twitterIcon from '@iconify/icons-mdi/twitter';
import { Icon } from '@iconify/react'
import facebookIcon from '@iconify/icons-mdi/facebook';
import pinterestIcon from '@iconify/icons-mdi/pinterest';
import downloadIcon from '@iconify/icons-mdi/download';
import scanHelper from '@iconify/icons-mdi/scan-helper';
import contentCopy from '@iconify/icons-mdi/content-copy';
import checkboxMultipleMarked from '@iconify/icons-mdi/checkbox-multiple-marked';
import { copyText } from '@/utils/copy';

type Props = {
  title: string
  description: string
}

const GenerateContext = ({ title, description }: Props) => {

  const [isCopyed, setIsCopyed] = useState({
    title: false,
    description: false,
  })

  function handleCopy(key: 'description' | 'title', ctx: string) {
    const flag = copyText(ctx)
    if (flag) {
      setIsCopyed({ ...isCopyed, [key]: true })
      setTimeout(() => {
        setIsCopyed({ ...isCopyed, [key]: false })
      }, 1000);
    }
  }

  return (
    <div className='bg-[#1B1C21] rounded-lg px-4 py-[18px] flex flex-col gap-5'>
      <div className='flex items-baseline gap-[18px] text-primary-gray'>
        <div className='flex-1 text-2xl'>
          {title}
        </div>
        {
          !isCopyed.title ?
            <Icon onClick={() => handleCopy('title', title)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
            :
            <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
        }
      </div>
      <div className='flex items-baseline gap-[18px] text-primary-gray'>
        <div className='flex-1 text-base'>
          {description}
        </div>
        {
          !isCopyed.description ?
            <Icon onClick={() => handleCopy('description', description)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
            :
            <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
        }
      </div>
      <div className='justify-end text-primary-gray flex items-center gap-[14px]'>
        <Icon className='hover:text-white cursor-pointer' icon={downloadIcon} width={24} height={24} />
        <Icon className='hover:text-white cursor-pointer' icon={scanHelper} width={20} height={20} />
        <Icon className='hover:text-white cursor-pointer' icon={pinterestIcon} width={24} height={24} />
        <Icon className='hover:text-white cursor-pointer' icon={facebookIcon} width={24} height={24} />
        <Icon className='hover:text-white cursor-pointer' icon={twitterIcon} width={24} height={24} />
      </div>
    </div>
  )
}

export default GenerateContext
