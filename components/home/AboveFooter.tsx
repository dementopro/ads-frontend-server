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
        <div className="w-full my-[60px] bg-black flex-col justify-center items-center gap-10 inline-flex overflow-hidden">
            <div className="w-[1036px] h-[214px] relative bg-[#3A3A3A] bg-opacity-20 rounded-3xl shadow">
                <img className="w-full h-auto left-0 top-0 absolute object-cover rounded z-neg-1" src="images/home/above-footer-vector.svg" />
                <div className="h-full px-[50px] relative justify-start items-center flex-row flex z-10">
                    <div className="justify-start items-start flex-col flex gap-[20px]">
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
                        <div className="text-center text-white text-base font-medium font-poppins">
                            <span>
                                AdsGency AI for Enterprise?
                            </span>
                            <span className="ml-[5px] underline">
                                Contact Sales
                            </span>
                        </div>
                    </div>
                </div>
                <img className="right-[100px] top-[5px] absolute object-cover rounded z-neg-1" src="images/home/above-footer-image.svg" />
            </div>
        </div>
    )
}

export default AboveFooter