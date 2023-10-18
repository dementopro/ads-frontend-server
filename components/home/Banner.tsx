'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'
import Link from 'next/link';

const Banner = () => {

    const router = useRouter()

    return (
        <>
            <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex w-full ipad:h-[73px] desktop:h-[73px] left-0 top-[-50px] font-poppins absolute bg-gradient-to-r from-[#6859FF] to-[#AF41FF] rounded-tl-[25px] rounded-tr-[25px] shadow z-neg-1">
                <div className="w-full ipad:h-[50px] desktop:h-[50px] px-[32px] py-2 justify-start items-center flex text-white ipad:text-[13px] desktop:text-[15px]">
                    <div className="w-3/4 font-semibold">
                        📣 Exciting News! AdsGency AI selected to participate in the TechStars Accelerator Program 🚀
                    </div>
                    <Link target="_blank"  href='https://www.linkedin.com/posts/bolbi-liu-6aa0b4ab_techstarsforlife-startuplife-founders-activity-7117202850144800768-lSwq?utm_source=share&utm_medium=member_desktop' className="w-1/4 justify-end items-end gap-[16px] flex">
                        <div className="font-medium underline">
                            See Details
                        </div>
                        <div className="w-[18px] h-4 relative">
                            <img
                                title='arrow'
                                className='cursor-pointer ipad:w-[15px] desktop:w-[18px] ipad:h-auto desktop:h-auto'
                                src={'/images/elements/close.svg'} alt='arrow'
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Banner