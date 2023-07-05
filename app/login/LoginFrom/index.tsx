'use client'
import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'

const LoginForm = () => {

  function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: login logic
  }

  return (
    <div className={styles['login-warpper']}>
      <h1 className='font-bold text-2xl'>Hey, hello! 👋</h1>
      <p className='text-sm text-[#898989] mb-6 mt-1'>Your marketing just got an AI upgrade.</p>
      <form className='flex flex-col gap-4' onSubmit={onLogin}>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' id="email" className={styles['login-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-800 text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={styles['login-input']} />
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id="remember" />
          <label className='text-[#898989] text-sm ml-2 select-none cursor-pointer' htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className={`${styles['login-btn']}`}>Login</button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-[#898989] text-sm'>
        <p>Dont&apos;t have account? <Link className='text-[#7366ff] font-semibold' href={'/register'} >Sign up 💜</Link></p>
        <p>Forget passowrd? <Link className='text-[#7366ff] font-semibold' href={'/forgetPwd'} >Reset Password 💜</Link></p>
      </div>
    </div>
  )
}

export default LoginForm
