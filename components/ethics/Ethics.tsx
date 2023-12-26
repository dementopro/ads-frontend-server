'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import { ethics } from '@/data/ethics/ethics';

const Ethics = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='w-full h-full absolute transform ipad:rotate-[-45deg] left-1/2 z-10' style={{
        background:
          'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 27%, rgba(50, 46, 84, 0.00) 100%)',
      }}></div>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black relative overflow-hidden">
        <div className='w-full ipad:mx-auto android:mx-0 flex android:flex-col desktop:flex-row gap-[32px] justify-center items-center z-20'>
          <div className="android:w-full desktop:w-1/3 text-white font-poppins font-semibold android:text-center desktop:text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
            Ethics at<br /> <span className="bg-brand-color text-transparent bg-clip-text">AdsGency AI</span>
          </div>
          <div className='android:w-full desktop:w-2/3 relative'>
            <div className='w-full relative z-20 flex flex-col gap-[32px] items-start justify-start'>
              {ethics.map((item, index) =>
                <div key={index} className={`w-full flex flex-col gap-[16px] pl-[16px] border-l-4 ${item.color == '#7879F1' ? 'border-[#7879F1]' : 'border-[#EF5DA8]'}`}>
                  <div className={`font-poppins font-semibold android:text-[24px] ipad:text-[34px] ${item.color == '#7879F1' ? 'text-[#7879F1]' : 'text-[#EF5DA8]'}`}>
                    {item.title}
                  </div>
                  <div className="font-open-sans text-left text-[#FAFAFB] font-regular android:text-[14px] ipad:text-[16px]">
                    {item.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;
