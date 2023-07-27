import LoginFrom from '@/app/login/LoginFrom'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'
import React from 'react'

export const metadata = {
  title: 'Login - AdsGency AI',
}


const LoginPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/login",
          title: metadata.title
        }}
      />
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div
          className='px-16 p-12'
          style={{
            boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.46)'
          }}
        >
          <h1 className='font-bold text-3xl text-white mt-9'>Hey, hello！👋</h1>
          <p className='text-[18px] text-white mt-[10px]'>Your marketing just got an AI upgrade.</p>
          <LoginFrom />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
