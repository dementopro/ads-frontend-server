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
        <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black flex-col justify-center items-center gap-10 inline-flex'>
            <div className="w-full flex-col justify-center items-center gap-[50px] inline-flex">
                <div className='text-center android:w-3/5 ipadmini:w-full ipad:w-full desktop:w-full text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans'>
                    <span className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text">
                        Unlock
                    </span> the  Advantages of  AI  for your Business
                </div>
                <div className="w-full h-full ipad:px-[80px] desktop:px-[100px] android:flex-col ipad:flex-row justify-center android:items-center ipad:items-start android:gap-[50px] ipad:gap-[10px] inline-flex">
                    <div className="w-full h-full ipad:px-[30px] desktop:px-[20px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex ipad:border-r-2 ipad:border-[#838383] ipad:border-opacity-45">
                        <CircularProgress
                            classNames={{
                                svg: "android:w-[115px] android:h-[115px] ipad:w-[150px] ipad:h-[150px] drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={80}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Decrease Cost
                        </div>
                        <div className="ipad:mt-[20px] text-center android:text-[12px] ipad:text-[16px] font-regular font-open-sans">
                            Reduce adsmanagement cost by 80%
                        </div>
                    </div>
                    <div className="w-full h-full ipad:px-[30px] desktop:px-[20px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex ipad:border-r-2 ipad:border-[#838383] ipad:border-opacity-45">
                        <CircularProgress
                            classNames={{
                                svg: "android:w-[115px] android:h-[115px] ipad:w-[150px] ipad:h-[150px] drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={100}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Increase Efficiency
                        </div>
                        <div className="ipad:mt-[20px] text-center android:text-[12px] ipad:text-[16px] font-regular font-open-sans">
                            Generate ad content 10x faster
                        </div>
                    </div>
                    <div className="w-full h-full ipad:px-[30px] desktop:px-[20px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex">
                        <CircularProgress
                            classNames={{
                                svg: "android:w-[115px] android:h-[115px] ipad:w-[150px] ipad:h-[150px] drop-shadow-md",
                                indicator: "stroke-violet-500",
                                track: "stroke-indigo-300/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={32}
                            strokeWidth={10}
                            showValueLabel={true}
                        />
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Increase ROI
                        </div>
                        <div className="ipad:mt-[20px] text-center android:text-[12px] ipad:text-[16px] font-regular font-open-sans">
                            32% Improvement on ad performance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics