// Import necessary components and modules
import Empty from '@/components/Empty';
import Image from 'next/image';
import React, { useState } from 'react';

// Define tags for filtering images
const tags = [
  'All',
  'Top 10',
  'Top 50',
  'Best from Canada',
];

// Generate an array of demo images with tags
const demoImages = Array.from({ length: 68 }, (_, k) => k + 1).map((item) => ({
  url: `/images/demo/demo${item}.png`,
  tag: 'All',
}));

// Define the CommunityFrom component
const CommunityFrom = () => {
  // Initialize state for the current tag
  const [currentTag, setCurrentTag] = useState('All');

  // Filter images based on the selected tag
  const showImages = demoImages.filter((image) => {
    return image.tag === currentTag || currentTag === 'All';
  });

  return (
    <div className='mt-12 w-full overflow-auto'>
      <h2 className='text-white font-medium text-2xl'>
        Get inspired from the community
      </h2>
      {/* Tag buttons (commented out) */}
      {/* <div className='flex items-center gap-4 mt-6'>
        {tags.map((tag) => (
          <button
            onClick={() => setCurrentTag(tag)}
            key={tag}
            className={`flex items-center justify-center px-4 py-1 min-w-[64px] text-base hover:bg-[#7D55FA] hover:text-white rounded-lg truncate
            ${currentTag === tag ? 'bg-[#7D55FA] text-white' : 'bg-[#35363A] text-primary-gray'}
            `}
          >
            {tag}
          </button>
        ))}
      </div> */}
      <div className='mt-8 flex flex-wrap items-center gap-5'>
        {/* Display images */}
        {showImages.map((image, index) => (
          <div key={index} className='w-[260px] h-[260px] rounded-[10px] overflow-hidden broder shadow relative'>
            <Image src={image.url} fill alt='cover-image' className='object-fill' />
          </div>
        ))}
        {/* Display empty message if no cases found */}
        {!showImages.length && <Empty text='No cases found.' />}
      </div>
    </div>
  );
}

export default CommunityFrom;