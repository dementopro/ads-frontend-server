'use client'
import { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import { FormikHelpers, useFormik } from 'formik';
import { LoginForm } from '@/types/auth';
import { loginValidate } from '@/lib/validate';
import loadingIcon from '@iconify/icons-eos-icons/loading';
import eyeIcon from '@iconify/icons-mdi/eye';
import eyeOff from '@iconify/icons-mdi/eye-off';
import { Icon } from '@iconify/react';
import { message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';

const LoginForm = () => {

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
  const [showPwd, setShowPwd] = useState(false)

  async function onSubmit(values: LoginForm, actions: FormikHelpers<LoginForm>) {
    actions.setSubmitting(false);
    try {
      setIsLoading(true)
      // TODO: change to use application/json
      const formData = new FormData()
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value)
      }
      const response = await fetch('/fapi/login_api', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        const data = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Login success');
          // redirect to home
          // NOTE: need to fresh the page to get the new cookie
          window.location.href = '/home'
        }
        else if (data.status === 0) {
          messageApi.success('Login success');
          window.location.href = '/auth/payment'
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        messageApi.error(response.statusText || 'Something went wrong');
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
      <form className='flex flex-col gap-6 mt-8' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="email">Email</label>
          <input
            type="email" placeholder='Enter your email' id="email" className={`${styles['login-input']} ${formik.errors.email && formik.touched.email ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('email')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="password">Password</label>
          <div className='relative'>
            <input
              type={showPwd ? 'text' : 'password'} placeholder='Enter your password' id="password" className={`${styles['login-input']} ${formik.errors.password && formik.touched.password ? '!border-rose-600' : ''}`}
              {...formik.getFieldProps('password')}
            />
            <div className='absolute top-1/2 translate-y-[-50%] right-6 text-primary-gray'>
              <Icon width={22} onClick={() => setShowPwd(!showPwd)} icon={!showPwd ? eyeIcon : eyeOff} className='hover:opacity-80 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <input
              type="checkbox" id="remember"
              {...formik.getFieldProps('remember')}
            />
            <label className='text-white text-xs ml-2 select-none cursor-pointer' htmlFor="remember">Remember me</label>
          </div>
          <Link className='text-[#7366ff] text-xs font-semibold' href={'/forgetPwd'}>Forgot Password?</Link>
        </div>
        <button type="submit" disabled={isLoading} className={`${styles['login-btn']}`}>
          {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>Sign in</span>
        </button>
      </form>
      <div className='mt-12 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>Dont&apos;t have account? <Link className='text-[#7366ff] font-semibold' href={'/register'} >Sign up 💜</Link></p>
      </div>
    </>
  )
}

export default LoginForm
