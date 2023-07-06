import LoginFrom from '@/app/login/LoginFrom'
import Landing from '@/components/Landing'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Login - AdsGency AI',
}

const LoginPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <Image width={84} height={78} src={'/images/login-logo.svg'} alt='logo' />
        <LoginFrom />
      </div>
    </div>
  )
}

export default LoginPage
