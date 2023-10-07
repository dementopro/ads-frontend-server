'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { userTestimonials } from '@/data/user-testimonials';
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';


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
        <div className='w-full my-[60px] bg-black'>
            <div className="w-full flex-col justify-center items-center ipad:gap-[16px] desktop:gap-[32px] inline-flex">
                <div className='flex-row justify-center items-center gap-[10px] inline-flex'>
                    <div className="text-white ipad:text-[34px] desktop:text-[42px] font-bold font-poppins">
                        We Help our Clients Achieve
                    </div>
                    <div className={`${dynamicClasses} ipad:text-[34px] desktop:text-[42px] font-bold font-poppins`}>
                        {text}
                    </div>
                </div>
                <div className="text-white ipad:text-[16px] desktop:text-[20px] font-medium font-open-sans leading-tight">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Here's what they have to say about us
                </div>
                <div className='w-full ipad:mt-[16px] desktop:mt-[0px] flex-col justify-center items-center !gap-[10px] inline-flex'>
                    <Slider
                        arrows={true} infinite={true} variableWidth autoplay={true} pauseOnHover={true} autoplaySpeed={0} speed={8000} cssEase='linear' centerMode swipeToSlide={false}>
                        {userTestimonials.map((item, index) => (

                            <div key={index} className="!w-[299px] h-[333px] mx-[50px] pt-[32px] bg-gradient-to-br from-[#3A2966] to-[#010101] rounded-[25px] flex-col justify-start items-center gap-[16px] !inline-flex overflow-hidden">
                                <div className="w-full px-[32px] justify-start items-center">
                                    <Image alt='quote' src='/images/elements/quote.svg' width={40} height={40} />
                                </div>
                                <div className="w-full justify-center items-start gap-[8px] inline-flex">
                                    <Image alt='user' src='/images/elements/star.svg' width={25} height={25} className='rounded-full' />
                                    <Image alt='user' src='/images/elements/star.svg' width={25} height={25} className='rounded-full' />
                                    <Image alt='user' src='/images/elements/star.svg' width={25} height={25} className='rounded-full' />
                                    <Image alt='user' src='/images/elements/star.svg' width={25} height={25} className='rounded-full' />
                                    <Image alt='user' src='/images/elements/star.svg' width={25} height={25} className='rounded-full' />
                                </div>
                                <div className="px-[32px] h-full justify-center item-center text-center text-white text-[13px] font-normal font-open-sans leading-[19px] inline-flex">
                                    <div className='justify-center item-center'>
                                        {item.testimonial}
                                    </div>
                                </div>
                                <div className="w-full pl-8 py-[12px] bg-[#171717] justify-start items-center inline-flex">
                                    <div className=" justify-start items-center gap-[30px] inline-flex">
                                        <img alt={item.name} src={`/images/home/testimonial/${item.image}.png`} className="w-[42px] h-[42px] rounded-full border border-white" />
                                        <div className="flex-col justify-center items-start gap-1 inline-flex">
                                            <div className="text-white text-sm font-semibold font-poppins">
                                                {item.name}
                                            </div>
                                            <div className="text-zinc-400 text-xs font-normal font-open-sans leading-[19px]">
                                                {item.designation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
