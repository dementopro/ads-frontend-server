'use client';
import React from 'react';
import Image from 'next/image';

const CustomerDemographic = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-center justify-center'>
        <div className="w-full text-white font-poppins font-semibold text-center android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px]">
          Customer Demographic - <span className="bg-brand-color text-transparent bg-clip-text">World</span>
        </div>
        <div style={{
          background:
            'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
        }}>
          <Image
            width={1000}
            height={670}
            className='w-[1000px] h-auto'
            src='/images/customer-review/world-map.svg'
            alt='world-map'
          />
        </div>
        <div className='flex android:flex-col ipadmini:flex-row gap-[20px] items-center justify-start text-[14px] font-poppins font-medium text-white'>
          <div className='flex flex-row gap-[5px] items-center'>
            <div className='w-[14px] h-[14px] rounded-full bg-[#4F18A2]'></div>
            <div> Majority Customers </div>
          </div>
          <div className='flex flex-row gap-[5px] items-center'>
            <div className='w-[14px] h-[14px] rounded-full bg-[#A5A6F6]'></div>
            <div> Constantly Growing Customer Base </div>
          </div>
          <div className='flex flex-row gap-[5px] items-center'>
            <div className='w-[14px] h-[14px] rounded-full bg-[#E1DEFF]'></div>
            <div> Majority Non-Customers </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDemographic;
