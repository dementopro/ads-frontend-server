'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Statistic from 'antd/es/statistic/Statistic';

const AboveFooter = () => {

    return (
        <div className="w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black flex-col justify-center items-center gap-10 inline-flex overflow-hidden">
            <div className="android:w-[328px] ipadmini:w-[710px] ipad:w-[862px] desktop:w-[1036px] h-[214px] relative bg-[#3A3A3A] bg-opacity-20 rounded-3xl shadow">
                <img className="android:hidden ipadmini:block w-full h-auto left-0 top-0 absolute object-cover rounded z-neg-1" src="images/home/above-footer-vector.svg" />
                <img className="android:block ipadmini:hidden hidden w-full h-auto left-0 top-0 absolute object-cover rounded z-neg-1" src="images/home/above-footer-vector-android.svg" />
                <div className="h-full px-[50px] relative justify-start items-center flex-row flex z-10">
                    <div className="justify-start items-start flex-col flex gap-[20px]">
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
                        <div className="text-white android:text-[12px] ipadmini:text-[12px] ipad:text-[16px] desktop:text-[16px] font-medium font-poppins">
                            <span>
                                AdsGency AI for Enterprise?
                            </span>
                            <span className="ml-[5px] underline">
                                Contact Sales
                            </span>
                        </div>
                    </div>
                </div>
                <img className="android:hidden ipad:block right-[100px] top-[5px] absolute object-cover rounded z-neg-1" src="images/home/above-footer-image.svg" />
            </div>
        </div>
    )
}

export default AboveFooter