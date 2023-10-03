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
        'planning.png',
        'imagetoimage.png',
        'texttoimage.png',
        'socialinsights.png',
      ];
    
      const handleButtonClick = (index: React.SetStateAction<number>) => {
        setSelectedImageIndex(index);
        setActiveButtonIndex(index);
      };
    
    return (
        <div className='w-full py-[100px] bg-black flex-col justify-center items-center gap-10 inline-flex'>
            <div className="w-full flex-col justify-center items-center gap-[50px] inline-flex">
                <div className='text-white text-[42px] font-bold font-open-sans'>
                    Features
                </div>
                <div className="w-4/5 h-20 px-2 py-2 bg-zinc-800 rounded-[50px] justify-start items-center gap-5 inline-flex">
                    <button className={`h-16 w-1/4 px-3 py-3 ${activeButtonIndex === 0 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center gap-4 flex`} onClick={() => handleButtonClick(0)}>
                        <div className={`h-10 w-10 ${activeButtonIndex === 0 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 0 ? 'text-violet-500' : 'text-zinc-500'} text-2xl font-semibold font-poppins`}>
                                1
                            </div>
                        </div>
                        <div className="text-white text-base font-medium font-poppins">
                            Planning
                        </div>
                    </button>

                    <button className={`h-16 w-1/4 px-3 py-3 ${activeButtonIndex === 1 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center gap-4 flex`} onClick={() => handleButtonClick(1)}>
                        <div className={`h-10 w-10 ${activeButtonIndex === 1 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 1 ? 'text-violet-500' : 'text-zinc-500'} text-2xl font-semibold font-poppins`}>
                                2
                            </div>
                        </div>
                        <div className="text-white text-base font-medium font-poppins">
                            Image to Image
                        </div>
                    </button>

                    <button className={`h-16 w-1/4 px-3 py-3 ${activeButtonIndex === 2 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center gap-4 flex`} onClick={() => handleButtonClick(2)}>
                        <div className={`h-10 w-10 ${activeButtonIndex === 2 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 2 ? 'text-violet-500' : 'text-zinc-500'} text-2xl font-semibold font-poppins`}>
                                3
                            </div>
                        </div>
                        <div className="text-white text-base font-medium font-poppins">
                            Text to Image
                        </div>
                    </button>

                    <button className={`h-16 w-1/4 px-3 py-3 ${activeButtonIndex === 3 ? 'bg-violet-500' : ''} rounded-[50px] shadow justify-start items-center gap-4 flex`} onClick={() => handleButtonClick(3)}>
                        <div className={`h-10 w-10 ${activeButtonIndex === 3 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 3 ? 'text-violet-500' : 'text-zinc-500'} text-2xl font-semibold font-poppins`}>
                                4
                            </div>
                        </div>
                        <div className="text-white text-base font-medium font-poppins">
                            Social Insights
                        </div>
                    </button>
                    
                </div>

                <div className="w-4/5 rounded-[10px]">
                    <img className="w-full h-auto object-cover rounded" src={`images/home/features/${images[selectedImageIndex]}`} />
                </div>
            </div>
        </div>
    )
}

export default Features