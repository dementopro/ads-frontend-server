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
      <div className="NavBar w-full px-8 py-4 bg-zinc-900 rounded-[25px] shadow justify-start items-center gap-8 inline-flex z-10">
        <Banner />
        <div className="w-[130px] h-[28px] relative">
          <Image
            onClick={toHome}
            className='cursor-pointer'
            title='Home'
            src={'/logo.svg'} width={131} height={28} alt='logo'
          />
        </div>
        <div className="grow shrink basis-0 h-11 justify-start items-center gap-4 flex">
          <div className="px-4 py-1.5 justify-center items-center gap-8 flex">
            <Link href='/' className="text-white text-[15px] font-medium leading-tight">
              Home
            </Link>
            <Link href='/features' className="text-white text-[15px] font-medium leading-tight">
              Features
            </Link>
            <Link href='/public/pricing' className="text-white text-[15px] font-medium leading-tight">
              Pricing
            </Link>
            <Link href='/blog' className="text-white text-[15px] font-medium leading-tight">
              Blog
            </Link>
          </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
          <Link href={'/login'} className="w-36 h-11 px-4 py-1.5 bg-zinc-900 justify-center items-center gap-4 flex">
            <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
              Sign In
            </div>
          </Link>
          <Link href={'/'} className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-white text-base font-semibold leading-[19px]">
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
    </>
  )
}

export default Header