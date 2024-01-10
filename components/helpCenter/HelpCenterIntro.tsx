'use client'
import React from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import { FaSearch } from "react-icons/fa";

const HelpCenterIntro = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full flex flex-col gap-[32px] relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:pt-[0px] ipad:my-[48px] z-20">
      <div className='flex android:flex-col ipadmini:flex-row gap-[60px] items-center justify-center'>    
        <div className='flex flex-col gap-[32px] justify-start items-start z-20'>
          <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
            Welcome to AdsGency AI Help Center
          </div>
          <div className="w-full text-white font-poppins font-semibold text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
            How can we help?
          </div>
          <div className='w-3/4 h-[60px] flex flex-row justify-start items-center p-[10px] border-1 border-white rounded-full'>
            <Input
              className='flex-1 text-[20px] ml-[10px] font-regular font-poppins text-white bg-transparent border-none placeholder:text-white'
              placeholder='Search Here'
            />
            <button className='w-[40px] h-[40px] bg-[#553AA7] text-[18px] p-[10px] text-white rounded-full'>
              <FaSearch />
            </button>
          </div>
          <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
            Popular searches : Email Templates, Image Generation, Post Optimization
          </div>
        </div>
        <div className='w-[680px] shrink-0'>
          <Image
            width={680}
            height={590}
            className='w-full h-auto'
            title='seo-feature-intro'
            src={'/images/help-center/help-center-intro.svg'} alt='help-center-intro'
          />
        </div>
      </div> 
      <div className='w-full text-[16px] font-opan-sans font-regular text-[#E0E0E0] flex flex-row gap-[10px] items-center justify-end'>
        Still in doubt connect with AdsGency AI via <a href="mailto:contactus@adsgency.ai" className='font-medium'>contactus@adsgency.ai</a>
      </div>  
    </div>
  );
};

export default HelpCenterIntro;
