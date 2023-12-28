'use client';
import { color } from '@/data/StyleGuide/color';
import React from 'react';

const Color = () => {
  return (
    // <div className='w-full flex flex-col gap-[16px]'>
    //   {color.map((item, index) =>
    //     <div key={index} className={`${item.title} flex android:flex-col ipadmini:flex-row flex-wrap gap-[16px]`}>
    //       {item.types.map((type, i) => 
    //         <div key={i} className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
    //           <div className={`w-full android:h-[90px] ipad:h-[110px] rounded-[20px] ${type.name}`}></div>
    //           <div className='font-regular'> {type.title} </div>
    //           <div className='font-semibold'> {type.code} </div>
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <div className='w-full flex flex-col gap-[16px]'>
      <div className='flex android:flex-col ipadmini:flex-row flex-wrap gap-[16px]'>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-primary-01'></div>
          <div className='font-regular'> Primary 01 </div>
          <div className='font-semibold'> #CAC5FF </div>
        </div>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-primary-02'></div>
          <div className='font-regular'> Primary 02 </div>
          <div className='font-semibold'> #9D93FF </div>
        </div>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-primary-03'></div>
          <div className='font-regular'> Primary 03 </div>
          <div className='font-semibold'> #412EFF </div>
        </div>
      </div>
      <div className='flex android:flex-col ipadmini:flex-row flex-wrap gap-[16px]'>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-secondary-01'></div>
          <div className='font-regular'> Secondary 01 </div>
          <div className='font-semibold'> #EBE5FE </div>
        </div>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-secondary-02'></div>
          <div className='font-regular'> Secondary 02 </div>
          <div className='font-semibold'> #7D55FA </div>
        </div>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-secondary-03'></div>
          <div className='font-regular'> Secondary 03 </div>
          <div className='font-semibold'> #3606CB </div>
        </div>
      </div>
      <div className='flex android:flex-col ipadmini:flex-row flex-wrap gap-[16px]'>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-gradient-01'></div>
          <div className='font-regular'> Gradient 01 </div>
        </div>
        <div className='android:w-[180px] ipad:w-[220px] flex flex-col gap-[5px] justify-start items-start font-poppins text-[16px] text-white'>
          <div className='w-full android:h-[90px] ipad:h-[110px] rounded-[20px] bg-gradient-02'></div>
          <div className='font-regular'> Gradient 02 </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
