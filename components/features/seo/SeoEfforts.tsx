'use client';
import React from 'react';

const SeoEfforts = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className={`w-full p-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer rounded-[27px]`}>
        <div className="flex flex-col justify-center items-center gap-[32px] android:py-[16px] android:px-[32px] ipad:py-[32px] ipad:px-[64px] bg-black relative rounded-[25px] drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)]">
          <div className="text-white text-center font-poppins font-semibold text-[32px]">
            How AdsGency AI Empowers Your SEO Efforts <br /><span className="bg-brand-color text-transparent bg-clip-text">&quot;Your SEO Success Starts Here&quot;</span>
          </div>
          <div className="text-[20px] text-center font-open-sans font-regular text-white justify-center items-center">
            &quot;Stay ahead in the digital realm with AdsGency AI&apos;s dynamic SEO solutions. Unlock SEO secrets, captivate readers, and enchant search engines effortlessly. Start your free trial today and witness the SEO magic.&quot;
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoEfforts;
