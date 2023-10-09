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

const Features = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const images = [
        'planning.svg',
        'imagetoimage.svg',
        'texttoimage.svg',
        'socialinsights.svg',
      ];
    
      const handleButtonClick = (index: React.SetStateAction<number>) => {
        setSelectedImageIndex(index);
        setActiveButtonIndex(index);
      };
    
    return (
        <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black flex-col android:gap-[16px] ipad:gap-[32px] inline-flex'>
            <div className="w-full flex-col android:justify-start ipadmini:justify-center items-center android:gap-[16px] ipad:gap-[32px] inline-flex">
                <div className='w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-Open+Sans'>
                    Features
                </div>
                <div className="android:w-[328px] ipadmini:w-[583px] ipad:w-[862px] desktop:w-[1036px] ipad:h-[68px] android:p-[4px] ipad:p-[7px] bg-zinc-800 android:rounded-[20px] ipadmini:rounded-[50px] justify-start items-center android:gap-[8px] ipad:gap-[16px] android:flex-col ipadmini:flex-row inline-flex">
                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 0 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(0)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 0 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 0 ? 'text-violet-500' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-Poppins`}>
                                1
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-Poppins">
                            Planning
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 1 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(1)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 1 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 1 ? 'text-violet-500' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-Poppins`}>
                                2
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-Poppins">
                            Image to Image
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 2 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(2)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 2 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 2 ? 'text-violet-500' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-Poppins`}>
                                3
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-Poppins">
                            Text to Image
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 3 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(3)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 3 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 3 ? 'text-violet-500' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-Poppins`}>
                                4
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-Poppins">
                            Social Insights
                        </div>
                    </button>
                    
                </div>

                <div className="android:w-[328px] ipadmini:w-[540px] ipad:w-[862px] desktop:w-[862px] rounded-[10px]">
                    <img className="w-full h-auto object-cover rounded" src={`images/home/features/${images[selectedImageIndex]}`} />
                </div>
            </div>
        </div>
    )
}

export default Features