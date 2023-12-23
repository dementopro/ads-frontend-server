'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Color from './Color';
import Font from './Font';
import Button from './Button';

const StyleGuide = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-start justify-start'>
        <div className='w-full flex android:flex-col ipadmini:flex-row gap-[16px] items-center justify-start'>
          <div className='andoir:w-full ipadmini:w-1/3 font-poppins font-semibold android:text-[34px] ipad:text-[43px] text-white'>
            Logo
          </div>
          <div className='andoir:w-full ipadmini:w-2/3'>
          <Image
            width={264}
            height={56}
            className='cursor-pointer android:w-[246px] ipad:w-[264px] h-auto'
            src='/logo.svg'
            alt='logo'
            />
          </div>
        </div>
        <div className='w-full flex android:flex-col ipadmini:flex-row gap-[16px] android:items-center ipadmini:items-start justify-start'>
          <div className='andoir:w-full ipadmini:w-1/3 font-poppins font-semibold android:text-[34px] ipad:text-[43px] text-white'>
            Color
          </div>
          <div className='andoir:w-full ipadmini:w-2/3'>
            <Color />
          </div>
        </div>
        <div className='w-full flex android:flex-col ipadmini:flex-row gap-[16px] android:items-center ipadmini:items-start justify-start'>
          <div className='andoir:w-full ipadmini:w-1/3 font-poppins font-semibold android:text-[34px] ipad:text-[43px] text-white'>
            Font
          </div>
          <div className='andoir:w-full ipadmini:w-2/3'>
            <Font />
          </div>
        </div>
        <div className='w-full flex android:flex-col ipadmini:flex-row gap-[16px] android:items-center ipadmini:items-start justify-start'>
          <div className='andoir:w-full ipadmini:w-1/3 font-poppins font-semibold android:text-[34px] ipad:text-[43px] text-white'>
            Button
          </div>
          <div className='andoir:w-full ipadmini:w-2/3'>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
