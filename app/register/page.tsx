import RegisterForm from '@/app/register/RegisterForm'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'
import React from 'react'

export const metadata = {
  title: 'Register - AdsGency AI',
}

const RegisterPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/register",
        title: metadata.title
      }} />
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center max-sm:px-4'>
        <h1 className='font-bold text-2xl sm:text-3xl text-center text-white'>Welcome to Adsgency AI</h1>
        <p className='text-sm sm:text-[18px] text-center text-white mt-[10px]'>Like Ad management, this will be quick ⚡</p>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
