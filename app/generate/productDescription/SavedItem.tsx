// Import statements
import React from 'react';
import contentSaveOutline from '@iconify/icons-mdi/content-save-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { Icon } from '@iconify/react';
import { copyText } from '@/utils';
import { message } from 'antd';
import { IGeneText } from '@/types/generate';

// Define the props interface for SavedItem
interface Props {
  item: IGeneText;
}

// SavedItem component
const SavedItem = ({ item }: Props) => {
  // Use the message hook from antd
  const [messageApi, contextHolder] = message.useMessage();

  // Function to handle copying the text
  function handleCopy() {
    // Copy the text and check if it was successful
    const flag = copyText(item.text);
    if (flag) {
      // Show a success message if copying was successful
      messageApi.success('Copy successfully');
    }
  }

  return (
    <div className='flex cursor-pointer w-[354px] min-h-[310px] gap-5 flex-col py-5 px-[18px] bg-[#1B1C21] group hover:bg-[#27282F] rounded-lg border border-[#3A3A3A]'>
      {contextHolder}
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          {/* Icon for saving */}
          <Icon icon={contentSaveOutline} width={24} height={24} className='text-primary-purple' />
          {/* Icon for copying (visible on hover) */}
          <Icon onClick={handleCopy} className='text-primary-gray hover:text-white cursor-pointer hidden group-hover:flex' icon={contentCopy} width={24} height={24} />
        </div>
        {/* Display the prompt (title) */}
        <div className='font-medium text-xl'>{item.prompt}</div>
        {/* Display the text content */}
        <div className='text-sm'>
          {item.text}
        </div>
      </div>
    </div>
  );
}

export default SavedItem;