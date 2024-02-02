'use client';
import React from 'react';
import PrimaryButton from '@/components/common/PrimaryButton';
import { BiCheck, BiCheckCircle } from 'react-icons/bi';
import Image from 'next/image';

const homeFeatures = [
  'Integrated easy-to-use platform',
  'Optimizations based on historical data',
  'Creative ad content using generative AI',
]

const col1Data = [
  {
    image: 'images/home/home-slider/email-marketing-1.svg',
    alt: 'email-marketing-1',
    heading: 'Email Marketing',
    pt: 'pt-[28px]',
  },
  {
    image: 'images/home/home-slider/pinterest.svg',
    alt: 'pinterest',
    heading: 'Pinterest Ads',
    px: 'px-[14px]',
  },
  {
    image: 'images/home/home-slider/email-marketing-2.svg',
    alt: 'email-marketing-2',
    heading: 'Email Marketing',
    pt: 'pt-[28px]',
  },
  {
    image: 'images/home/home-slider/instagram.svg',
    alt: 'instagram',
    heading: 'Instagram Ads',
  }
];
const col2Data = [
  {
    image: 'images/home/home-slider/generative-ai.svg',
    alt: 'generative-ai',
    heading: 'Generative AI',
    pt: 'pt-[13px]',
  },
  {
    image: 'images/home/home-slider/instagram-2.svg',
    alt: 'instagram-2',
    heading: 'Instagram Ads',
    px: 'px-[14px]',
  },
  {
    image: 'images/home/home-slider/facebook.svg',
    alt: 'facebook',
    heading: 'Facebook Ads',
    pt: 'pt-[28px]',
  },
  {
    image: 'images/home/home-slider/seo.svg',
    alt: 'seo',
    heading: 'SEO Optimization',
  }
];

const Landing = () => {
  return (
    <div className="w-full ipad:h-screen ipad:max-h-[1000px] relative ipad:px-[60px] desktop:px-[100px] pb-[32px] bg-hero-gradient bg-cover z-10">
      <div className="desktop:w-[1240px] ipad:w-full h-full flex android:flex-col ipad:flex-row m-auto android:mt-[128px] ipad:mt-[48px] h-full android:px-[16px] ipad:px-[0px] justify-start items-center android:gap-[32px] ipad:gap-[32px]">
        <div className="w-full flex-1 flex flex-col android:items-center ipad:items-start gap-[24px]">
          <div className="flex android:justify-center ipad:justify-start items-center gap-[10px]">
            <img
              src="/images/home/sparkles.svg"
              className="android:w-[26px] ipad:w-[30px] h-auto"
              alt="sparkles"
            />
            <div className="w-full bg-brand-color bg-clip-text text-transparent font-poppins font-regular text-[16px] uppercase tracking-[6.5px]">
              One Stop Ad AI Platform
            </div>
          </div>
          <div className="w-full text-white font-poppins font-semibold android:text-center ipad:text-left android:text-[34px] ipad:text-[48px] android:leading-[40px] ipad:leading-[56px] android:tracking-[-1px] ipad:tracking-[-3px]">
            All your <span className="bg-brand-color text-transparent bg-clip-text">Digital Marketing</span> deliverables in one platform.
          </div>
          <div className='w-full android:text-center ipad:text-left text-white text-[16px] font-open-sans font-regular'>
            Generated <span className="bg-brand-color text-transparent bg-clip-text">300K+</span> content since 2023
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start">
            {homeFeatures.map((item, index) =>
              <div key={index} className="flex items-center gap-[10px]">
                <div className='bg-[#7D55FA] w-[24px] h-[24px] p-[4px] rounded-full'>
                  <BiCheck className="text-white w-[16px] h-[16px]" />
                </div>
                <div className='text-[16px] font-open-sans font-regular text-white'>
                  {item}
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-row gap-[10px] justify-start items-center bg-background-300 rounded-[8px] py-[12px] px-[16px]'>
            <div className="text-white text-base android:text-[15px] ipad:text-[18px] font-open-sans font-regular android:text-center ipad:text-left">
              We are rated <span className='font-semibold'>5.0</span> out of <span className='font-semibold'>5.0</span> over
            </div>
            <Image
              width={30}
              height={30}
              className='h-[32px] w-auto'
              src='images/home/product-hunt.svg'
              alt='producthunt logo'
            />
          </div>
          <div className='flex flex-row gap-[16px] items-center justify-start font-bold'>
            <PrimaryButton icon={true}
              target="_self"
              href="/register"
              text="Create an Account"
            />
            <div className='flex flex-col gap-[10px] items-start justify-start font-open-sans font-regular text-[14px] text-[#D0CDD6]'>
              <div className='underline'><a href='/public/pricing'>Start your 7-Days Free Trial Now!</a></div>
              <div>523+ marketers signed up in the last 30 days</div>
            </div>
          </div>
        </div>

        <div className={`android:w-[350px] ipad:w-[480px] android:h-[600px] ipad:h-full flex flex-row item-start justify-start gap-[16px] overflow-y-hidden`}>
          <div className={`w-full h-full flex flex-col gap-[16px] items-center justify-center`}
            style={{
              whiteSpace: 'nowrap',
              animation: 'marquee 50s linear infinite',
            }}
          >
            {col1Data.map((item, index) => (
              <div key={index} className={`w-full p-[2px] rounded-[25px] bg-light-purple-gradient`}>
                <div className={`w-full h-full flex flex-col bg-black gap-[16px] rounded-[23px] px-[18px] py-[32px]`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-auto ${item.pt ? item.pt : ''} ${item.px ? item.px : ''}`}
                    width={204}
                    height={215}
                  />
                  <div className={`font-open-sans font-bold text-[20px] tracking-[-2px] pl-[14px]`}>{item.heading}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={`w-full h-full flex flex-col gap-[16px] items-center justify-center`}
            style={{
              whiteSpace: 'nowrap',
              animation: 'marquee 50s linear infinite',
            }}
          >
            {col2Data.map((item, index) => (
              <div key={index} className={`w-full p-[2px] rounded-[25px] bg-light-purple-gradient`}>
                <div className={`w-full h-full flex flex-col bg-black gap-[16px] rounded-[23px] px-[18px] py-[32px]`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-auto ${item.pt ? item.pt : ''} ${item.px ? item.px : ''}`}
                    width={204}
                    height={215}
                  />
                  <div className={`font-open-sans font-bold text-[20px] tracking-[-2px] pl-[14px]`}>{item.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
