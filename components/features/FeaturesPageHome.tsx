'use client'
import PrimaryButton from '@/components/common/PrimaryButton'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const FeaturesPageHome = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-start items-center flex android:flex-col ipadmini:flex-row android:gap-[32px] ipad:gap-[32px]">
      <div className="relative flex flex-col items-start">
        <div className="flex flex-col gap-[16px] justify-center android:items-center ipadmini:items-start relative z-20">
          <div className="w-fulll android:text-center ipadmini:text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
            The Ultimate AI Features for your Ads Management
          </div>
          <div className="w-full android:text-center ipadmini:text-left font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
            Feature rich and low maintenance, built specifically to enhance your ads strategy.
          </div>
          <PrimaryButton
            target="_self"
            href="/requestDemo"
            text="Request Demo Now"
          />
        </div>
      </div>

      <div className="desktop:w-7/12 android:w-full h-auto">
        <Image
          width={696}
          height={529}
          className="w-full h-auto object-cover rounded-[25px]"
          src='/images/features/home.svg'
          alt="features-home"
        />
      </div>
    </div>
  );
};

export default FeaturesPageHome;
