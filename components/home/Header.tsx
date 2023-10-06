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
      <div className="w-[1240px] relative bg-zinc-900 rounded-[25px]">
        <Banner />
        <div className="w-full h-[70px] relative px-[32px] bg-zinc-900 rounded-[25px] shadow justify-start items-center gap-[32px] inline-flex z-10">
          <div className="lg:w-[130px] sm:w-[80px] relative">
            <Image
              onClick={toHome}
              className='cursor-pointer'
              title='Home'
              src={'/logo.svg'} width={130} height={28} alt='logo'
            />
          </div>
          <div className="flex-grow justify-start items-center gap-4 flex">
            <div className="justify-center items-center gap-[32px] flex text-white text-[15px] font-medium">
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
          <div className="w-auto justify-end items-end gap-4 flex text-white text-[16px] text-semibold">
            {/* <Link href={'/login'} className="w-36 h-11 px-4 py-1.5 bg-zinc-900 justify-center items-center gap-4 flex">
            <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
              Sign In
            </div>
            </Link> */}
            <Link href='/requestDemo' className="w-full px-[32px] py-[14px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-[8px] flex">
              <div>
                Request Demo
              </div>
              <div className="w-[18px] h-4 relative">
                <Image
                  title='arrow'
                  className='cursor-pointer'
                  src={'/images/elements/ep_right.svg'} width={18} height={4} alt='arrow'
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