'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import Image from 'next/image';

const Verdict = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className={`w-full p-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer rounded-[27px]`}>
        <div className="flex flex-col justify-center items-center gap-[32px] android:py-[16px] android:px-[32px] ipad:py-[32px] ipad:px-[64px] bg-black relative rounded-[25px] drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)]">
          <div className="text-white text-center font-poppins font-semibold text-[24px]">
            <span className="bg-brand-color text-transparent bg-clip-text">The Verdict</span>
          </div>
          <div className="text-[16px] text-center font-open-sans font-regular text-white justify-center items-center">
            Picking between AdsGency AI and ChatGPT isn&apos;t easy. But for marketers needing a robust AI writing powerhouse delivering top-notch, ROI-driven content across various platforms—email, social media, SEO, and infographics—AdsGency AI is the winning choice. Its tailored features, diverse AI models, and seamless integrations make it the ultimate content marketing solution.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verdict;
