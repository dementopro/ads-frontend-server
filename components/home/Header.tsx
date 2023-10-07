'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'
import Link from 'next/link';
import Banner from '@/components/home/Banner'


const Header = () => {

  const router = useRouter()

  function toHome() {
    router.push('/')
  }

  return (
    <>
      <div className="ipad:w-full desktop:w-full relative bg-zinc-900 rounded-[25px]">
        <Banner />
        <div className="w-full ipad:h-[70px] desktop:h-[70px] relative px-[32px] bg-zinc-900 rounded-[25px] shadow justify-start items-center ipad:gap-[32px] desktop:gap-[32px] inline-flex z-10">
          <div className="relative">
            <img
              onClick={toHome}
              className='cursor-pointer ipad:w-[100px] desktop:w-[130px] ipad:h-auto desktop:h-auto'
              title='Home'
              src={'/logo.svg'} alt='logo'
            />
          </div>
          <div className="flex-grow justify-start items-center gap-4 flex">
            <div className="justify-center items-center ipad:gap-[25px] desktop:gap-[32px] flex text-white ipad:text-[13px] desktop:text-[15px] desktop:font-normal desktop:font-medium">
              <Link href='/'>
                Home
              </Link>
              <Link href='/features'>
                Features
              </Link>
              {/* <Link href='/public/pricing' className="text-white text-[15px] font-medium leading-tight">
              Pricing
              </Link> */}
              <Link href='/blog'>
                Blog
              </Link>
              <Link href='/careers'>
                Careers
              </Link>
              <Link href='/contactUs'>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="w-auto justify-end items-end gap-4 flex text-white text-semibold">
            {/* <Link href={'/login'} className="w-36 h-11 px-4 py-1.5 bg-zinc-900 justify-center items-center gap-4 flex">
            <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
              Sign In
            </div>
            </Link> */}
            <Link href='/requestDemo' className="w-full ipad:px-[25px] desktop:px-[32px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-[8px] flex ipad:text-[14px] desktop:text-[16px]">
              <div>
                Request Demo
              </div>
              <div className="relative">
                <img
                  title='arrow'
                  className='cursor-pointer ipad:w-[15px] desktop:w-[18px] ipad:h-auto desktop:h-auto'
                  src={'/images/elements/ep_right.svg'} alt='arrow'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header