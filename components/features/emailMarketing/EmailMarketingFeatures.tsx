'use client';
import React from 'react';
import Image from 'next/image';
import { emailMarketing } from '@/data/Features/emailMarketing';

const EmailMarketingFeatures = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[40px] items-center justify-center'>
        <div className="w-full text-white font-poppins font-semibold text-center android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px]">
          AI Features made for <span className="bg-brand-color text-transparent bg-clip-text">Email Marketing</span>
        </div>
        <div
          className='w-full flex flex-wrap gap-[32px] justify-center items-stretch'
          style={{
            background:
              'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
          }}>
          {emailMarketing.map((item, index) =>
            <div key={index} className='ipad:w-[400px] desktop:w-[550px] android:h-auto ipadmini:h-[340px] relative p-[12px] bg-glass-border-gradient rounded-[30px]'>
              <div className='w-full h-full relative flex flex-col gap-[16px] px-[60px] py-[32px] bg-glass-bg-gradient rounded-[18px] justify-center items-center'>
                <div className='w-full h-full absolute top-0 left-0 backdrop-blur-[96px] rounded-[18px] z-10'></div>
                <div className="w-full font-poppins text-center font-mold text-[20px] uppercase z-20">
                  {item.title}
                </div>
                <div className="w-full font-open-sans text-center text-[#D0CDD6] font-medium italic text-[18px] z-20">
                  {item.description}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingFeatures;
