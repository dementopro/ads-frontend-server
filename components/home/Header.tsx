'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'


const Header = () => {

  const router = useRouter()

  function toHome() {
    router.push('/')
  }

  function toContactUs() {
    router.push('/contactUs')
  }

  function requestDemo() {
    router.push('/requestDemo')
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
        <div className='flex items-center sm:gap-4'>
          <button
            onClick={requestDemo}
            className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-4 truncate`}>
            Request Demo
          </button>
          <button
            onClick={toContactUs}
            className='flex items-center justify-center h-[44px] border-2 rounded-sm bg-transparent text-primary-purple border border-primary-purple cursor-pointer hover:opacity-80 px-4 truncate max-sm:hidden'>
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
