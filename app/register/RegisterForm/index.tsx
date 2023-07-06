'use client'
import React from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { FormikHelpers, useFormik } from 'formik'
import { RegisterForm } from '@/types/auth'
import { registerValidate } from '@/lib/validate'
import { useRouter } from 'next/navigation'

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

  async function onSubmit(values: RegisterForm, actions: FormikHelpers<RegisterForm>) {
    actions.setSubmitting(false);
    console.log('values', values)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (res.ok) {
        // redirect to login
        router.push('/login')
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }

  async function onSendCode() {
    try {
      const { email } = formik.values
      if (!email) return
      const res = await fetch('/api/auth/sendVerificationEmail', {
        method: 'POST',
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        console.log('success: ', data)
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }


  return (
    <>
      <form className='flex flex-col gap-4 mt-8' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="username">Your Name</label>
          <input type="text" placeholder='Enter your name' id="username" className={styles['register-input']} {...formik.getFieldProps('username')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="email">Email Address</label>
          <input type="email" placeholder='Enter your email' id="email" className={styles['register-input']} {...formik.getFieldProps('email')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your password' id="password" className={styles['register-input']} {...formik.getFieldProps('password')} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="code">Verification Code</label>
          <div className='flex items-center relative'>
            <input type="text" placeholder='Verification Code' id="code" className={`${styles['register-input']} flex-1 w-auto`} {...formik.getFieldProps('verification_code')} />
            <button onClick={onSendCode} className={styles['send-btn']}>Get Code</button>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="rcode">Referral Code</label>
          <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} {...formik.getFieldProps('referral_code')} />
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
    </>
  )
}

export default RegisterForm
