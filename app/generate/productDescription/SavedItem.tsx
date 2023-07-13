'use client'
import React from 'react'
import contentSaveOutline from '@iconify/icons-mdi/content-save-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { Icon } from '@iconify/react';
import { copyText } from '@/utils';
import { message } from 'antd';
import { IGeneText } from '@/types/generate';

interface Props {
  item: IGeneText
}

const SavedItem = ({ item }: Props) => {

  const [messageApi, contextHolder] = message.useMessage();

  function handleCopy() {
    const flag = copyText(item.text)
    if (flag) {
      messageApi.success('Copy successfully')
    }
  }

  return (
    <div className='flex cursor-pointer w-[354px] min-h-[310px] gap-5 flex-col py-5 px-[18px] bg-[#1B1C21] group hover:bg-[#27282F] rounded-lg border border-[#3A3A3A]'>
      {contextHolder}
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <Icon icon={contentSaveOutline} width={24} height={24} className='text-primary-purple' />
          <Icon onClick={handleCopy} className='text-primary-gray hover:text-white cursor-pointer hidden group-hover:flex' icon={contentCopy} width={24} height={24} />
        </div>
        <div className='font-medium text-xl'>{item.prompt}</div>
        <div className='text-sm'>
          {item.text}
        </div>
      </div>
    </div>
  )
}

export default SavedItem
