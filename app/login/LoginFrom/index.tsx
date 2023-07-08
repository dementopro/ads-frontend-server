'use client'
import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import { FormikHelpers, useFormik } from 'formik';
import { LoginForm } from '@/types/auth';
import { loginValidate } from '@/lib/validate';
import { useRouter } from 'next/navigation';
import loadingIcon from '@iconify/icons-eos-icons/loading';
import { Icon } from '@iconify/react';
import { message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';

const LoginForm = () => {

  const router = useRouter()
  const formik = useFormik<LoginForm>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit,
    validate: loginValidate,
  });

  const [isLoading, setIsLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  async function onSubmit(values: LoginForm, actions: FormikHelpers<LoginForm>) {
    actions.setSubmitting(false);
    try {
      setIsLoading(true)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Login success');
          // redirect to home
          // NOTE: need to fresh the page to get the new cookie
          setTimeout(() => {
            window.location.href = '/home'
          }, 1000)
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {contextHolder}
      <form className='flex flex-col gap-4 mt-8' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="email">Email</label>
          <input
            type="email" placeholder='Enter your email' id="email" className={`${styles['login-input']} ${formik.errors.email && formik.touched.email ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('email')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="password">Password</label>
          <input
            type="password" placeholder='Enter your password' id="password" className={`${styles['login-input']} ${formik.errors.password && formik.touched.password ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('password')}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <input
              type="checkbox" id="remember"
              {...formik.getFieldProps('remember')}
            />
            <label className='text-white text-base ml-2 select-none cursor-pointer' htmlFor="remember">Remember me</label>
          </div>
          <Link className='text-[#7366ff] font-base' href={'/forgetPwd'}>Forgot Password?</Link>
        </div>
        <button type="submit" disabled={isLoading} className={`${styles['login-btn']}`}>
          {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>Sign up</span>
        </button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>Dont&apos;t have account? <Link className='text-[#7366ff] font-semibold' href={'/register'} >Sign up 💜</Link></p>
      </div>
    </>
  )
}

export default LoginForm
