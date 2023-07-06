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
    <div className={'mt-9'}>
      <h1 className='font-bold text-3xl text-center text-white'>Welcome to Adsgency AI</h1>
      <p className='text-[18px] text-center text-white mt-[10px]'>Like Ad management, this will be quick ⚡</p>
      <form className='flex flex-col gap-4 mt-8' onSubmit={onLogin}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' id="email" className={styles['login-input']} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={styles['login-input']} />
        </div>
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <input type="checkbox" id="remember" />
            <label className='text-white text-base ml-2 select-none cursor-pointer' htmlFor="remember">Remember me</label>
          </div>
          <Link className='text-[#7366ff] font-base' href={'/forgetPwd'}>Forgot Password?</Link>
        </div>
        <button type="submit" className={`${styles['login-btn']}`}>Sign up</button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>Dont&apos;t have account? <Link className='text-[#7366ff] font-semibold' href={'/register'} >Sign up 💜</Link></p>
      </div>
    </div>
  )
}

export default LoginForm
