'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeBanner = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const hasShown = localStorage.getItem('bannerStatus');

        if (localStorage && hasShown !== 'DONE') {
            setIsOpen(true);
            localStorage.setItem('bannerStatus', 'DONE');
        }
    }, []);

    if (!isOpen) return <></>;

    const router = useRouter()

    return (
        <>
            <div 
                className={`android:hidden ipadmini:hidden ipad:flex desktop:flex w-full ipad:h-[73px] desktop:h-[73px] left-0 top-[-50px] font-poppins absolute bg-gradient-to-r from-[#6859FF] to-[#AF41FF] rounded-tl-[25px] rounded-tr-[25px] shadow z-neg-1 ${
                    isOpen ? 'opacity-100' : 'opacity-0 hidden'
                }`}
            >
                <div className="w-full ipad:h-[50px] desktop:h-[50px] px-[32px] py-2 justify-start items-center flex text-white ipad:text-[13px] desktop:text-[15px]">
                    <div className="w-3/4 font-semibold">
                        📣 Exciting News! AdsGency AI selected to participate in the TechStars Accelerator Program 🚀
                    </div>
                    <div className="w-1/4 justify-end items-end gap-[16px] flex">
                        <Link target="_blank" href='https://www.linkedin.com/posts/bolbi-liu-6aa0b4ab_techstarsforlife-startuplife-founders-activity-7117202850144800768-lSwq?utm_source=share&utm_medium=member_desktop' className="font-medium underline">
                            See Details
                        </Link>
                        <div className="w-[18px] h-4 relative">
                            <FiX
                                className="cursor-pointer ipad:w-[15px] desktop:w-[18px] ipad:h-auto desktop:h-auto"
                                onClick={closeBanner}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner