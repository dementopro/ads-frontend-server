'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, redirect } from 'next/navigation';
import { FormikHelpers, useFormik } from 'formik';
import { message } from 'antd';
import loadingIcon from '@iconify/icons-eos-icons/loading';
import eyeIcon from '@iconify/icons-mdi/eye';
import eyeOff from '@iconify/icons-mdi/eye-off';
import { Icon } from '@iconify/react';
import styles from './login.module.css'
import { type LoginForm } from '@/types/auth';
import { onLogin } from '@/lib/auth';
import { loginValidate } from '@/lib/validate';
import axios from '@/lib/axios';
import { useAccountContext, type AccountInterface } from '@/context/account';


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

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [showPwd, setShowPwd] = useState(false);
  const { account, setAccount } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (account) {
      setIsLoading(true);
      router.push('/home');
    } else {
      setIsLoading(false);
    }
  }, [account]);

  async function onSubmit(values: LoginForm, actions: FormikHelpers<LoginForm>) {
    actions.setSubmitting(false);
    try {
      setIsLoading(true);

      const { data } = await axios({
        url: "/fapi/login_api",
        method: 'POST',
        data: {
          email: values.email,
          password: values.password,
        }
      });
      if (data.status) {
        messageApi.success('Login successful!');
        onLogin(data.token);
        router.push(data.redirect);
        setAccount({ email: values.email });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      messageApi.error((err as Error).message);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {contextHolder}
      <form className='flex flex-col gap-6 mt-8' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='mb-2 text-base text-primary-gray' htmlFor="email">Email</label>
          <input
            type="email" placeholder='Enter your email' id="email" className={`${styles['login-input']} ${formik.errors.email && formik.touched.email ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('email')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='mb-2 text-base text-primary-gray' htmlFor="password">Password</label>
          <div className='relative'>
            <input
              type={showPwd ? 'text' : 'password'} placeholder='Enter your password' id="password" className={`${styles['login-input']} ${formik.errors.password && formik.touched.password ? '!border-rose-600' : ''}`}
              {...formik.getFieldProps('password')}
            />
            <div className='absolute top-1/2 translate-y-[-50%] right-6 text-primary-gray'>
              <Icon width={22} onClick={() => setShowPwd(!showPwd)} icon={!showPwd ? eyeIcon : eyeOff} className='cursor-pointer hover:opacity-80' />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <input
              type="checkbox" id="remember"
              {...formik.getFieldProps('remember')}
            />
            <label className='ml-2 text-xs text-white cursor-pointer select-none' htmlFor="remember">Remember me</label>
          </div>
          <Link target="_blank"  className='text-[#7366ff] text-xs font-semibold' href={'/forgetPwd'}>Forgot Password?</Link>
        </div>
        <button type="submit" disabled={isLoading} className={`${styles['login-btn']}`}>
          {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>Sign in</span>
        </button>
      </form>
      <div className='flex flex-col items-center justify-center gap-4 mt-12 text-sm text-primary-gray'>
        <p>Dont&apos;t have account? <Link target="_self"  className='text-[#7366ff] font-semibold' href={'/register'} >Sign up 💜</Link></p>
      </div>
    </>
  )
}

export default LoginForm
