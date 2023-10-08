'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Banner from '@/components/home/Banner'
import Breadcrumb from '@/components/Breadcrumb'


const Header = () => {

  const router = useRouter()

  function toHome() {
    router.push('/')
  }

  return (
    <>
      <div className="w-full relative bg-zinc-900 android:rounded-[0px] ipadmini:rounded-[0px] ipad:rounded-[25px] desktop:rounded-[25px]">
        <Banner />

        <div className="w-full android:h-[95px] ipadmini:h-[95px] ipad:h-[70px] desktop:h-[70px] relative px-[32px] bg-zinc-900 rounded-[25px] shadow justify-center items-center ipad:gap-[32px] desktop:gap-[32px] inline-flex z-10">
          <div className="android:inline-block ipad:hidden z-100">
            <img
              className='cursor-pointer android:w-[18px] ipadmini:w-[22px] h-auto android:block ipad:hidden'
              title='Home'
              src={'/images/elements/breadcrumb.svg'} alt='logo'
            />
          </div>
          <div className="relative">
            <img
              onClick={toHome}
              className='cursor-pointer ipad:w-[100px] desktop:w-[130px] ipad:h-auto desktop:h-auto'
              title='Home'
              src={'/logo.svg'} alt='logo'
            />
          </div>
          <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex flex-grow justify-start items-center gap-4">
            <div className="justify-center items-center ipad:gap-[25px] desktop:gap-[32px] flex text-white ipad:text-[13px] desktop:text-[15px] desktop:font-regular desktop:font-medium">
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
          <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex w-auto justify-end items-end gap-4 text-white text-semibold">
            {/* <Link href={'/login'} className="w-36 h-11 px-4 py-1.5 bg-zinc-900 justify-center items-center gap-4 flex">
            <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
              Sign In
            </div>
            </Link> */}
            <Link href='/requestDemo' className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px]">
              <div>
                Request Demo
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
        </div>
      </div>
    </>
  )
}

export default Header