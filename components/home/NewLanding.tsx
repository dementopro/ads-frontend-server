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
    
      <div className="px-[100px] pt-[82px] pb-[32px] Hero w-full h-screen relative z-10 bg-hero-pattern bg-cover">
        <Header />
        <div className="h-full justify-start items-center flex-col flex lg:flex-row gap-[32px]">
          <div className="w-[750px] flex-col justify-start items-start gap-[16px] inline-flex">
            <div className="w-full text-open-sans flex-row justify-start items-center gap-2 flex text-center text-white">
              <div className="text-[22px] font-medium leading-normal">
                We are an
              </div>
              <div className="flex-row justify-start items-start gap-0 flex">
                <span className="text-fuchsia-500 text-[30px] font-semibold bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                  enabler
                </span>
                <Image src='/images/home/sparkles.svg' width={36} height={36} alt='sparkles' />
              </div>
              <div className="text-[22px] font-medium leading-normal">
                , Not a disrupter
              </div>
            </div>
            <div className="w-full text-poppins flex-col justify-start items-start gap-5 flex text-[48px] font-semibold">
              <div className="text-white leading-[70px]">
                One Stop
                <span className="px-[10px] bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                  Ad Platform
                </span>
                Without Limits
              </div>
            </div>
            <div className="mt-[16px] w-full text-stone-300 text-[18px] font-open-sans font-normal">
              Marketing agencies save time & money with our one-stop ads AI platform
            </div>

            <Link href='/requestDemo' className="mt-[16px] px-[32px] py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-[8px] flex">
              <div>
                Request Demo
              </div>
              <div className="w-[18px] h-4 relative">
                <Image
                  title='arrow'
                  className='cursor-pointer'
                  src={'/images/elements/ep_right.svg'} width={18} height={4} alt='arrow'
                />
              </div>
            </Link>
          </div>

          <div className="font-poppins flex-row gap-5 inline-flex">
            <div className='flex-col w-[210px] justify-center items-center flex'>
              <div className="text-[#838383] text-base font-medium">
                Before AdsGency AI
              </div>

              <div className="mt-[10px] px-[8px] pt-[8px] pb-[16px] bg-[#27252D] rounded-[15px] shadow flex-col justify-start items-center gap-[24.93px] inline-flex">
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
                <div className="flex-col justify-start items-center gap-[32px] inline-flex">
                  <div className="NonOptimizedAds text-white text-lg font-bold leading-[17.75px]">
                    Non Optimized Ads
                  </div>
                  <div className='flex-col justifu-start items-start gap-[15px] inline-flex'>
                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="px-[7px] py-[7px] relative bg-neutral-700 text-zinc-500 rounded-full">
                        <Image
                          title='cross'
                          className='cursor-pointer'
                          src={'/images/elements/cross.svg'} width={16} height={16} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-zinc-500 text-xs font-medium">
                        Low Quality Imagery
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="px-[7px] py-[7px] relative bg-neutral-700 text-zinc-500 rounded-full">
                        <Image
                          title='cross'
                          className='cursor-pointer'
                          src={'/images/elements/cross.svg'} width={16} height={16} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-zinc-500 text-xs font-medium">
                        Lacking Brand Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-55 flex-col justify-center items-center flex'>
              <div className="AfterAdsgencyAi text-zinc-500 text-base font-semibold">
                <Image
                  className='cursor-pointer'
                  title='Home'
                  src={'/logo.svg'} width={131} height={28} alt='logo'
                />
              </div>

              <div className="mt-[10px] px-[12px] pt-[12px] pb-[24px] bg-[#27252D] rounded-[18px] shadow flex-col justify-start items-center gap-[24.93px] inline-flex">
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
                <div className="flex-col justify-start items-center gap-[32px] inline-flex">
                  <div className="NonOptimizedAds text-white text-lg font-bold leading-[17.75px]">
                    Ads Optimization
                  </div>
                  <div className='flex-col justifu-start items-start gap-[15px] inline-flex'>
                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <Image
                          title='cross'
                          className='cursor-pointer'
                          src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white text-xs font-medium">
                        High resolution visuals
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <Image
                          title='cross'
                          className='cursor-pointer'
                          src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white text-xs font-medium">
                        Based on real-time data
                      </div>
                    </div>

                    <div className="justify-start items-center gap-[8px] inline-flex">
                      <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                        <Image
                          title='cross'
                          className='cursor-pointer'
                          src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                        />
                      </div>
                      <div className="LowQualityImagery text-white text-xs font-medium">
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