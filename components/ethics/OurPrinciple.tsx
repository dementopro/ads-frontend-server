'use client';
import { Avatar } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { customerReviews } from '@/data/customerReviews';
import { principle } from '@/data/ethics/principle';

const OurPrinciple = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-center justify-center'>
        <div className="w-full text-center text-white android:text-[34px] desktop:text-[43px] font-semibold font-poppins">
          Our Principle
        </div>
        <div className="flex android:flex-col ipadmini:flex-row flex-wrap gap-[32px] items-center justify-center items-stretch">
          {principle.map((item, index) =>
            <div key={index} className='android:w-full ipadmini:w-[400px] desktop:w-[380px] py-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer'>
              <div className='w-full h-full flex flex-col gap-[32px] py-[12px] px-[24px] items-center justify-center bg-black drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)] rounded-[18px]'>
                <div className="font-open-sans font-semibold android:text-[24px] ipad:text-[34px]">
                  {item.title}
                </div>
                <div className="font-open-sans text-center text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
                  {item.principle}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPrinciple;
