'use client'
import React, { useEffect, useState } from 'react'
import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import AboveFooter from '@/components/common/AboveFooter'
import Image from 'next/image'
import PrimaryButton from '@/components/common/PrimaryButton'

const Hero = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-center items-center flex flex-col gap-[16px]">
      <div className="android:w-full desktop:w-[1000px] text-white text-center android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-poppins">
        Supercharge Your Marketing Strategies Today!<span className='text-primary-purple'> Sign Up Now </span>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/images/home/sparkles.svg"
          className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[26px] desktop:h-[26px]"
          alt="sparkles"
        />
        <div className="uppercase bg-gradient-to-r from-[#6859FF] bg-clip-text text-transparent to-[#AF41FF] text-base tracking-[.2em]">
          One Stop Ad AI Platform
        </div>
      </div>
    </div>
  );
};

export default Hero;