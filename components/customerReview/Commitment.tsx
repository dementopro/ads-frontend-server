'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import Image from 'next/image';

const Commitment = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[60px] bg-black">
      <div className={`android:w-full ipadmini:w-[900px] mx-auto p-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer rounded-[27px]`}>
        <div className="flex flex-col justify-center items-center gap-[32px] py-[32px] px-[64px] bg-black relative rounded-[25px] drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)]">
          <div className="text-white text-center font-poppins font-semibold text-[32px] text-[43px]">
            AdsGency AI&apos;s Commitment:<br />
            <span className="bg-brand-color text-transparent bg-clip-text">&quot;Your Success, Our Priority&quot;</span>
          </div>
          <div className="text-[16px] text-center font-open-sans font-regular text-white justify-center items-center">
            At AdsGency AI, we value your success. Our dedication to customer satisfaction drives our continuous improvement in providing cutting-edge AI solutions for your marketing needs. Feel Free to send your reviews to contactus@adsgency.ai
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
