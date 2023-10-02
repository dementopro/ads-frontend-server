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
    <div className="AboveTheFold w-full h-screen relative">
      <div className="px-[100px] py-[100px] Hero w-full h-screen bg-gradient-to-br from-[#3A2966] to-[#010101]">
        <Header />
        <div className='mt-[80px] flex-col flex lg:flex-row'>
          <div className="Introtext w-1/2 flex-col justify-start items-start gap-8 inline-flex">
            <div className="Headline text-open-sans h-9 flex-row justify-start items-start gap-2 flex">
              <div className="WeAreAn text-center text-white text-2xl leading-normal">
                We are an
              </div>
              <div className="Enabler text-center flex-row justify-start items-start gap-0 flex">
                <span className="text-fuchsia-500 text-4xl font-semibold leading-9 bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                  enabler
                </span>
                <Image src='/images/home/sparkles.svg' width={36} height={36} alt='sparkles' />
              </div>
              <div className="NotADisrupter text-center text-white text-2xl font-medium leading-normal">
                , Not a disrupter
              </div>
            </div>
            <div className="text-poppins flex-col justify-start items-start gap-5 flex">
              <div className="text-white text-[64px] font-semibold leading-[70px]">
                One Stop
                <span className="px-[5px] text-[64px] font-semibold bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                  Ad Platform
                </span>
                <br />Without Limits
              </div>
            </div>
            <div className="text-stone-300 text-2xl font-normal font-open-sans leading-8">
              Marketing agencies save time & money with our one-stop ads AI platform
            </div>

            <Link href={'/'} className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-2 flex">
              <div className="text-white text-base font-semibold leading-[19px]">
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

          <div className="IntroImages font-poppins w-1/2 flex-row gap-5 inline-flex">
            <div className='w-45 flex-col justify-center items-center flex'>
              <div className="BeforeAdsgencyAi text-zinc-500 text-base font-semibold">
                Before AdsGency AI
              </div>

              <div className="Before mt-[10px] px-[14px] pt-[13px] pb-[23px] bg-zinc-800 rounded-[18px] shadow flex-col justify-start items-center gap-[24.93px] inline-flex">
                <div className="self-stretch justify-start items-start gap-[8px] inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-1.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-3.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="images/home/landing-images/image-2.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-4.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-[23px] inline-flex">
                  <div className="NonOptimizedAds text-white text-lg font-bold leading-[17.75px]">
                    Non Optimized Ads
                  </div>
                  <div className='flex-col justifu-start items-start gap-[8px] inline-flex'>
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

              <div className="Before mt-[10px] px-[14px] pt-[13px] pb-[23px] bg-zinc-800 rounded-[18px] shadow flex-col justify-start items-center gap-[24.93px] inline-flex">
                <div className="justify-start items-start gap-[8px] inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-5.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-7.png" />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-[8px] inline-flex">
                    <img className="obejct-cover relative rounded-md" src="images/home/landing-images/image-6.png" />
                    <img className="object-cover relative rounded-md" src="images/home/landing-images/image-8.png" />
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-[23px] inline-flex">
                  <div className="NonOptimizedAds text-white text-lg font-bold leading-[17.75px]">
                    Ads Optimization
                  </div>
                  <div className='flex-col justifu-start items-start gap-[8px] inline-flex'>
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