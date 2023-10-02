'use client'
import { SUCCESS_CODE } from '@/data/constant';
import { resetPasswordValidate } from '@/lib/validate';
import { ResetPasswordForm } from '@/types/auth';
import { Icon } from '@iconify/react';
import { message } from 'antd';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react'
import loadingIcon from '@iconify/icons-eos-icons/loading';
import styles from './resetPassword.module.css'

const ResetPasswordForm = () => {

  const formik = useFormik<ResetPasswordForm>({
    initialValues: {
      email: '',
      password: '',
      re_password: '',
      verification_code: '',
    },
    onSubmit,
    validate: resetPasswordValidate,
  });
  const [isLoading, setIsLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [isSending, setIsSending] = useState(false)

  async function onSubmit(values: ResetPasswordForm) {
    const errors = Object.values(formik.errors)
    if (errors.length > 0) {
      messageApi.error(errors[0])
      return
    }
    try {
      setIsLoading(true)
      const response = await fetch('/fapi/reset_pwd_api', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.ok) {
        const data: IResponse = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Reset password success');
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        messageApi.error(response.statusText)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function onSendCode() {
    const { email } = formik.values
    if (!email) {
      messageApi.error('Please enter your email')
      return
    }
    try {
      setIsSending(true)
      messageApi.loading('Sending verification code...')
      const response = await fetch('/fapi/send_verification_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}`,
      })
      if (response.ok) {
        const data = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Send verification code success');
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        messageApi.error(response.statusText)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      // TODO: fix keep disabled when refresh page
      setTimeout(() => {
        setIsSending(false)
      }, 30 * 1000);
    }
  }


  return (
    <>
      {contextHolder}
      <form className='flex flex-col gap-5 mt-4 mx-auto max-w-[370px]' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            type="email" placeholder='Enter your email' id="email" className={`${styles['reset-input']} ${formik.errors.email && formik.touched.email ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('email')}
          />
        </div>
        <div className='flex flex-col gap-1 relative'>
          <label className='text-primary-gray text-sm' htmlFor="code">Verification Code</label>

          <input type="text" placeholder='Verification Code' id="code" className={`${styles['reset-input']} ${formik.errors.verification_code && formik.touched.verification_code ? '!border-rose-600' : ''} flex-1 w-auto`} {...formik.getFieldProps('verification_code')} />
          {
            !isSending ?
              <button type='button' onClick={onSendCode} className={styles['send-btn']}>Get Code</button>
              :
              <button disabled className={`${styles['send-btn']} opacity-80`}>Sent</button>
          }
        </div>
        <div className='flex flex-col gap-1'>
          <label className={styles.label} htmlFor="password">
            New Password
          </label>
          <input
            type='password' autoComplete='false' placeholder='Enter your new password' id="password" className={`${styles['reset-input']} ${formik.errors.password && formik.touched.password ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('password')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className={styles.label} htmlFor="re_password">
            Confirm Password
          </label>
          <input
            type='password' autoComplete='false' placeholder='New password again' id="re_password" className={`${styles['reset-input']} ${formik.errors.re_password && formik.touched.re_password ? '!border-rose-600' : ''}`}
            {...formik.getFieldProps('re_password')}
          />
        </div>
        <button
          onClick={() => onSubmit(formik.values)}
          type="button" disabled={isLoading} className={`${styles['reset-btn']}`}>
          {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </span>
        </button>
      </form>
      <div className='mt-6 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link></p>
      </div>
    </>
  )
}

export default ResetPasswordForm
