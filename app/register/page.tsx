import RegisterForm from '@/app/register/RegisterForm'
import Landing from '@/components/Landing'
import React from 'react'

export const metadata = {
  title: 'Register - AdsGency AI',
}

const RegisterPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
