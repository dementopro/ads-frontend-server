'use client';
import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import Image from 'next/image';

const BookMeeting = () => {
  return (
    <div className="android:my-[32px] ipad:my-[60px] android:px-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="inline-flex flex-col justify-start items-center android:w-full ipadmini:w-[700px] android:gap-[16px] ipad:gap-[32px] py-[36px] android:px-[16px] ipadmini:px-[32px] relative bg-[#27252D] rounded-[25px] shadow">
        <div className="text-white font-poppins font-semibold text-left android:text-[32px] ipad:text-[43px] android:leading-[34px] ipadmini:leading-[50px] ipad:leading-[40px] desktop:leading-[56px]">
          Help & Support
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
            Time is ticking, and your competitors aren&apos;t slowing down.
          </div>
          <div className="justify-center items-center">
            Book a Meeting with us today!
          </div>
        </div>
        <PrimaryButton
          target="_blank"
          href="https://calendly.com/xinrliu/adsgency-ai-demo-meeting"
          text="Book Meeting"
        />
      </div>
    </div>
  );
};

export default BookMeeting;
