'use client'
import React from 'react'
import styles from './register.module.css'
import Link from 'next/link'

const RegisterForm = () => {

  function onRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: register logic
  }


  return (
    <div className={styles['register-warpper']}>
      <h1 className='font-bold text-2xl'>Welcome to AdsGency AI</h1>
      <p className='text-sm text-[#898989] mb-6 mt-1'>Like ad menagement, this will be quick ⚡️</p>
      <form className='flex flex-col gap-4' onSubmit={onRegister}>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="username">Your Name</label>
          <input type="text" placeholder='Enter your name' id="username" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="email">Email Address</label>
          <input type="email" placeholder='Enter your email' id="email" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="code">Verification Code</label>
          <div className='flex items-center relative'>
            <input type="text" placeholder='' id="code" className={`${styles['register-input']} flex-1 w-auto`} />
            <button className={styles['send-btn']}>Get Code</button>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="rcode">Referral Code</label>
          <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} />
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id="agree" />
          <div className='flex items-center text-sm'>
            <label className='text-[#898989] text-sm ml-2 select-none cursor-pointer' htmlFor="agree">Agree with</label>
            <Link href={'/privacy'} className='text-[#7366ff] ml-2'>Privacy Policy</Link>
          </div>
        </div>
        <button type="submit" className={styles['register-btn']}>Sign up</button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-[#898989] text-sm'>
        <p>
          Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
