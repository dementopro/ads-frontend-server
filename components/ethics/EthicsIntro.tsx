'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';

const EthicsIntro = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px] z-20">
      <div className='w-full relative android:w-full ipad:mx-auto android:mx-0 flex android:flex-col ipadmini:flex-row gap-[32px] justify-center items-center z-20'>
        <div className='android:w-full ipadmini:w-7/12 flex flex-col gap-[32px] items-start justify-start'>
          <div className="w-full text-white font-poppins font-semibold text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
            Ethics and Responsible AI at <span className="bg-brand-color text-transparent bg-clip-text">AdsGency AI</span>
          </div>
          <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
            At AdsGency AI, ethical principles drive our innovation. Discover our commitment to transparency, fairness, and accountability in every aspect of AI development. Join us in shaping a future where AI empowers with responsibility.
          </div>
          <PrimaryButton
            target="_self"
            href="/reportMisuse"
            text="Report Misuse or Vulnerability"
          />
        </div>
        <div className='pl-[25px] android:w-full ipadmini:w-5/12 relative'>
          <div className="android:hidden ipadmini:block w-2/5 h-[800px] absolute top-[-500px] right-0 bg-hero-gradient bg-cover z-20"></div>
          <Image
            width={100}
            height={100}
            className='w-full h-auto relative z-30'
            src='/images/ethics/ethics-intro.svg'
            alt='ethics intro'
          />
        </div>
      </div>
    </div>
  );
};

export default EthicsIntro;
