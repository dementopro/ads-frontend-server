'use client'

// Import necessary libraries and icons
import React, { useState } from 'react';
import twitterIcon from '@iconify/icons-mdi/twitter';
import { Icon } from '@iconify/react';
import facebookIcon from '@iconify/icons-mdi/facebook';
import pinterestIcon from '@iconify/icons-mdi/pinterest';
import downloadIcon from '@iconify/icons-mdi/download';
import scanHelper from '@iconify/icons-mdi/scan-helper';
import contentCopy from '@iconify/icons-mdi/content-copy';
import checkboxMultipleMarked from '@iconify/icons-mdi/checkbox-multiple-marked';

// Import utility functions
import { copyText, downloadImage } from '@/utils';

// Import components from Ant Design
import { Image, message } from 'antd';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';

// Define the Props type
type Props = {
  title: string;
  description: string;
  image: string;
};

const GenerateContext = ({ title, description, image }: Props) => {
  // Initialize state variables
  const [messageApi, contextHolder] = message.useMessage();
  const [isCopyed, setIsCopyed] = useState({
    title: false,
    description: false,
  });
  const [visible, setVisible] = useState(false);

  // Function to handle copying text
  function onCopy(key: 'description' | 'title', ctx: string) {
    const flag = copyText(ctx);
    if (flag) {
      setIsCopyed({ ...isCopyed, [key]: true });
      setTimeout(() => {
        setIsCopyed({ ...isCopyed, [key]: false });
      }, 1000);
    }
  }

  // Function to handle image download
  function onDownload() {
    messageApi.loading('Downloading...');
    downloadImage('/_next/image?url=' + image + '&w=1080&q=75', title);
  }

  return (
    <div className='bg-[#1B1C21] rounded-lg px-4 py-[18px] flex flex-col gap-5'>
      {contextHolder}
      <div className='flex items-baseline gap-[18px] text-primary-gray'>
        <div className='flex-1 text-2xl'>
          {title}
        </div>
        {
          // Render copy icon or checkmark based on copy state
          !isCopyed.title ?
            <Icon onClick={() => onCopy('title', title)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
            :
            <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
        }
      </div>
      <div className='flex items-baseline gap-[18px] text-primary-gray'>
        <div className='flex-1 text-base'>
          {description}
        </div>
        {
          // Render copy icon or checkmark based on copy state
          !isCopyed.description ?
            <Icon onClick={() => onCopy('description', description)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
            :
            <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
        }
      </div>
      <div className='flex justify-end text-primary-gray items-center gap-[14px]'>
        <Icon onClick={() => onDownload()} className='hover:text-white cursor-pointer' icon={downloadIcon} width={24} height={24} />
        <Icon
          onClick={() => setVisible(true)}
          className='hover:text-white cursor-pointer' icon={scanHelper} width={20} height={20} />
        <PinterestShareButton
          url='https://adsgency.ai'
          media={'https://adsgency.ai/_next/image?url=' + image + '&w=1080&q=75'}
          description={description}
        >
          <Icon className='hover:text-white cursor-pointer' icon={pinterestIcon} width={24} height={24} />
        </PinterestShareButton>
        <FacebookShareButton
          quote={title + ' ' + description}
          url={'https://adsgency.ai/_next/image?url=' + image + '&w=1080&q=75'}
        >
          <Icon
            className='hover:text-white cursor-pointer' icon={facebookIcon} width={24} height={24} />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://adsgency.ai/_next/image?url=' + image + '&w=1080&q=75'}
          title={title + ' ' + description}
          via='adsgency'
          hashtags={['adsgency']}
        >
          <Icon
            className='hover:text-white cursor-pointer' icon={twitterIcon} width={24} height={24} />
        </TwitterShareButton>
      </div>
      <Image
        width={200}
        style={{ display: 'none' }}
        src={'/_next/image?url=' + image + '&w=1080&q=75'}
        preview={{
          visible,
          src: '/_next/image?url=' + image + '&w=1080&q=75',
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </div>
  );
}

export default GenerateContext;