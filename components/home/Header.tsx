'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'
import Link from 'next/link';


const Header = () => {

  const router = useRouter()

  function toHome() {
    router.push('/')
  }

  return (
    <>
      <div className='w-full h-[64px] border-b border-[#3A3A3A] bg-[#1B1C21] px-4 sm:px-8 flex items-center justify-between'>
        <Image
          onClick={toHome}
          className='cursor-pointer'
          title='Home'
          src={'/logo.svg'} width={131} height={28} alt='logo'
        />
        <div className='max-sm:hidden flex items-center gap-4'>
          <Link href='/' className={`flex items-center justify-center bg-transparent text-white cursor-pointer min-w-[80px] px-4 py-1 truncate hover:bg-primary-purple/70 rounded transition-all duration-300`}>
            Home
          </Link>
          <Link href='/blog' className={`flex items-center justify-center bg-transparent text-white cursor-pointer min-w-[80px] px-4 py-1 truncate hover:bg-primary-purple/70 rounded transition-all duration-300`}>
            Blog
          </Link>
          <Link href='/features' className={`flex items-center justify-center bg-transparent text-white cursor-pointer min-w-[80px] px-4 py-1 truncate hover:bg-primary-purple/70 rounded transition-all duration-300`}>
            Features
          </Link>
          <Link href='/public/pricing' className={`flex items-center justify-center bg-transparent text-white cursor-pointer min-w-[80px] px-4 py-1 truncate hover:bg-primary-purple/70 rounded transition-all duration-300`}>
            Pricing
          </Link>
          <Link href='/contactUs' className={`flex items-center justify-center bg-transparent text-white cursor-pointer min-w-[80px] px-4 py-1 truncate hover:bg-primary-purple/70 rounded transition-all duration-300`}>
            Contact Us
          </Link>
          <Link
            href={'/login'}
            className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-4 truncate`}>
            Sign in
          </Link>
        </div>
        {/* <div className='sm:hidden items-center sm:gap-4'>
          <Link
            href={'/login'}
            className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-4 truncate`}>
            Sign in
          </Link>
        </div> */}
      </div>
    </>
  )
}

export default Header
