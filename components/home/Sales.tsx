'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';


const Sales = () => {
    return (
        <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black'>
            <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
                <div className="android:w-[328px] ipadmini:w-[677px] ipad:w-[862px] desktop:w-[1036px] android:py-[20px] ipadmini:py-[32px] ipad:py-[32px] desktop:py-[32px] android:px-[20px] ipadmini:px-[32px] ipad:px-[32px] desktop:px-[36px] relative bg-[#27252D] android:border-2 ipadmini:border-3 ipad:border-4 desktop:border-4 border-violet-500 border-opacity-60 rounded-[25px] shadow flex-col justify-start items-center gap-[25px] inline-flex">
                    <div className="w-full android:flex-col ipadmini:flex-row ipad:flex-row desktop:flex-row justify-center items-center gap-[20px] inline-flex">
                        <div className="w-full flex-col android:justify-center android:items-center ipadmini:justify-start ipadmini:items-start android:gap-[15px] ipadmini:gap-[20px] ipad:gap-[30px] desktop:gap-[30px] inline-flex">
                            <div className="text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Don't know where to start?
                            </div>
                            <div className="text-white android:text-[12px] ipadmini:text-[13px] ipad:text-[20px] desktop:text-[20px] font-medium font-open-sans leading-tight">
                                We help you plan your ads strategy
                            </div>
                            <div className="w-full flex-row android:justify-center ipadmini:justify-start ipadmini:items-start gap-[8px] inline-flex">
                                <div className="w-full flex-col android:justify-center android:items-center ipadmini:justify-start ipadmini:items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[16px] ipadmini:text-[23px] ipad:text-[30px] desktop:text-[30px] font-semibold font-poppins">
                                        93 %
                                    </div>
                                    <div className="android:text-[11px] ipadmini:text-[15px] ipad:text-[20px] desktop:text-[20px] font-semibold font-poppins">
                                        Time
                                    </div>
                                    <div className="android:text-center ipadmini:text-left android:mt-[10px] ipadmini:mt-[15px] ipad:mt-[20px] desktop:mt-[20px] android:text-[10px] ipadmini:text-[11px] ipad:text-[16px] desktop:text-[16px] font-regular font-open-sans">
                                        Training & hiring marketers
                                    </div>
                                </div>

                                <div className="w-full flex-col android:justify-center android:items-center ipadmini:justify-start ipadmini:items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[16px] ipadmini:text-[23px] ipad:text-[30px] desktop:text-[30px] font-semibold font-poppins">
                                        +290K
                                    </div>
                                    <div className="android:text-[11px] ipadmini:text-[15px] ipad:text-[20px] desktop:text-[20px] font-semibold font-poppins">
                                        Content
                                    </div>
                                    <div className="android:text-center ipadmini:text-left android:mt-[10px] ipadmini:mt-[15px] ipad:mt-[20px] desktop:mt-[20px] android:text-[10px] ipadmini:text-[11px] ipad:text-[16px] desktop:text-[16px] font-regular font-open-sans">
                                        Delivered
                                    </div>
                                </div>

                                <div className="w-full flex-col android:justify-center android:items-center ipadmini:justify-start ipadmini:items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[16px] ipadmini:text-[23px] ipad:text-[30px] desktop:text-[30px] font-semibold font-poppins">
                                        +145
                                    </div>
                                    <div className="android:text-[11px] ipadmini:text-[15px] ipad:text-[20px] desktop:text-[20px] font-semibold font-poppins">
                                        Countries
                                    </div>
                                    <div className="android:text-center ipadmini:text-left android:mt-[10px] ipadmini:mt-[15px] ipad:mt-[20px] desktop:mt-[20px] android:text-[10px] ipadmini:text-[11px] ipad:text-[16px] desktop:text-[16px] font-regular font-open-sans">
                                        Used real time data analytics
                                    </div>
                                </div>
                            </div>

                            <Link href='/contactUs' className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px]">
                                <div>
                                   Contact Sales
                                </div>
                                <div className="relative">
                                    <img
                                        title='arrow'
                                        className='cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto'
                                        src={'/images/elements/ep_right.svg'} alt='arrow'
                                    />
                                </div>
                            </Link>

                        </div>

                        <div className="w-full justify-center items-center">
                            <div className="w-full android:h-[170px] ipadmini:h-[240px] ipad:h-[350px]  desktop:h-[350px]">
                                <iframe className='w-full h-full android:rounded-[15px] ipadmini:rounded-[20px] ipad:rounded-[25px] desktop:rounded-[25px]' src="https://www.youtube.com/embed/aEEINIkBd20" title="AdsGency AI Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales