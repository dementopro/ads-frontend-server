'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import { FiX, FiCheck } from 'react-icons/fi';
import { BiCheck, BiCheckCircle } from 'react-icons/bi';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="ipad:px-[60px] desktop:px-[100px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
      <div className="max-w-[1240px] ipad:w-full m-auto h-full android:mt-[16px] ipad:mt-[48px] android:px-[16px] ipad:px-[0px] justify-start items-center android:gap-[32px] ipad:gap-[32px] grid grid-cols-12">
        <div className="android:col-span-12 ipadmini:col-span-12 ipad:col-span-12 desktop:col-span-7 flex-col android:justify-center ipadmini:justify-center ipad:justify-start desktop:justify-start android:items-center ipadmini:items-center ipad:items-start desktop:items-start android:gap-[12px] ipadmini:gap-[14px] ipad:gap-[16px] desktop:gap-[16px] inline-flex">
          <div className="flex items-center w-full gap-2">
            <img
              src="/images/home/sparkles.svg"
              className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[26px] desktop:h-[26px]"
              alt="sparkles"
            />
            <div className="bg-gradient-to-r from-[#6859FF] to-[#AF41FF] bg-clip-text text-transparent">
              <p className="text-base uppercase tracking-[.2em]">One Stop Ad AI Platform</p>
            </div>
          </div>
          <div className="w-full text-poppins flex-col justify-start items-start flex android:text-[34px] ipad:text-[43px] desktop:text-[48px] font-bold">
            <div className="w-full text-white tracking-tight android:leading-[34px] ipadmini:leading-[50px] ipad:leading-[40px] desktop:leading-[56px] android:text-center ipadmini:text-center ipad:text-left desktop:text-left">
              The Future of Advertising
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <BiCheck className="bg-[#7D55FA] w-6 h-6 rounded-full" />
              <p>Integrated easy-to-use platform</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <BiCheck className="bg-[#7D55FA] w-6 h-6 rounded-full" />
              <p>Optimizations based on historical data</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <BiCheck className="bg-[#7D55FA] w-6 h-6 rounded-full" />
              <p>Creative ad content using generative AI</p>
            </div>
          </div>
          <div className="mt-[16px] w-fit text-white text-base android:text-[12px] ipad:text-[15px] desktop:text-[18px] font-open-sans font-regular android:text-center ipad:text-left bg-background-300 rounded-lg py-3 px-4">
            Decrease Your Advertising Costs & Maximize ROI With AdsGency AI
          </div>

          <PrimaryButton
            target="_blank"
            href="/requestDemo"
            text="Request Demo"
          />
        </div>

        <div className="android:col-span-12 ipadmini:col-span-12 ipad:col-span-12 desktop:col-span-5 font-poppins android:gap-[16px] ipad:gap-[10px] h-[700px] overflow-hidden">
          <div className="grid h-full grid-cols-12 gap-0">
            <div className="!col-span-6 marquee h-full" style={{ animationDuration: '70s' }}>
              <img src="/images/home/landing-images/1.png" alt="" />
              <img src="/images/home/landing-images/2.png" alt="" />
              <img src="/images/home/landing-images/3.png" alt="" />
              <img src="/images/home/landing-images/4.png" alt="" />
              <img src="/images/home/landing-images/1.png" alt="" />
              <img src="/images/home/landing-images/2.png" alt="" />
              <img src="/images/home/landing-images/3.png" alt="" />
              <img src="/images/home/landing-images/4.png" alt="" />
            </div>
            <div className="!col-span-6 marquee h-full" style={{ animationDuration: '70s' }}>
              <img src="/images/home/landing-images/5.png" alt="" />
              <img src="/images/home/landing-images/6.png" alt="" />
              <img src="/images/home/landing-images/7.png" alt="" />
              <img src="/images/home/landing-images/8.png" alt="" />
              <img src="/images/home/landing-images/5.png" alt="" />
              <img src="/images/home/landing-images/6.png" alt="" />
              <img src="/images/home/landing-images/7.png" alt="" />
              <img src="/images/home/landing-images/8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
