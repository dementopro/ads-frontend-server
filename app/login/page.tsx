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
        <h1 className='font-bold text-3xl text-center text-white mt-9'>Welcome to Adsgency AI</h1>
        <p className='text-[18px] text-center text-white mt-[10px]'>Like Ad management, this will be quick ⚡</p>
        <LoginFrom />
      </div>
    </div>
  )
}

export default LoginPage
