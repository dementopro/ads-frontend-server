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
        <div className='w-full py-[100px] bg-black'>
            <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
                <div className="w-4/5 py-[50px] px-[50px] relative bg-neutral-900 rounded-[25px] shadow flex-col justify-start items-center gap-[25px] inline-flex">
                    <div className="w-full flex-row justify-center items-center gap-[20px] inline-flex">
                        <div className="w-full flex-col justify-start items-start gap-[30px] inline-flex">
                            <div className="text-white text-[42px] font-bold font-open-sans">
                                Don't know where to start?
                            </div>
                            <div className="text-white text-xl font-medium font-open-sans leading-tight">
                                We help you plan your ads strategy
                            </div>
                            <div className="w-full flex-row justify-start items-start gap-[8px] inline-flex">
                                <div className="w-full flex-col justify-start items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text text-[30px] font-semibold font-poppins">
                                        % 93
                                    </div>
                                    <div className="text-xl font-semibold font-poppins">
                                        Time
                                    </div>
                                    <div className="mt-[20px] text-base font-normal font-open-sans">
                                        Training & hiring marketers
                                    </div>
                                </div>

                                <div className="w-full flex-col justify-start items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text text-[30px] font-semibold font-poppins">
                                        +290K
                                    </div>
                                    <div className="text-xl font-semibold font-poppins">
                                        Content
                                    </div>
                                    <div className="mt-[20px] text-base font-normal font-open-sans">
                                        Delivered
                                    </div>
                                </div>

                                <div className="w-full flex-col justify-start items-start gap-[1px] inline-flex">
                                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text text-[30px] font-semibold font-poppins">
                                        +145
                                    </div>
                                    <div className="text-xl font-semibold font-poppins">
                                        Countries
                                    </div>
                                    <div className="mt-[20px] text-base font-normal font-open-sans">
                                        Used real time data analytics
                                    </div>
                                </div>
                            </div>

                            <Link href={'/contactUs'} className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-white text-base font-semibold leading-[19px]">
                                    Contact Sales
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

                        <div className="w-full justify-center items-center">
                            <div className="w-full h-[350px]">
                                <iframe className='w-full h-full rounded-[25px]' src="https://www.youtube.com/embed/aEEINIkBd20" title="AdsGency AI Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales