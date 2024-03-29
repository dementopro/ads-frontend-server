'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Banner from '@/components/announcement/Banner'
import PrimaryButton from '@/components/common/PrimaryButton'
import { useState } from 'react';
import { headerLinks } from '@/data/Links/headerLinks'
import Dropdown from '@/components/common/Dropdown';
import MobileMenu from '@/components/common/MobileMenu';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const router = useRouter()

  function toHome() {
    router.push('/')
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBreadcrumbClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const mobileMenuTop = isMobileMenuOpen ? 'translate-y-[95px]' : 'translate-y-[-200px]';
  return (
    <>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:mt-[0px] ipad:mt-[82px] ipad:rounded-[25px] relative bg-[#15161A]">
        <Banner />
        <MobileMenu translate={mobileMenuTop} />
        <div className="w-full android:h-[95px] ipad:h-[70px] relative px-[32px] bg-[#15161A] ipad:rounded-[25px] shadow justify-center items-center ipad:gap-[32px] desktop:gap-[32px] inline-flex z-40">
          <div className="android:inline-block absolute left-[32px] ipad:hidden z-30 transition ease-in-out !duration-500">
            {isMobileMenuOpen ?
              <FiX
                className='cursor-pointer android:w-[18px] ipadmini:w-[22px] h-auto android:block ipad:hidden'
                onClick={handleBreadcrumbClick}
              /> :
              <FiMenu
                className='cursor-pointer android:w-[18px] ipadmini:w-[22px] h-auto android:block ipad:hidden'
                onClick={handleBreadcrumbClick}
              />}
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
            <div className="justify-center items-center ipad:gap-[25px] desktop:gap-[32px] flex text-white text-[15px]">
              {headerLinks.map((item, index) => (
                !item.section ? (
                  <Link key={index} href={item.href} className="hover:text-[#9D93FF]">
                    {item.title}
                  </Link>
                ) : (
                  <Dropdown key={index} heading={item.title} section={item.section} />
                )
              ))}
            </div>
          </div>
          <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex w-auto justify-end items-end gap-4 text-white text-semibold font-bold">
            <Link target="_self"  href="/login" className="w-36 h-11 px-4 py-1.5 bg-[#15161A] justify-center items-center gap-4 flex">
              <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
                Sign In
              </div>
            </Link>
            <PrimaryButton icon={true} target="_self" href="/requestDemo" text="Request Demo" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Header
