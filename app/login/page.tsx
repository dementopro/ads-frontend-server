import LoginFrom from '@/app/login/LoginFrom'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Login - AdsGency AI',
}

const LoginPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen'>
      <div className='w-full h-full max-lg:hidden lg:w-1/2 lg:max-w-[600px] bg-white px-16 py-20 relative'>
        <Image alt='landing' src={'/images/login/landing.png'} fill />
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <Image width={100} height={100} src={'/images/login/logo.png'} alt='logo' />
        <LoginFrom />
      </div>
    </div>
  )
}

export default LoginPage
