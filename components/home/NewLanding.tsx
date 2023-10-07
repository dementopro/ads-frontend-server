'use client'
import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import IndustryLeader from '@/components/home/IndustryLeader'
import Header from '@/components/home/Header'


const NewLanding = () => {
  return (
    <div className="w-full h-screen relative">
      {/* <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-tr from-black via-transparent to-black z-neg-1"></div>
      <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-br from-[#C62F94] to-black bg-opacity-40 z-neg-2"></div>
      <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-br from-[#4664FF] to-black z-neg-3"></div> */}

      <div className="ipad:px-[60px] desktop:px-[100px] pt-[82px] pb-[32px] Hero w-full h-screen relative z-10 bg-hero-pattern bg-cover">
        <Header />
        <div className="ipad:w-full desktop:w-full h-full justify-start items-center flex-col flex ipad:flex-row ipad:gap-[20px] desktop:gap-[32px]">
          <div className="ipad:w-full desktop:w-7/12 flex-col justify-start items-start gap-[16px] inline-flex">
            <div className="w-full text-open-sans flex-row justify-start items-center gap-2 flex text-center text-white">
              <div className="ipad:text-[18px] desktop:text-[22px] font-medium leading-normal">
                We are an
              </div>
              <div className="flex-row justify-start items-start gap-0 flex">
                <span className="text-fuchsia-500 ipad:text-[25px] desktop:text-[30px] font-semibold bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                  enabler
                </span>
                <img src='/images/home/sparkles.svg' className="ipad:w-[30px] desktop:w-[36px] ipad:h-[30px] desktop:h-[36px]" alt='sparkles' />
              </div>
              <div className="ipad:text-[18px] desktop:text-[22px] font-medium leading-normal">
                , Not a disrupter
              </div>
            </div>
            <div className="w-full text-poppins flex-col justify-start items-start flex ipad:text-[43px] desktop:text-[48px] font-semibold">
              <div className="text-white ipad:leading-[50px] desktop:leading-[70px]">
                One Stop
                <span className="px-[10px] bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                  Ad Platform
                </span>
                Without Limits
              </div>
            </div>
            <div className="mt-[16px] w-full text-stone-300 ipad:text-[15px] desktop:text-[18px] font-open-sans font-normal">
              Marketing agencies save time & money with our one-stop ads AI platform
            </div>

            <Link href='/requestDemo' className="ipad:px-[25px] desktop:px-[32px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-[8px] flex ipad:text-[14px] desktop:text-[16px]">
              <div>
                Request Demo
              </div>
              <div className="relative">
                <img
                  title='arrow'
                  className='cursor-pointer ipad:w-[15px] desktop:w-[18px] ipad:h-auto desktop:h-auto'
                  src={'/images/elements/ep_right.svg'} alt='arrow'
                />
              </div>
            </Link>
          </div>

          <div className="ipad:w-full desktop:w-6/12 font-poppins flex-row ipad:gap-[0px] desktop:gap-[10px] inline-flex">
            <div className='ipad:w-3/6 desktop:w-2/5 flex-col justify-center items-center flex'>
              <div className="text-[#838383] ipad:text-[14px] desktop:text-[20px] font-medium">
                Before AdsGency AI
              </div>

              <div className="mt-[10px] px-[8px] pt-[8px] pb-[16px] bg-[#27252D] rounded-[15px] shadow flex-col justify-start items-center ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                <div className="self-stretch justify-start items-start gap-[8px] flex-row inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-1.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-3.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="images/home/landing-images/image-2.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-4.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                  <div className="NonOptimizedAds text-white ipad:text-[15px] desktop:text-[18px] font-bold leading-[17.75px]">
                    Non Optimized Ads
                  </div>
                  <div className='flex-col justifu-start items-start gap-[15px] inline-flex'>
                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="ipad:px-[5px] desktop:px-[7px] ipad:py-[5px] desktop:py-[7px] relative bg-[#4E4A5B] rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer ipad:w-[18px] desktop:w-[20px] ipad:h-[18px] desktop:h-[20px]'
                          src={'/images/elements/cross.svg'} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-zinc-500 ipad:text-[9px] desktop:text-[12px] font-medium">
                        Low Quality Imagery
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="ipad:px-[5px] desktop:px-[7px] ipad:py-[5px] desktop:py-[7px] relative bg-[#4E4A5B] rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer ipad:w-[18px] desktop:w-[20px] ipad:h-[18px] desktop:h-[20px]'
                          src={'/images/elements/cross.svg'} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-zinc-500 ipad:text-[9px] desktop:text-[12px] font-medium">
                        Lacking Brand Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='ipad:w-4/6 desktop:w-3/5 flex-col justify-center items-center flex'>
              <div className="AfterAdsgencyAi text-zinc-500 text-base font-semibold">
                <img
                  className='cursor-pointer ipad:w-[90px] desktop:w-[110px] ipad:h-auto desktop:h-auto'
                  title='Home'
                  src={'/logo.svg'} alt='logo'
                />
              </div>

              <div className="mt-[10px] px-[12px] pt-[12px] pb-[24px] bg-[#27252D] rounded-[18px] shadow flex-col justify-start items-center ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                <div className="justify-start items-start gap-[8px] flex-row inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-5.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-6.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="images/home/landing-images/image-7.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-8.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center ipad:gap-[20px] desktop:gap-[25px] inline-flex">
                  <div className="NonOptimizedAds text-white ipad:text-[15px] desktop:text-[18px] font-bold leading-[17.75px]">
                    Ads Optimization
                  </div>
                  <div className='flex-col justifu-start items-start gap-[15px] inline-flex'>
                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="ipad:px-[5px] desktop:px-[7px] ipad:py-[5px] desktop:py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer ipad:w-[18px] desktop:w-[20px] ipad:h-[18px] desktop:h-[20px]'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white ipad:text-[11px] desktop:text-[12px] font-medium">
                        High resolution visuals
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="ipad:px-[5px] desktop:px-[7px] ipad:py-[5px] desktop:py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer ipad:w-[18px] desktop:w-[20px] ipad:h-[18px] desktop:h-[20px]'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white ipad:text-[11px] desktop:text-[12px] font-medium">
                        Based on real-time data
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="ipad:px-[5px] desktop:px-[7px] ipad:py-[5px] desktop:py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <img
                          title='cross'
                          className='cursor-pointer ipad:w-[18px] desktop:w-[20px] ipad:h-[18px] desktop:h-[20px]'
                          src={'/images/elements/correct.svg'} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white ipad:text-[11px] desktop:text-[12px] font-medium">
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

export default NewLanding