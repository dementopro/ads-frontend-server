'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'
import Link from 'next/link';

const Banner = () => {

    const router = useRouter()

    return (
        <>
            <div className="Banner w-full left-0 top-[-50px] font-poppins px-8 py-2 absolute bg-gradient-to-r from-indigo-500 to-purple-500 rounded-tl-[25px] rounded-tr-[25px] shadow justify-start items-start gap-8 inline-flex z-neg-1">
                <div className="h-11 justify-start items-center gap-4 flex">
                    <div className="py-1.5 rounded-lg justify-center items-center gap-8 flex">
                        <div className="Text text-white text-[15px] font-medium leading-tight">We’ve just launched a new feature!</div>
                    </div>
                </div>
                <div className="Buttons grow shrink basis-0 h-11 justify-end items-center gap-4 flex">
                    <div className="px-4 py-1.5 justify-center items-center gap-4 flex">
                        <div className="Text text-center text-white text-[15px] font-medium underline">
                            See Feature Now
                        </div>
                    </div>
                    <div className="w-[18px] h-4 relative">
                        <Image
                            title='cross'
                            className='cursor-pointer'
                            src={'/images/elements/close.svg'} width={18} height={4} alt='arrow'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner