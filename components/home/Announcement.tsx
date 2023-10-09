'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Banner from '@/components/home/Banner'
import Breadcrumb from '@/components/Breadcrumb'


const Announcement = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeAnnouncement = () => {
        setIsOpen(false);
        // Remove the 'overflow-y-hidden' class from the body
        document.body.classList.remove('overflow-y-hidden');
    };

    return (
        <div className={`absolute top-0 left-0 h-screen w-full z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="relative flex bg-[#D0CDD6] bg-opacity-50 h-full w-full justify-center items-center">
                <div className="android:w-[340px] ipad:w-auto bg-hero-pattern bg-cover android:gap-[8px] ipad:gap-[16px] android:m-[10px] ipad:m-[0px] p-[32px] android:rounded-[15px] ipad:rounded-[25px] shadow flex-col inline-flex">
                    <div className="w-full relative text-right">
                        <img
                            title='arrow'
                            className='cursor-pointer inline-block android:w-[15px] ipadmini:[20px] ipad:w-[25px] desktop:w-[30px] h-auto'
                            src={'/images/elements/close.svg'} alt='arrow'
                            onClick={closeAnnouncement}
                        />
                    </div>
                    <div className="inline-flex android:flex-col ipad:flex-row justify-center items-center android:gap-[16px] ipad:gap-[32px]">
                        <div className="inline-flex flex-col android:w-full ipad:w-[300px] android:gap-[16px] ipad:gap-[32px]">
                            <div className="text-left text-white android:-text-[25px] ipadmini:text-[30px] ipad:text-[38px] desktop:text-[45px] font-semibold font-Poppins">
                                Exciting News!
                            </div>
                            <div className="text-left text-white android:text-[8px] ipadmini:text-[10px] ipad:text-[13px] desktop:text-[15x] font-regular font-Poppins">
                                AdsGency AI selected to participate in the TechStars Accelerator Program
                            </div>
                            <Link target="_blank" href='https://www.linkedin.com/posts/bolbi-liu-6aa0b4ab_techstarsforlife-startuplife-founders-activity-7117202850144800768-lSwq?utm_source=share&utm_medium=member_desktop' className="text-white android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px]">
                                <div>
                                    See Details Here
                                </div>
                                <div className="relative">
                                    <img
                                        title='arrow'
                                        className='cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto'
                                        src={'/images/elements/ep_right.svg'} alt='arrow'
                                    />
                                </div>
                            </Link>
                        </div>
                        <img className="android:w-full ipad:w-[250px] h-auto android:p-[5px] ipad:p-[8px] android:rounded-[5px] ipad:rounded-[10px] border-2 border-violet-500 border-opacity-60" src="/images/home/announcement.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement