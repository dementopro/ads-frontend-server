'use client'
import React, { useEffect, useState } from 'react'
import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import AboveFooter from '@/components/common/AboveFooter'
import Image from 'next/image'
import PrimaryButton from '@/components/common/PrimaryButton'

const AboutUs = () => {
  const [text, setText] = useState('');
  const textOptions = ['Transformation', 'Strategic Planning', 'Content Generation', 'Ads Optimization', 'Insights'];
  const animationDuration = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate through text options
      setText(textOptions[(textOptions.indexOf(text) + 1) % textOptions.length]);
    }, animationDuration);

    return () => clearInterval(intervalId);
  }, [text]);

  const getDynamicClasses = () => {
    // Define CSS classes based on the current text
    switch (text) {
      case 'Transformation':
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
      case 'Strategic Planning':
        return 'text-violet-400';
      case 'Content Generation':
        return 'bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text';
      case 'Ads Optimization':
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
      case 'Insights':
        return 'text-violet-400';
      default:
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
    }
  };

  const dynamicClasses = getDynamicClasses();

    return (
        <div className="desktop:w-[1240px] ipad:w-full relative m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-center items-center flex flex-col gap-[32px]">
            <Image
                width={100}
                height={100}
                className='absolute android:top-[100px] ipad:top-[120px] desktop:top-[60px] android:left-[-50px] ipad:left-0 h-auto z-10'
                title='Home'
                src={'/images/bg-elements/headline-circles.svg'} alt='logo'
            />
            <Image
                width={100}
                height={100}
                className='android:hidden desktop:block absolute right-0 top-[150px] rotate-[180deg] h-auto z-10'
                title='Home'
                src={'/images/bg-elements/headline-circles.svg'} alt='logo'
            />
            <div className='android:flex-col ipadmini:flex-row ipad:flex-row desktop:flex-row justify-center items-center android:gap-[0px] ipadmini:gap-[6px] ipad:gap-[8px] desktop:gap-[10px] inline-flex'>
                <div className="text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-poppins">
                    We Help our Clients Achieve
                </div>
                <div className={`${dynamicClasses} android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-poppins`}>
                    {text}
                </div>
            </div>
            <div className="w-1/2 text-center font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
                AdsGency AI is a one stop shop ads platform meant to optimize and simplify Ads Management.
            </div>
            <PrimaryButton icon={true}
                target="_self"
                href="/requestDemo"
                text="Request Demo"
            />
        </div>
    );
};

export default AboutUs;