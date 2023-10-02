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
        <div className='w-full py-[100px] bg-black flex-col justify-center items-center gap-10 inline-flex'>
            <div className="w-full flex-col justify-center items-center gap-8 inline-flex">
                <div className='text-white text-[42px] font-bold font-open-sans'>
                    Simplify your Ads Management
                </div>
                <div className="w-4/5 py-[50px] relative bg-neutral-900 rounded-[25px] shadow flex-col justify-start items-center gap-[25px] inline-flex">
                    <div className="w-full flex-row justify-center items-center gap-[10px] inline-flex">
                        <div className="w-full flex-col justify-center items-center gap-[20px] inline-flex font-poppins font-medium">
                            <div className="text-zinc-500 text-base font-semibold">
                                Without AdsGency AI
                            </div>
                            <img className="w-2/3 h-[170px] object-cover relative rounded-[25px]" src="images/home/simplify/image-1.jpeg" />
                            <div className='mt-[30px] flex-col justifu-end items-end gap-[30px] inline-flex'>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="text-zinc-500 text-base font-medium">
                                        Training and Hiring Markets
                                    </div>
                                    <div className="px-[7px] py-[7px] relative bg-neutral-700 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="text-zinc-500 text-base font-medium">
                                        Complex Coding & High Maintenance
                                    </div>
                                    <div className="px-[7px] py-[7px] relative bg-neutral-700 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="text-zinc-500 text-base font-medium">
                                        Time consuming update cycles
                                    </div>
                                    <div className="px-[7px] py-[7px] relative bg-neutral-700 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/cross.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center items-center gap-[20px] inline-flex font-poppins font-medium">
                            <div className="text-zinc-500 text-base font-semibold">
                                With AdsGency AI
                            </div>
                            <img className="w-2/3 h-[170px] relative rounded-[25px]" src="images/home/simplify/image-2.png" />
                            <div className='mt-[30px] flex-col justifu-start items-start gap-[30px] inline-flex'>
                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                    <div className="text-white text-base font-medium">
                                        Automated Workflows & Real time performance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                    <div className="text-white text-base font-medium">
                                        Seamless Integration & Low Maintenance
                                    </div>
                                </div>

                                <div className="justify-start items-center gap-[15px] inline-flex">
                                    <div className="px-[7px] py-[7px] relative bg-violet-500 text-zinc-500 rounded-full">
                                        <Image
                                            title='cross'
                                            className='cursor-pointer'
                                            src={'/images/elements/correct.svg'} width={20} height={20} alt='arrow'
                                        />
                                    </div>
                                    <div className="text-white text-base font-medium">
                                        ML Model Retraining & Update
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/requestDemo' className="w-[250px] px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-2 flex">
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
    )
}

export default SimplifyAds
