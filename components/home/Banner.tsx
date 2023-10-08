'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'
import Link from 'next/link';

const Banner = () => {

    const router = useRouter()

    return (
        <>
            <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex w-full ipad:h-[73px] desktop:h-[73px] left-0 top-[-50px] font-poppins absolute bg-gradient-to-r from-indigo-500 to-purple-500 rounded-tl-[25px] rounded-tr-[25px] shadow z-neg-1">
                <div className="w-full ipad:h-[50px] desktop:h-[50px] px-[32px] py-2 justify-start items-center flex text-white ipad:text-[13px] desktop:text-[15px]">
                    <div className="w-full font-semibold">
                        We’ve just launched a new feature!
                    </div>
                    <div className="w-full justify-end items-end gap-[16px] flex">
                        <div className="font-medium underline">
                            See Feature Now
                        </div>
                        <div className="w-[18px] h-4 relative">
                            <img
                                title='arrow'
                                className='cursor-pointer ipad:w-[15px] desktop:w-[18px] ipad:h-auto desktop:h-auto'
                                src={'/images/elements/close.svg'} alt='arrow'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner