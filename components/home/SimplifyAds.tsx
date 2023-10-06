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
        <div className='w-full my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex'>
            <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
                <div className='text-white text-[42px] font-bold font-open-sans'>
                    Simplify your Ads Management
                </div>
                <div className="w-[932px] py-[32px] px-[100px] relative bg-[#27252D] border-4 border-violet-500 border-opacity-60 rounded-[25px] shadow flex-col justify-start items-center gap-[25px] inline-flex">
                    <div className="w-full flex-row justify-center items-center gap-[150px] inline-flex">
                        <div className="w-full flex-col justify-center items-center gap-[32px] inline-flex font-poppins font-medium">
                            <div className="text-[#A09BAE] text-base font-semibold">
                                Without AdsGency AI
                            </div>
                            <img className="w-full h-[165px] object-cover relative rounded-[25px]" src="images/home/simplify/image-1.jpeg" />
                            <div className='w-full mt-[20px] flex-col justifu-end items-end gap-[32px] inline-flex text-[#A09BAE]'>
                                <div className="justify-start items-center gap-[10px] inline-flex">
                                    <div className="w-[200px] text-base font-medium text-right">
                                        Training and Hiring Markets
                                    </div>
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                </div>
                                <div className="justify-start items-right gap-[10px] inline-flex">
                                    <div className="w-[200px] text-base font-medium text-right">
                                        Complex Coding & High Maintenance
                                    </div>
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-[200px] text-base font-medium text-right">
                                        Time consuming update cycles
                                    </div>
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-[#4E4A5B] rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center items-center gap-[32px] inline-flex font-poppins font-medium">
                            <div className="text-white text-base font-semibold">
                                With AdsGency AI
                            </div>
                            <img className="w-full h-[165px] relative rounded-[25px]" src="images/home/simplify/image-2.png" />
                            <div className='w-full mt-[20px] flex-col justifu-start items-start gap-[32px] inline-flex'>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                    <div className="w-[200px] text-base font-medium">
                                        Automated Workflows & Real time performance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                    <div className="w-[200px] text-base font-medium">
                                        Seamless Integration & Low Maintenance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-[40px] h-[40px] px-[8px] py-[8px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={24} height={24} alt='arrow'
                                        />
                                    </div>
                                    <div className="w-[200px] text-base font-medium">
                                        ML Model Retraining & Update
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/requestDemo' className="px-[32px] py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-[8px] flex">
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
    )
}

export default SimplifyAds
