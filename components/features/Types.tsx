'use client';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

const Types = () => {
  const [seoExpanded, setSeoExpanded] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);

  const seoToggleExpansion = () => {
    setSeoExpanded(!seoExpanded);
  };

  const socialToggleExpansion = () => {
    setSocialExpanded(!socialExpanded);
  };

  const emailToggleExpansion = () => {
    setEmailExpanded(!emailExpanded);
  };

  return (
    <div className='w-full flex flex-col justify-center android:p-[32px] ipad:p-[60px] desktop:p-[0px]'>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:my-[32px] ipad:my-[60px] flex-col android:justify-start android:items-start ipad:justify-center ipad:items-center gap-[32px] inline-flex">
        <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
          Content Type
        </div>
        <div className="w-fulll android:text-left ipad:text-center text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
          Select Content to Optimize
        </div>
        <div className="w-[1000px] flex flex-row gap-[32px] items-start">
          <div className='w-full flex flex-col gap-[16px] px-[20px] py-[12px] border-y-1 border-y-[#844FFF] drop-shadow-[0_16px_80px_rgba(104,89,255,0.60)] rounded-[18px]'>
            <div className='text-[18px] text-white font-bold font-open-sans'>
              SEO
            </div>
            <div className='text-[16px] text-white font-regular font-open-sans'>
              With advanced algorithms that analyze your website and content, you can be sure that your SEO strategy is optimized for success.
            </div>
            <button onClick={seoToggleExpansion} className='flex flex-row gap-[10px] text-[13px] font-open-sans font-regular text-white items-center items-start'>
              {seoExpanded ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
              <div> See {seoExpanded ? 'Less' : 'More'} Details </div>
            </button>
            {seoExpanded && (
              <Image
                className='w-full h-auto object-cover'
                src='/images/features/seo_more.svg'
                alt='seo more'
                width={50}
                height={50}
              />
            )}
          </div>

          <div className='w-full flex flex-col gap-[16px] px-[20px] py-[12px] border-y-1 border-y-[#844FFF] drop-shadow-[0_16px_80px_rgba(104,89,255,0.60)] rounded-[18px]'>
            <div className='text-[18px] text-white font-bold font-open-sans'>
              Social Media
            </div>
            <div className='text-[16px] text-white font-regular font-open-sans'>
              Our social media recommendations help you create targeted ad content through generative AI & AI-powered copy.
            </div>
            <button onClick={socialToggleExpansion} className='flex flex-row gap-[10px] text-[13px] font-open-sans font-regular text-white items-center items-start'>
              {socialExpanded ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
              <div> See {socialExpanded ? 'Less' : 'More'} Details </div>
            </button>
            {socialExpanded && (
              <Image
                className='w-full h-auto object-cover'
                src='/images/features/social-media_more.svg'
                alt='seo more'
                width={50}
                height={50}
              />
            )}
          </div>

          <div className='w-full flex flex-col gap-[16px] px-[20px] py-[12px] border-y-1 border-y-[#844FFF] drop-shadow-[0_16px_80px_rgba(104,89,255,0.60)] rounded-[18px]'>
            <div className='text-[18px] text-white font-bold font-open-sans'>
              Email Marketing
            </div>
            <div className='text-[16px] text-white font-regular font-open-sans'>
              Choose from our email marketing recommendations to quickly create, customize and send email campaigns.
            </div>
            <button onClick={emailToggleExpansion} className='flex flex-row gap-[10px] text-[13px] font-open-sans font-regular text-white items-center items-start'>
              {emailExpanded ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
              <div> See {emailExpanded ? 'Less' : 'More'} Details </div>
            </button>
            {emailExpanded && (
              <Image
                className='w-full h-auto object-cover'
                src='/images/features/email-marketing_more.svg'
                alt='seo more'
                width={50}
                height={50}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
