'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import Image from 'next/image';
import { helpCenter } from '@/data/helpCenter';

const HelpCenterCards = () => {
  return (
    <div className="android:my-[32px] ipad:my-[60px] android:px-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className='w-[820px] relative flex flex-wrap justify-center items-stretch gap-[32px]'>
        {helpCenter.map((item, index) =>
          <div key={index} className={`w-[250px] py-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer`}>
            <div className={`w-full h-full flex flex-col gap-[16px] py-[30px] px-[25px] items-center justify-center bg-black drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)] rounded-[18px]`}>
              {item.image &&
                <Image
                  width={30}
                  height={30}
                  className='w-full h-auto'
                  src={item.image}
                  alt={item.title}
                />
              }
              <div className='w-full flex-1 flex justify-center items-center'>
                {item.icon &&
                  <Image
                    width={30}
                    height={30}
                    className='h-[60px] w-auto'
                    src={item.icon}
                    alt={item.title}
                  />
                }
              </div>
              <div className='font-open-sans font-bold text-[20px] text-white text-center tracking-[-2px]'>
                {item.title}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenterCards;
