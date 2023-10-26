'use client'
import React from 'react'
import Link from 'next/link'
import Header from '@/components/home/Header'
import PrimaryButton from '@/components/PrimaryButton'
import { FiX } from 'react-icons/fi'


const Landing = () => {
  return (
    <div className="w-full h-auto relative">
      {/* <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-tr from-black via-transparent to-black z-neg-1"></div>
      <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-br from-[#C62F94] to-black bg-opacity-40 z-neg-2"></div>
      <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-br from-[#4664FF] to-black z-neg-3"></div> */}

      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipadmini:pt-[0px] ipad:pt-[82px] desktop:pt-[82px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <Header />
        <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:mt-[16px] ipad:mt-[48px] android:px-[16px] ipad:px-[0px] justify-start items-center flex android:flex-col ipadmini:flex-col ipad:flex-row desktop:flex-row android:gap-[32px] ipad:gap-[32px]">
          <div className="android:w-full ipadmini:w-full ipad:w-full desktop:w-7/12 flex-col android:justify-center ipadmini:justify-center ipad:justify-start desktop:justify-start android:items-center ipadmini:items-center ipad:items-start desktop:items-start android:gap-[12px] ipadmini:gap-[14px] ipad:gap-[16px] desktop:gap-[16px] inline-flex">
            <div className="w-full text-open-sans flex-row android:justify-center ipadmini:justify-center ipad:justify-start desktop:justify-start items-end flex android:gap-[5px] ipadmini:gap-[6px] ipad:gap-[7px] desktop:gap-[8px] text-center text-white">
              <div className="android:text-[14px] ipad:text-[18px] desktop:text-[22px] font-medium leading-normal">
                We are an
              </div>
              <div className="flex-row justify-start items-start gap-0 flex">
                <span className="text-fuchsia-500 android:text-[20px] ipad:text-[25px] desktop:text-[30px] font-semibold bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                  enabler
                </span>
                <img src='/images/home/sparkles.svg' className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[30px] desktop:h-[36px]" alt='sparkles' />
              </div>
              <div className="android:text-[14px] ipad:text-[18px] desktop:text-[22px] font-medium leading-normal">
                , Not a disrupter
              </div>
            </div>
            <div className="w-full text-poppins flex-col justify-start items-start flex android:text-[34px] ipad:text-[43px] desktop:text-[48px] font-bold">
              <div className="w-full text-white tracking-tight android:leading-[34px] ipadmini:leading-[50px] ipad:leading-[40px] desktop:leading-[56px] android:text-center ipadmini:text-center ipad:text-left desktop:text-left">
                One Stop
                <span className="android:px-[4px] ipadmini:px-[6px] ipad:px-[8px] desktop:px-[10px] bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                  Ad Platform
                </span>
                Without Limits
              </div>
            </div>
            <div className="mt-[16px] w-full text-stone-300 android:text-[12px] ipad:text-[15px] desktop:text-[18px] font-open-sans font-regular android:text-center ipad:text-left">
              Marketing agencies save time & money with our one-stop ads AI platform
            </div>

            <PrimaryButton target="_blank" href="/requestDemo" text="Request Demo" />
          </div>

          <div className="ipad:w-full desktop:w-6/12 font-poppins flex-row android:gap-[16px] ipad:gap-[10px] inline-flex">
            <div className='ipad:w-3/6 desktop:w-2/5 flex-col justify-center items-center flex'>
              <div className="text-[#838383] android:text-[9px] ipadmini:text-[15px] ipad:text-[14px] desktop:text-[20px] font-medium">
                Before AdsGency AI
              </div>

              <div className="mt-[10px] px-[8px] pt-[8px] pb-[16px] bg-[#27252D] rounded-[15px] shadow flex-col justify-start items-center android:gap-[12px] ipadmini:gap-[15px] ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                <div className="self-stretch justify-start items-start android:gap-[7px] ipadmini:gap-[7px] ipad:gap-[8px] desktop:gap-[8px] flex-row inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-1.png" />
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-3.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="/images/home/landing-images/image-2.png" />
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-4.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center android:gap-[12px] ipadmini:gap-[15px] ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                  <div className="NonOptimizedAds text-white android:text-[9px] ipadmini:text-[16px] ipad:text-[15px] desktop:text-[18px] font-bold leading-[17.75px]">
                    Non Optimized Ads
                  </div>
                  <div className='flex-col justifu-start items-start android:gap-[8px] ipadmini:gap-[10px] ipad:gap-[13px] desktop:gap-[15px] inline-flex'>
                    <div className="justify-start items-center android:gap-[5px] ipadmini:gap-[7px] ipad:gap-[7px] desktop:gap-[8px] inline-flex">
                      <div className="android:p-[2px] ipadmini:p-[5px] ipad:p-[5px] desktop:p-[7px] relative bg-[#4E4A5B] rounded-full">
                        <FiX
                          className='cursor-pointer text-[#A09BAE] android:w-[14px] ipadmini:w-[18px] ipad:w-[18px] desktop:w-[20px] h-auto'
                        />
                      </div>
                      <div className="text-[#4E4A5B] android:text-[8px] ipadmini:text-[10px] ipad:text-[9px] desktop:text-[12px] font-medium">
                        Low Quality Imagery
                      </div>
                    </div>
                    <div className="justify-start items-center android:gap-[5px] ipadmini:gap-[7px] ipad:gap-[7px] desktop:gap-[8px] inline-flex">
                      <div className="android:p-[2px] ipadmini:p-[5px] ipad:p-[5px] desktop:p-[7px] relative bg-[#4E4A5B] rounded-full">
                        <FiX
                          className='cursor-pointer text-[#A09BAE] android:w-[14px] ipadmini:w-[18px] ipad:w-[18px] desktop:w-[20px] h-auto'
                        />
                      </div>
                      <div className="text-[#4E4A5B] android:text-[8px] ipadmini:text-[10px] ipad:text-[9px] desktop:text-[12px] font-medium">
                        Lacking Brand Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='ipad:w-4/6 desktop:w-3/5 flex-col justify-center items-center flex'>
              <div className="AfterAdsgencyAi text-[#4E4A5B] text-base font-semibold">
                <img
                  className='cursor-pointer android:w-[80px] ipadmini:w-[110px] ipad:w-[100px] desktop:w-[110px] h-auto'
                  title='Home'
                  src={'/logo.svg'} alt='logo'
                />
              </div>

              <div className="mt-[10px] android:px-[9px] android:pt-[9px] android:pb-[18px] ipadmini:px-[10px] ipadmini:pt-[10px] ipadmini:pb-[20px] ipad:px-[11px] ipad:pt-[11px] ipad:pb-[22px] desktop:px-[12px] desktop:pt-[12px] desktop:pb-[24px] bg-[#27252D] rounded-[18px] shadow flex-col justify-start items-center android:gap-[12px] ipadmini:gap-[15px] ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                <div className="justify-start items-start gap-[8px] flex-row inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-5.png" />
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-6.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="/images/home/landing-images/image-7.png" />
                    <img className="object-cover relative rounded-md" src="/images/home/landing-images/image-8.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center android:gap-[12px] ipadmini:gap-[15px] ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                  <div className="text-white android:text-[9px] ipadmini:text-[16px] ipad:text-[15px] desktop:text-[18px] font-bold leading-[17.75px]">
                    Ads Optimization
                  </div>
                  <div className='flex-col justifu-start items-start android:gap-[8px] ipadmini:gap-[10px] ipad:gap-[13px] desktop:gap-[15px] inline-flex'>
                    <div className="justify-start items-center android:gap-[5px] ipadmini:gap-[7px] ipad:gap-[7px] desktop:gap-[8px]] inline-flex">
                      <div className="android:p-[2px] ipadmini:p-[5px] ipad:p-[5px] desktop:p-[7px] relative bg-violet-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer android:w-[14px] ipadmini:w-[18px] ipad:w-[18px] desktop:w-[20px] h-auto'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="text-white android:text-[8px] ipadmini:text-[10px] ipad:text-[11px] desktop:text-[12px] font-medium">
                        High resolution visuals
                      </div>
                    </div>
                    <div className="justify-start items-center android:gap-[5px] ipadmini:gap-[7px] ipad:gap-[7px] desktop:gap-[8px] inline-flex">
                      <div className="android:p-[2px] ipadmini:p-[5px] ipad:p-[5px] desktop:p-[7px] relative bg-violet-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer android:w-[14px] ipadmini:w-[18px] ipad:w-[18px] desktop:w-[20px] h-auto'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="text-white android:text-[8px] ipadmini:text-[10px] ipad:text-[11px] desktop:text-[12px] font-medium">
                        Based on real-time data
                      </div>
                    </div>

                    <div className="justify-start items-center android:gap-[5px] ipadmini:gap-[7px] ipad:gap-[7px] desktop:gap-[8px] inline-flex">
                      <div className="android:p-[2px] ipadmini:p-[5px] ipad:p-[5px] desktop:p-[7px] relative bg-violet-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer android:w-[14px] ipadmini:w-[18px] ipad:w-[18px] desktop:w-[20px] h-auto'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="text-white android:text-[8px] ipadmini:text-[10px] ipad:text-[11px] desktop:text-[12px] font-medium">
                        No more hiring Photographers
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Landing