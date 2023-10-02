'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Statistic from 'antd/es/statistic/Statistic';
import { CircularProgress } from "@nextui-org/react";

const Statistics = () => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full py-[100px] bg-black flex-col justify-center items-center gap-10 inline-flex'>
            <div className="w-full flex-col justify-center items-center gap-[50px] inline-flex">
                <div className='text-white text-[42px] font-bold font-open-sans'>
                    <span className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                        Unlock
                    </span> the  Advantages of  AI  for your Business
                </div>
                <div className="w-full flex-row justify-center items-center gap-[10px] inline-flex">
                    <div className="w-full flex-col justify-center items-center gap-[15px] inline-flex border-r-2 border-[#838383] border-opacity-45">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={80}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="text-xl font-semibold font-poppins">
                            Decrease Cost
                        </div>
                        <div className="mt-[20px] text-base font-normal font-open-sans">
                            Reduce adsmanagement cost by 80%
                        </div>
                    </div>

                    <div className="w-full flex-col justify-center items-center gap-[15px] inline-flex border-r-2 border-[#838383] border-opacity-45">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={100}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="text-xl font-semibold font-poppins">
                            Increase Efficiency
                        </div>
                        <div className="mt-[20px] text-base font-normal font-open-sans">
                            Generate ad content 10x faster
                        </div>
                    </div>

                    <div className="w-full flex-col justify-center items-center gap-[15px] inline-flex">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={32}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="text-xl font-semibold font-poppins">
                            Increase ROI
                        </div>
                        <div className="mt-[20px] text-base font-normal font-open-sans">
                            32% Improvement on ad performance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics