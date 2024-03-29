'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';

const StyleGuideIntro = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px] z-20">
      <Image
        width={100}
        height={100}
        className='absolute android:top-[100px] ipad:top-[120px] desktop:top-[60px] android:left-[-50px] ipad:left-0 h-auto z-10'
        title='Home'
        src={'/images/bg-elements/headline-circles.svg'} alt='logo'
      />
      <Image
        width={100}
        height={100}
        className='android:hidden desktop:block absolute right-0 top-[150px] rotate-[180deg] h-auto z-10'
        title='Home'
        src={'/images/bg-elements/headline-circles.svg'} alt='logo'
      />
      <div className='ipad:w-[800px] relative android:w-full ipad:mx-auto android:mx-0 flex flex-col gap-[32px] justify-center items-center z-20'>
        <div className="w-full text-white font-poppins font-semibold text-center android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
          Dive in to Style Guide of <span className="bg-brand-color text-transparent bg-clip-text">AdsGency AI</span>
        </div>
        <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-center android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
          Access the official branding and style guide of AdsGency AI, such as mission fonts, colors, and more. Visit our homepage at AdsGency AI.
        </div>
        <PrimaryButton icon={true}
          target="_self"
          href="/public/pricing"
          text="Subscribe Today"
        />
      </div>
    </div>
  );
};

export default StyleGuideIntro;
