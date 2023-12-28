'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import { adsGencyVsChatGPT } from '@/data/Comparison/adsgencyVsChatGPT';

const Comparison = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <div className='absolute w-full h-full bottom-1/2 right-1/2 z-10'
        style={{
          background:
            'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
        }}></div>
      <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px] z-20 overflow-hidden">
        <div className='w-full relative flex flex-col gap-[32px] items-center justify-center'>
          <div className="w-full text-center text-white android:text-[34px] desktop:text-[43px] font-semibold font-poppins">
            Key Features
          </div>
          <div className='w-[1000px] flex flex-col gap-[50px] justify-start items-start'>
            <div className='w-full flex flex-row gap-[50px] justify-center items-center'>
              <div className='w-full'>
                <Image
                  className='w-[40px] h-auto mx-auto'
                  width={100}
                  height={100}
                  src='/images/vschatgpt/chatgpt-logo.svg'
                  alt='chatgpt-logo'
                />
              </div>
              <div className='w-full'>
                <Image
                  className='w-[112px] h-auto mx-auto'
                  width={100}
                  height={100}
                  src='/logo.svg'
                  alt='chatgpt-logo'
                />
              </div>
            </div>
            {adsGencyVsChatGPT.map((item, index) =>
              <div key={index} className='w-full flex flex-row gap-[50px] justify-start items-start'>
                <div className='w-full flex flex-col gap-[16px] items-start justify-start'>
                  <Image
                    className='w-[36px] h-auto'
                    width={100}
                    height={100}
                    src='/images/vschatgpt/icon.svg'
                    alt='icon'
                  />
                  <div className='text-[20px] font-poppins font-medium text-[#7879F1]'>
                    {item.chatgpt.title}
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#FCDDEC]'>
                    {item.chatgpt.description}
                  </div>
                </div>
                <div className='w-full flex flex-col gap-[16px] items-start justify-start'>
                  <Image
                    className='w-[36px] h-auto'
                    width={100}
                    height={100}
                    src='/images/vschatgpt/icon.svg'
                    alt='icon'
                  />
                  <div className='text-[20px] font-poppins font-medium text-[#F178B6]'>
                    {item.adsgency.title}
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#FCDDEC]'>
                    {item.adsgency.description}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
