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
    <div>
      <h1 className='font-bold text-3xl text-center text-white'>Welcome to Adsgency AI</h1>
      <p className='text-[18px] text-center text-white mt-[10px]'>Like Ad management, this will be quick ⚡</p>
      <form className='flex flex-col gap-4 mt-8' onSubmit={onRegister}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="username">Your Name</label>
          <input type="text" placeholder='Enter your name' id="username" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="email">Email Address</label>
          <input type="email" placeholder='Enter your email' id="email" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={styles['register-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="code">Verification Code</label>
          <div className='flex items-center relative'>
            <input type="text" placeholder='Verification Code' id="code" className={`${styles['register-input']} flex-1 w-auto`} />
            <button className={styles['send-btn']}>Get Code</button>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="rcode">Referral Code</label>
          <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} />
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id="agree" />
          <div className='flex items-center text-sm'>
            <label className='text-primary-gray text-sm ml-2 select-none cursor-pointer' htmlFor="agree">Agree with</label>
            <Link href={'/privacy'} className='text-[#7366ff] ml-2'>Privacy Policy</Link>
          </div>
        </div>
        <button type="submit" className={styles['register-btn']}>Sign up</button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>
          Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
