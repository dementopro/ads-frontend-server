'use client'
import React, { useState, useEffect } from 'react';
import { userTestimonials } from '@/data/user-testimonials';
import Marquee from "react-fast-marquee";


const Testimonials = () => {
    const [text, setText] = useState('');
    const textOptions = ['Transformation', 'Strategic Planning', 'Content Generation', 'Ads Optimization', 'Insights'];
    const animationDuration = 2000;

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Rotate through text options
            setText(textOptions[(textOptions.indexOf(text) + 1) % textOptions.length]);
        }, animationDuration);

        return () => clearInterval(intervalId);
    }, [text]);

    const getDynamicClasses = () => {
        // Define CSS classes based on the current text
        switch (text) {
            case 'Transformation':
                return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
            case 'Strategic Planning':
                return 'text-violet-400';
            case 'Content Generation':
                return 'bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text';
            case 'Ads Optimization':
                return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
            case 'Insights':
                return 'text-violet-400';
            default:
                return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
        }
    };

    const dynamicClasses = getDynamicClasses();
    return (
        <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black'>
            <div className="w-full flex-col justify-center items-center android:gap-[32px] ipadmini:gap-[32px] ipad:gap-[16px] desktop:gap-[32px] inline-flex">
                <div className='android:flex-col ipadmini:flex-row ipad:flex-row desktop:flex-row justify-center items-center android:gap-[0px] ipadmini:gap-[6px] ipad:gap-[8px] desktop:gap-[10px] inline-flex'>
                    <div className="text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-poppins">
                        We Help our Clients Achieve
                    </div>
                    <div className={`${dynamicClasses} android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-poppins`}>
                        {text}
                    </div>
                </div>
                <div className="text-white android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[20px] font-medium font-open-sans leading-tight">
                    Here&apos;s what they have to say about us
                </div>
                <div className='w-full ipad:mt-[16px] desktop:mt-[0px] flex-col justify-center items-center !gap-[10px] inline-flex'>
                    <Marquee pauseOnHover={true} speed={20}>
                        {userTestimonials.map((item, index) => (
                            <div key={index} className="android:w-[230px] ipadmini:w-[270px] ipad:w-[300px] android:h-[270px] ipadmini:h-[300px] ipad:h-[330px] android:mx-[30px] ipadmini:mx-[40px] ipad:mx-[50px] desktop:mx-[50px] android:pt-[18px] ipadmini:pt-[20px] ipad:pt-[32px] desktop:pt-[32px] bg-gradient-to-br from-[#3A2966] to-[#010101] rounded-[25px] flex-col justify-start items-center gap-[16px] !inline-flex overflow-hidden">
                                <div className="w-full android:px-[18px] ipadmini:px-[20px] ipad:px-[32px] desktop:px-[32px] justify-start items-center">
                                    <img className="android:w-[20px] ipadmini:w-[30px] ipad:w-[40px] desktop:w-[40px] h-auto"
                                        alt='quote' src='/images/elements/quote.svg'
                                    />
                                </div>
                                <div className="w-full justify-center items-start gap-[8px] inline-flex">
                                    <img className="android:w-[15px] ipadmini:w-[20px] ipad:w-[25px] desktop:w-[25px] h-auto"
                                        alt='quote' src='/images/elements/star.svg'
                                    />
                                    <img className="android:w-[15px] ipadmini:w-[20px] ipad:w-[25px] desktop:w-[25px] h-auto"
                                        alt='quote' src='/images/elements/star.svg'
                                    />
                                    <img className="android:w-[15px] ipadmini:w-[20px] ipad:w-[25px] desktop:w-[25px] h-auto"
                                        alt='quote' src='/images/elements/star.svg'
                                    />
                                    <img className="android:w-[15px] ipadmini:w-[20px] ipad:w-[25px] desktop:w-[25px] h-auto"
                                        alt='quote' src='/images/elements/star.svg'
                                    />
                                    <img className="android:w-[15px] ipadmini:w-[20px] ipad:w-[25px] desktop:w-[25px] h-auto"
                                        alt='quote' src='/images/elements/star.svg'
                                    />
                                </div>
                                <div className="android:px-[18px] ipadmini:px-[20px] ipad:px-[32px] desktop:px-[32px] h-full justify-center item-center text-center text-white android:text-[10px] ipadmini:text-[12px] ipad:text-[13px] desktop:text-[13px] font-regular font-open-sans leading-[19px] inline-flex">
                                    <div className='justify-center item-center'>
                                        {item.testimonial}
                                    </div>
                                </div>
                                <div className="w-full pl-8 android:py-[8px] ipadmini:py-[10px] ipad:py-[12px] desktop:py-[12px] bg-[#171717] justify-start items-center inline-flex">
                                    <div className=" justify-start items-center android:gap-[14px] ipadmini:gap-[16px] ipad:gap-[30px] desktop:gap-[30px] inline-flex">
                                        <img alt={item.name} src={`/images/home/testimonial/${item.image}.png`} className="android:w-[27px] ipadmni:w-[32px] ipad:w-[42px] desktop:w-[42px] android:h-[27px] ipadmni:h-[32px] ipad:h-[42px] desktop:h-[42px] rounded-full border border-white" />
                                        <div className="flex-col justify-center items-start android:gap-[0px] ipadmini:gap-[4px] ipad:gap-[5px] desktop:gap-[5px] inline-flex">
                                            <div className="text-white android:text-[8px] ipadmini:text-[10px] ipad:text-[12px] desktop:text-[12px] font-semibold font-poppins">
                                                {item.name}
                                            </div>
                                            <div className="text-zinc-400 android:text-[7px] ipadmini:text-[9px] ipad:text-[11px] desktop:text-[11px] font-regular font-open-sans leading-[19px]">
                                                {item.designation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
