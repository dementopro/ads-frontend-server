'use client'

import React, { useState, useEffect } from 'react';

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
        <div className='w-full android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black flex-col android:gap-[16px] ipad:gap-[32px] inline-flex'>
            <div className="w-full flex-col android:justify-start ipadmini:justify-center items-center android:gap-[16px] ipad:gap-[32px] inline-flex">
                <div className='w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans'>
                    Features
                </div>
                <div className="android:w-[328px] ipadmini:w-[583px] ipad:w-[862px] desktop:w-[1036px] ipad:h-[68px] android:p-[4px] ipad:p-[7px] bg-zinc-800 android:rounded-[12px] ipadmini:rounded-[50px] justify-start items-center android:gap-[8px] ipad:gap-[16px] android:flex-col ipadmini:flex-row inline-flex">
                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 0 ? 'bg-[#9D93FF]' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(0)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 0 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 0 ? 'text-[#9D93FF]' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}>
                                1
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-poppins">
                            Planning
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 1 ? 'bg-[#9D93FF]' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(1)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 1 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 1 ? 'text-[#9D93FF]' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}>
                                2
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-poppins">
                            Image to Image
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 2 ? 'bg-[#9D93FF]' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(2)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 2 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 2 ? 'text-[#9D93FF]' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}>
                                3
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-poppins">
                            Text to Image
                        </div>
                    </button>

                    <button className={`android:h-[26px] ipad:h-[54px] android:w-full ipadmini:w-1/4 android:p-[3px] ipad:p-[12px] ${activeButtonIndex === 3 ? 'bg-[#9D93FF]' : ''} rounded-[50px] shadow justify-start items-center android:gap-[7px] ipad:gap-[14px] flex`} onClick={() => handleButtonClick(3)}>
                        <div className={`android:h-[20px] ipad:h-[35px] android:w-[20px] ipad:w-[35px] ${activeButtonIndex === 3 ? 'bg-white' : 'bg-zinc-600'} rounded-[360px] justify-center items-center flex`}>
                            <div className={`text-center ${activeButtonIndex === 3 ? 'text-[#9D93FF]' : 'text-zinc-500'} android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}>
                                4
                            </div>
                        </div>
                        <div className="text-white android:text-[9px] ipad:text-[13px] font-medium font-poppins">
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