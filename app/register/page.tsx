import RegisterForm from '@/app/register/RegisterForm'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'
import React from 'react'
import styles from './RegisterForm/register.module.css'

export const metadata = {
  title: 'Register - AdsGency AI',
}

const RegisterPage = () => {
  return (
    <div className='flex flex-col ipad:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/register",
        title: metadata.title
      }} />
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center max-sm:px-4'>
        <h1 className={`font-bold text-2xl sm:text-3xl text-center text-white landing-txt`}
        >
          Welcome to Adsgency AI
        </h1>
        {/* <p className='text-sm sm:text-[18px] text-center text-white mt-[10px]'>
          {`We won't charge you, this is for verification purpose only`}
        </p> */}
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
