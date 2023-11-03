'use client'
import React from 'react';
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
        <div className='desktop:w-[1240px] ipad:w-full desktop:mx-auto ipad:m-[0px] android:my-[32px] ipad:my-[60px] flex-col justify-center items-center gap-10 inline-flex'>
            <div className="w-full h-full ipad:px-[80px] desktop:px-[100px] android:flex-col ipadmini:flex-row justify-center android:items-center ipad:items-start android:gap-[50px] ipad:gap-[10px] inline-flex">
                <div className="w-full flex-col justify-center items-center gap-[1px] inline-flex ipad:border-r-2 ipad:border-[#838383] ipad:border-opacity-45">
                    <div className="text-center mb-[32px] android:text-[12px] ipad:text-[14px] font-regular font-open-sans">
                        Used By
                    </div>
                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[24px] ipad:text-[28px] font-semibold font-poppins">
                        10,000+
                    </div>
                    <div className="android:text-[20px] ipad:text-[24px] font-semibold font-poppins">
                        Businesses
                    </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-[1px] inline-flex ipad:border-r-2 ipad:border-[#838383] ipad:border-opacity-45">
                    <div className="text-center mb-[32px] android:text-[12px] ipad:text-[14px] font-regular font-open-sans">
                        Who Make
                    </div>
                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[24px] ipad:text-[28px] font-semibold font-poppins">
                        $250m+
                    </div>
                    <div className="android:text-[20px] ipad:text-[24px] font-semibold font-poppins">
                        Every Year
                    </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-[1px] inline-flex">
                    <div className="text-center mb-[32px] android:text-[12px] ipad:text-[14px] font-regular font-open-sans">
                        Creating
                    </div>
                    <div className="bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text android:text-[24px] ipad:text-[28px] font-semibold font-poppins">
                        250,000+
                    </div>
                    <div className="android:text-[20px] ipad:text-[24px] font-semibold font-poppins">
                        Content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics