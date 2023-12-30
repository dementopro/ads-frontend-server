'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import Image from 'next/image';

const InfographicsEfforts = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className={`w-full p-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer rounded-[27px]`}>
        <div className="flex flex-col justify-center items-center gap-[32px] android:py-[16px] android:px-[32px] ipad:py-[32px] ipad:px-[64px] bg-black relative rounded-[25px] drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)]">
          <div className="text-white text-center font-poppins font-semibold text-[32px]">
            <span className="bg-brand-color text-transparent bg-clip-text">Take a free trial and unlock your inner data artist today!</span>
          </div>
          <div className="text-[20px] text-center font-open-sans font-regular text-white justify-center items-center">
            Turn complex information into visual masterpieces that inform, engage, and inspire your audience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicsEfforts;
