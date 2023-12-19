'use client'
import PrimaryButton from '@/components/common/PrimaryButton'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const FeaturesPageHome = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-start items-center flex android:flex-col ipadmini:flex-row android:gap-[32px] ipad:gap-[32px]">
      <div className="relative flex flex-col items-start">
        <div className="flex flex-col gap-[60px] justify-center android:items-center ipadmini:items-start relative z-20">
          <div className="w-fulll android:text-center ipadmini:text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
            The Ultimate AI Workflow
          </div>
          <div className="flex flex-row justify-start items-start">
            <div className="flex flex-col justify-start items-start gap-[20px]">
              <div className='flex flex-row justify-start items-centr gap-[20px]'>
                <div className='w-[240px] flex flex-col justify-start items-start gap-[10px]'>
                  <div className='flex flex-row justify-start items-center gap-[10px]'>
                    <Image
                      src='/images/features/icons/planning.svg'
                      width={24}
                      height={24}
                      alt='planning'
                    />
                    <div className='text-[18px] font-open-sans font-bold text-white'>
                      Planning
                    </div>
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#ABABAB]'>
                    Input your website to create personalized optimizations
                  </div>
                </div>
                <div className='w-[130px] overflow-hidden'>
                  <Image
                    src='/images/features/doted-lines.svg'
                    width={102}
                    height={87}
                    alt='doted-lines'
                  />
                </div>
                <div className='w-[240px] flex flex-col justify-start items-start gap-[10px]'>
                  <div className='flex flex-row justify-start items-center gap-[10px]'>
                    <Image
                      src='/images/features/icons/optimization.svg'
                      width={24}
                      height={24}
                      alt='planning'
                    />
                    <div className='text-[18px] font-open-sans font-bold text-white'>
                      Optimization
                    </div>
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#ABABAB]'>
                    Choose & customize your personalized recommendations
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-start items-centr gap-[20px] ml-[40px]'>
                <div className='w-[130px] overflow-hidden'>
                  <Image
                    className='transform rotate-[-110deg]'
                    src='/images/features/doted-lines.svg'
                    width={102}
                    height={87}
                    alt='doted-lines'
                  />
                </div>
                <div className='w-[240px] flex flex-col justify-start items-start gap-[10px]'>
                  <div className='flex flex-row justify-start items-center gap-[10px]'>
                    <Image
                      src='/images/features/icons/content.svg'
                      width={24}
                      height={24}
                      alt='content-type'
                    />
                    <div className='text-[18px] font-open-sans font-bold text-white'>
                      Content Type
                    </div>
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#ABABAB]'>
                    Optimize your SEO, social media, and email marketing
                  </div>
                </div>

                <div className='w-[130px] overflow-hidden'>
                  <Image
                    className='transform rotate-[-110deg]'
                    src='/images/features/doted-lines.svg'
                    width={102}
                    height={87}
                    alt='doted-lines'
                  />
                </div>
                <div className='w-[240px] flex flex-col justify-start items-start gap-[10px]'>
                  <div className='flex flex-row justify-start items-center gap-[10px]'>
                    <Image
                      src='/images/features/icons/social-insight.svg'
                      width={24}
                      height={24}
                      alt='social-insight'
                    />
                    <div className='text-[18px] font-open-sans font-bold text-white'>
                      Social Insight
                    </div>
                  </div>
                  <div className='text-[16px] font-open-sans font-regular text-[#ABABAB]'>
                    View historical data and Ad performance to max out ROI
                  </div>
                </div>

                <div className='w-[130px]'>
                  <Image
                    className='transform rotate-[180deg]'
                    src='/images/features/doted-lines-arrow.svg'
                    width={102}
                    height={87}
                    alt='doted-lines'
                  />
                </div>
              </div>
            </div>
            <div className='relavtive'>
              <Image
                className='tranform translate-x-[-30px] translate-y-[-80px] z-10'
                src='images/features/bg-circles.svg'
                width={204}
                height={152}
                alt='doted-lines'
              />
              <div className="tranform rotate-[10deg] translate-x-[-180px] translate-y-[-200px] w-[440px] text-white font-poppins font-semibold text-[42px] leading-[56px] z-20">
                Save Time & 10X ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPageHome;
