'use client';
import { font } from '@/data/StyleGuide/font';
import React from 'react';

const Button = () => {
  return (
    <div className='w-full flex android:flex-col ipadmini:flex-row gap-[32px]'>
      <div className='w-[220px] flex flex-col gap-[16px] android:items-center ipadmini:items-start'>
        <div className='w-full android:text-center ipadmini:text-left text-[20px] font-poppins font-semibold'>
          Button Types
        </div>
        <div className='w-full bg-brand-color text-white text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Primary Button
        </div>
        <div className='w-full bg-black border-1 border-white text-white text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Secondary Button
        </div>
        <div className='w-full bg-secondary-02 text-white text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Tertiary Button
        </div>
      </div>
      <div className='w-[220px] flex flex-col gap-[16px] android:items-center ipadmini:items-start'>
        <div className='w-full android:text-center ipadmini:text-left text-[20px] font-poppins font-semibold'>
          Button States
        </div>
        <div className='w-full bg-[#DEDCE3] text-[#756E88] text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Disabled
        </div>
        <div className='w-full bg-light-purple-gradient text-white text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Hover
        </div>
        <div className='w-full bg-[#6859FF] text-white text-[16px] font-poppins font-semibold text-center py-[14px] rounded-[8px]'>
          Pressed
        </div>
      </div>
    </div>
  );
};

export default Button;
