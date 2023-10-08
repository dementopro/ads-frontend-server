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
            <div className="flex-col justify-center items-center gap-8 inline-flex">
                <div className='text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans'>
                    Simplify your Ads Management
                </div>
                <div className="overflow-x-auto android:w-[550px] ipadmini:w-[600px] ipad:w-[862px] desktop:w-[932px] py-[32px] px-[100px] relative bg-[#27252D] android:border-2 ipadmini:border-3 ipad:border-4 desktop:border-4 border-violet-500 border-opacity-60 rounded-[25px] shadow flex-col justify-start items-start gap-[25px] inline-flex">
                    <div className="flex-row justify-center items-center android:gap-[30px] ipadmini:gap-[50px] ipad:gap-[150px] desktop:gap-[150px] inline-flex">
                        <div className="w-full flex-col justify-center items-center android:gap-[14px] ipadmini:gap-[16px] ipad:gap-[32px] desktop:gap-[32px] inline-flex font-poppins font-medium">
                            <div className="text-[#A09BAE] android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                                Without AdsGency AI
                            </div>
                            <img className="w-full android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] object-cover relative rounded-[25px]" src="images/home/simplify/image-1.jpeg" />
                            <div className='w-full mt-[20px] flex-col justifu-end items-end android:gap-[16px] ipadmini:gap-[16px] ipad:gap-[32px] desktop:gap-[32px] inline-flex text-[#A09BAE]'>
                                <div className="justify-start items-center gap-[10px] inline-flex">
                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktop:w-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium text-right">
                                        Training and Hiring Markets
                                    </div>
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/cross.svg'} alt='arrow'
                                        />
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-[10px] inline-flex">
                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktopw-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium text-right">
                                        Complex Coding & High Maintenance
                                    </div>
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/cross.svg'} alt='arrow'
                                        />
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktopw-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium text-right">
                                        Time consuming update cycles
                                    </div>
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/cross.svg'} alt='arrow'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center items-center android:gap-[14px] ipadmini:gap-[16px] ipad:gap-[32px] desktop:gap-[32px] inline-flex font-poppins font-medium">
                            <div className="text-white android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                                With AdsGency AI
                            </div>
                            <img className="w-full android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] relative rounded-[25px]" src="images/home/simplify/image-2.png" />
                            <div className='w-full mt-[20px] flex-col justifu-start items-start android:gap-[16px] ipadmini:gap-[16px] ipad:gap-[32px] desktop:gap-[32px] inline-flex'>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-violet-500 rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/correct.svg'} alt='arrow'
                                        />
                                    </div>

                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktopw-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium">
                                        Automated Workflows & Real time performance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-violet-500 rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/correct.svg'} alt='arrow'
                                        />
                                    </div>
                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktopw-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium">
                                        Seamless Integration & Low Maintenance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="android:p-[4px] ipadmini:p-[6px] ipad:p-[8px] desktop:p-[8px] relative bg-violet-500 rounded-full">
                                        <img
                                            title='cross'
                                            className='cursor-pointer android:w-[18px] ipadmini:w-[20px] ipad:w-[24px] desktop:w-[24px] h-auto'
                                            src={'/images/elements/correct.svg'} alt='arrow'
                                        />
                                    </div>
                                    <div className="android:w-[150px] ipadmini:w-[180px] ipad:w-[200px] desktopw-[200px] android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-medium">
                                        ML Model Retraining & Update
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/requestDemo' className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px]">
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
        </div>
    )
}

export default SimplifyAds
