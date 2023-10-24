'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Banner from '@/components/home/Banner'
import PrimaryButton from '@/components/PrimaryButton'
import { useState } from 'react';
import { headerLinks } from '@/data/headerLinks'
import Dropdown from '@/components/Dropdown';
import MobileMenu from '@/components/MobileMenu';
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
      <div className="desktop:w-[1240px] ipad:w-full desktop:m-auto ipad:m-[0px] ipad:rounded-[25px] relative bg-[#15161A]">
        <Banner />
        <MobileMenu translate={mobileMenuTop} />
        <div className="w-full android:h-[95px] ipad:h-[70px] relative px-[32px] bg-[#15161A] ipad:rounded-[25px] shadow justify-center items-center ipad:gap-[32px] desktop:gap-[32px] inline-flex z-20">
          <div className="android:inline-block absolute left-[32px] ipad:hidden z-10 transition ease-in-out !duration-500">
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
            <div className="justify-center items-center ipad:gap-[25px] desktop:gap-[32px] flex text-white ipad:text-[13px] desktop:text-[15px] desktop:font-regular desktop:font-medium">
              {headerLinks.map((link, index) => (
                link.links.length === 0 ? ( // Check if links array is not empty
                  <Link key={index} href={link.url} className="hover:text-[#9D93FF]">
                    {link.title}
                  </Link>
                ) : (
                  <Dropdown key={index} heading={link.title} links={link.links} />
                )
              ))}
            </div>
          </div>
          <div className="android:hidden ipadmini:hidden ipad:flex desktop:flex w-auto justify-end items-end gap-4 text-white text-semibold">
            {/* <Link target="_blank"  href={'/login'} className="w-36 h-11 px-4 py-1.5 bg-[#15161A] justify-center items-center gap-4 flex">
            <div className="w-[120px] text-center text-white text-base font-medium leading-[29.12px]">
              Sign In
            </div>
            </Link> */}
            <PrimaryButton href="/requestDemo" text="Request Demo" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Header