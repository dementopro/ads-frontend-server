'use client'
import React, { useRef, useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { FormikHelpers, useFormik } from 'formik'
import { RegisterForm } from '@/types/auth'
import { registerValidate } from '@/lib/validate'
import { useRouter } from 'next/navigation'
import { message } from 'antd'
import { SUCCESS_CODE } from '@/data/constant'
import { Icon } from '@iconify/react'
import loadingIcon from '@iconify/icons-eos-icons/loading';

const RegisterForm = () => {
  const router = useRouter()
  const formik = useFormik<RegisterForm>({
    initialValues: {
      email: '',
      password: '',
      username: '',
      verification_code: '',
      referral_code: '',
    },
    onSubmit,
    validate: registerValidate,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const agreeRef = useRef<HTMLInputElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSignUpLoading, setIsSignUpLoading] = useState(false)

  async function onSubmit(values: RegisterForm, actions: FormikHelpers<RegisterForm>) {
    actions.setSubmitting(false);
    if (!agreeRef.current?.checked) {
      messageApi.error('You need to agree with privacy policy first')
      return
    }
    try {
      messageApi.loading('Registering...')
      setIsSignUpLoading(true)
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Register success');
          setTimeout(() => {
            // redirect to login
            router.push('/login')
          }, 500);
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsSignUpLoading(false)
    }
  }

  async function onSendCode() {
    try {
      const { email } = formik.values
      if (!email) {
        messageApi.error('Please enter your email')
        return
      }
      setIsSending(true)
      // TODO: fix keep disabled when refresh page
      setTimeout(() => {
        setIsSending(false)
      }, 10000);
      messageApi.loading('Sending verification code...')
      const res = await fetch('/api/auth/sendVerificationEmail', {
        method: 'POST',
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Send verification code success');
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }


  return (
    <>
      {contextHolder}
      <form className='flex flex-col gap-4 mt-8' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="username">Your Name</label>
          <input type="text" placeholder='Enter your name' id="username" className={`${styles['register-input']} ${formik.errors.username && formik.touched.username ? '!border-rose-600' : ''}`} {...formik.getFieldProps('username')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="email">Email Address</label>
          <input type="email" placeholder='Enter your email' id="email" className={`${styles['register-input']} ${formik.errors.email && formik.touched.email ? '!border-rose-600' : ''}`} {...formik.getFieldProps('email')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={`${styles['register-input']} ${formik.errors.password && formik.touched.password ? '!border-rose-600' : ''}`} {...formik.getFieldProps('password')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="code">Verification Code</label>
          <div className='flex items-center relative'>
            <input type="text" placeholder='Verification Code' id="code" className={`${styles['register-input']} ${formik.errors.verification_code && formik.touched.verification_code ? '!border-rose-600' : ''} flex-1 w-auto`} {...formik.getFieldProps('verification_code')} />
            {
              !isSending ?
                <button type='button' onClick={onSendCode} className={styles['send-btn']}>Get Code</button>
                :
                <button disabled className={`${styles['send-btn']} opacity-80`}>Sent</button>
            }
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="rcode">Referral Code</label>
          <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} {...formik.getFieldProps('referral_code')} />
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id="agree" ref={agreeRef} />
          <div className='flex items-center text-sm'>
            <label className='text-primary-gray text-sm ml-2 select-none cursor-pointer' htmlFor="agree">Agree with</label>
            <Link href={'/privacy'} className='text-[#7366ff] ml-2'>Privacy Policy</Link>
          </div>
        </div>
        <button type="submit" disabled={isSignUpLoading} className={styles['register-btn']}>
          {isSignUpLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>Sign in</span>
        </button>
      </form>
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>
          Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link>
        </p>
      </div>
    </>
  )
}

export default RegisterForm
