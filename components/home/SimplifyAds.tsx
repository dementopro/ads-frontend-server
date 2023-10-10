'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';


const SimplifyAds = () => {
    return (
        <div className='android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex'>
            <div className='w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-Open+Sans'>
                Simplify your Ads Management
            </div>
            <div className="w-full pb-[16px] px-[16px] overflow-x-auto android:justify-center ipad:justify-center inline-flex">
                <div className="inline-flex flex-col android:w-[550px] ipadmini:w-[600px] ipad:w-[862px] desktop:w-[932px] py-[32px] android:px-[30px] ipad:px-[100px] relative bg-[#27252D] android:border-2 ipadmini:border-3 ipad:border-4 desktop:border-4 border-violet-500 border-opacity-60 rounded-[25px] shadow flex-col justify-center items-center android:gap-[16px] ipad:gap-[32px]">
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full text-center text-[#A09BAE] android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                            Without AdsGency AI
                        </div>
                        <div className="w-full text-center text-white android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                            With AdsGency AI
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <img className="w-full overflow-hidden android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] object-cover relative android:rounded-[10px] ipad:rounded-[25px]" src="images/home/simplify/image-1.jpeg" />
                        <img className="w-full overflow-hidden android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] object-cover relative android:rounded-[10px] ipad:rounded-[25px]" src="images/home/simplify/image-2.png" />
                    </div>
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[10px] inline-flex">
                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Training and Hiring Markets
                            </div>
                            <img
                                title='cross'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/dont.svg'} alt='arrow'
                            />
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <img
                                title='correct'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/do.svg'} alt='arrow'
                            />

                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                Automated Workflows & Real time performance
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[10px] inline-flex">
                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Complex Coding & High Maintenance
                            </div>
                            <img
                                title='cross'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/dont.svg'} alt='arrow'
                            />
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <img
                                title='correct'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/do.svg'} alt='arrow'
                            />
                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                Seamless Integration & Low Maintenance
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[15px] inline-flex">
                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Time consuming update cycles
                            </div>
                            <img
                                title='cross'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/dont.svg'} alt='arrow'
                            />
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <img
                                title='correct'
                                className='cursor-pointer android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] android:h-[26px] ipadmini:h-[32px] ipad:h-[40px]'
                                src={'/images/elements/do.svg'} alt='arrow'
                            />
                            <div className="android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                ML Model Retraining & Update
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link target="_blank" href='/requestDemo' className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-[#6859FF] to-[#AF41FF] rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px]">
                <div>
                    Request Demo
                </div>
                <div className="relative">
                    <img
                        title='arrow'
                        className='cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto'
                        src={'/images/elements/ep_right.svg'} alt='arrow'
                    />
                </div>
            </Link>
        </div >
    )
}

export default SimplifyAds
