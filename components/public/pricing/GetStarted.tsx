'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import Image from 'next/image';

const GetStarted = () => {
  return (
    <div className="android:my-[32px] ipad:my-[60px] android:px-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="relative shadow">
        <div className='absolute top-[-50px] right-[-86px] w-[200px] h-[200px] bg-[#7D55FA] rounded-full opacity-25 z-10'></div>
        <div className='absolute top-[-4px] right-[-194px] w-[266px] h-[266px] bg-brand-color rounded-full opacity-50 z-10'></div>
        <div className='relative inline-flex flex-col justify-start items-center android:w-full ipadmini:w-[700px] android:gap-[16px] ipad:gap-[32px] py-[36px] android:px-[16px] ipadmini:px-[32px] bg-[#27252D] rounded-[25px] z-20'>
          <div className="text-white font-poppins font-semibold text-left android:text-[32px] ipad:text-[43px] android:leading-[34px] ipadmini:leading-[50px] ipad:leading-[40px] desktop:leading-[56px]">
            Get Started Now
          </div>
          <div className="w-full inline-flex flex-col gap-0 text-center android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
            <div className="inline-flex gap-[8px] justify-center items-center">
              <Image
                className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[30px] desktop:h-[36px]"
                src="/images/home/sparkles.svg"
                alt="sparkles"
                title="Home"
                width={21}
                height={21}
              />
              <div className="">Don&apos;t wait another minute!</div>
            </div>
            <div className="justify-center items-center">
              Don&apos;t wait another minute! Ready to unlock the magic of AI and marketing? <span className='text-primary-purple'>Sign up today!</span>
            </div>
          </div>
          <PrimaryButton
            target="_blank"
            href="/"
            text="Sign Up Now"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
