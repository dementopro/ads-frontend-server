import RegisterForm from '@/app/register/RegisterForm'
import Landing from '@/components/Landing'
import React from 'react'
import ReactGA from "react-ga4"

export const metadata = {
  title: 'Register - AdsGency AI',
}
ReactGA.initialize("G-NQ34MWCQDB");
ReactGA.send({ hitType: "pageview", page: "/register", title: metadata.title });

const RegisterPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
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
