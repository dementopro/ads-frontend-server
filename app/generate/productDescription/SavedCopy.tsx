'use client'
import React from 'react'
import contentSaveOutline from '@iconify/icons-mdi/content-save-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { Icon } from '@iconify/react';
import { copyText } from '@/utils/copy';
import { message } from 'antd';
import Empty from '@/components/Empty';

const SavedCopy = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const copyList: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


  function handleCopy(item: string) {
    const flag = copyText(item)
    if (flag) {
      messageApi.success('Copy successfully')
    }
  }

  return (
    <>
      {contextHolder}
      <h2 className='text-white font-medium text-xl my-6'>
        Saved copy({copyList.length})
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          !copyList.length
            ?
            <Empty />
            :
            copyList.map((item, index) => (
              <div key={index} className='flex cursor-pointer w-[354px] min-h-[310px] gap-5 flex-col py-5 px-[18px] bg-[#1B1C21] group hover:bg-[#27282F] rounded-lg border border-[#3A3A3A]'>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center justify-between'>
                    <Icon icon={contentSaveOutline} width={24} height={24} className='text-primary-purple' />
                    <Icon onClick={() => handleCopy(item)} className='text-primary-gray hover:text-white cursor-pointer hidden group-hover:flex' icon={contentCopy} width={24} height={24} />
                  </div>
                  <div className='font-medium text-xl'>Selling Pet Supplies in Canada</div>
                  <div className='text-sm'>
                    Looking for the best pet supplies in Canada? Look no further! Our online store offers a wide range of high-quality products for your furry friends. From premium pet food and treats to toys and grooming essentials, we have everything you need to keep your pets happy and healthy. Shop with us today and give your pets the love they deserve!
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default SavedCopy
