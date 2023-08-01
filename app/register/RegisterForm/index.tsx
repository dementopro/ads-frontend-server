'use client'
import React, { ChangeEvent, useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { FormikHelpers, useFormik } from 'formik'
import { PaymentForm, RegisterForm } from '@/types/auth'
import { paymentValidate, registerValidate } from '@/lib/validate'
import { useRouter } from 'next/navigation'
import { DatePicker, Modal, message } from 'antd'
import { SUCCESS_CODE } from '@/data/constant'
import { Icon } from '@iconify/react'
import loadingIcon from '@iconify/icons-eos-icons/loading';
import leftIcon from '@iconify/icons-mdi/arrow-left';

import ReactFlagsSelect from "react-flags-select";
import CCInput from '@/components/CCInput'
import PrivacyPolicy from '@/components/PrivacyPolicy'

const RegisterForm = () => {
  const router = useRouter()
  const formikForRegister = useFormik<RegisterForm>({
    initialValues: {
      email: '',
      password: '',
      username: '',
      verification_code: '',
      referral_code: '',
    },
    onSubmit: onSubmitRegister,
    validate: registerValidate,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [isSending, setIsSending] = useState(false)
  const [isSignUpLoading, setIsSignUpLoading] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [cardNumber, setCardNumber] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const formikForPayment = useFormik<PaymentForm>({
    initialValues: {
      card_number: '',
      card_holder: '',
      expiration: '',
      cvc: '',
      country: 'US',
    },
    onSubmit: onSubmitPayment,
    validate: paymentValidate,
  })


  async function onSubmitRegister(values: RegisterForm, actions: FormikHelpers<RegisterForm>) {
    actions.setSubmitting(false);
    if (!isAgree) {
      messageApi.error('You need to agree with privacy policy first')
      return
    }
    setStep(2)
  }

  async function onSubmitPayment(values: PaymentForm, actions: FormikHelpers<PaymentForm>) {
    actions.setSubmitting(false);
    onRegister()
  }

  async function onRegister() {
    try {
      setIsSignUpLoading(true)
      const form = {
        ...formikForRegister.values,
        ...formikForPayment.values,
        year: +formikForPayment.values.expiration.slice(0, 4),
        month: +formikForPayment.values.expiration.slice(5, 7),
      }
      const response = await fetch('/fapi/signup_api', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if (response.ok) {
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

  const handleChangeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 检查输入是否为整数
    if (!Number.isInteger(Number(value))) {
      return;
    }
    // 检查输入的长度是否为4
    if (value.length > 4) {
      return;
    }
    // 更新输入的值
    formikForPayment.setFieldValue('cvc', value);
  };

  async function onSendCode() {
    try {
      const { email } = formikForRegister.values
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
      const res = await fetch('/fapi/send_verification_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}`,
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

  function showPrivacyPolicy() {
    Modal.info({
      title: '',
      icon: null,
      centered: true,
      width: '75%',
      style: {
        backgroundColor: 'black',
      },
      footer: null,
      closable: true,
      maskClosable: true,
      rootClassName: 'bg-black',
      content: <PrivacyPolicy />,
    });
  }


  function onChangeExpiration(date: any, dateString: string) {
    formikForPayment.setFieldValue('expiration', dateString);
  }


  return (
    <>
      {contextHolder}
      {
        step === 1 &&
        <form className='flex flex-col gap-4 max-sm:w-full max-sm:px-4 mt-8' onSubmit={formikForRegister.handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="username">Your Name</label>
            <input type="text" placeholder='Enter your name' id="username" className={`${styles['register-input']} ${formikForRegister.errors.username && formikForRegister.touched.username ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('username')} />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="email">Email Address</label>
            <input type="email" placeholder='Enter your email' id="email" className={`${styles['register-input']} ${formikForRegister.errors.email && formikForRegister.touched.email ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('email')} />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' id="password" className={`${styles['register-input']} ${formikForRegister.errors.password && formikForRegister.touched.password ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('password')} />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="code">Verification Code</label>
            <div className='flex items-center relative'>
              <input type="text" placeholder='Verification Code' id="code" className={`${styles['register-input']} ${formikForRegister.errors.verification_code && formikForRegister.touched.verification_code ? '!border-rose-600' : ''} flex-1 w-auto`} {...formikForRegister.getFieldProps('verification_code')} />
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
            <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} {...formikForRegister.getFieldProps('referral_code')} />
          </div>
          <div className='flex items-center'>
            <input type="checkbox" id="agree" checked={isAgree} onChange={() => setIsAgree(!isAgree)} />
            <div className='flex items-center text-sm'>
              <label className='text-primary-gray text-sm ml-2 select-none cursor-pointer' htmlFor="agree">Agree with</label>
              <button
                onClick={showPrivacyPolicy}
                type='button'
                className='text-[#7366ff] ml-2'
              >
                Privacy Policy
              </button>
            </div>
          </div>
          <button type="submit" disabled={isSignUpLoading} className={styles['register-btn']}>
            {isSignUpLoading && <Icon icon={loadingIcon} className='mr-2' />}
            <span>Sign up</span>
          </button>
        </form>
      }
      {
        step === 2 &&
        <>
          <h1 className='text-xl text-center text-white mt-6 mb-3'>Payment Details</h1>
          <form className='flex flex-col gap-4 max-sm:w-full max-sm:px-4' onSubmit={formikForPayment.handleSubmit}>
            <div className='flex flex-col gap-1'>
              <label className='text-primary-gray text-sm' htmlFor="card_holder">
                Card Holder Full Name
              </label>
              <input
                type="text"
                placeholder='Card Holder Full Name'
                id="card_holder"
                className={`${styles['register-input']} ${formikForPayment.errors.card_holder && formikForPayment.touched.card_holder ? '!border-rose-600' : ''}`} {...formikForPayment.getFieldProps('card_holder')}
              />
            </div>
            {/* card number */}
            <div className='flex flex-col gap-1'>
              <label className='text-primary-gray text-sm' htmlFor="card_number">
                Card number
              </label>
              <CCInput value={cardNumber} setValue={(value) => {
                setCardNumber(value);
                formikForPayment.setFieldValue('card_number', value.replaceAll(' ', ''));
              }} isError={!!formikForPayment.errors.card_number} />
            </div>
            <div className='flex gap-1 justify-between'>
              <div className='flex flex-col gap-1 max-sm:w-1/2'>
                <label className='text-primary-gray text-sm' htmlFor="expiration">
                  Expiration
                </label>
                <DatePicker
                  className={`${styles['register-input']} ${styles.half} ${styles['date-input']} !sm:w-[180px] !max-sm:w-full ${formikForPayment.errors.expiration ? '!border-rose-600' : ''}`}
                  allowClear={false}
                  onChange={onChangeExpiration}
                  picker="month" />
              </div>
              <div className='flex flex-col gap-1 max-sm:w-1/2'>
                <label className='text-primary-gray text-sm' htmlFor="cvc">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder='CVC'
                  id="cvc"
                  value={formikForPayment.values.cvc}
                  onChange={handleChangeCVC}
                  className={`${styles['register-input']} ${styles.half} !max-sm:w-full ${formikForPayment.errors.cvc && formikForPayment.touched.cvc ? '!border-rose-600' : ''}`}
                />
              </div>
            </div>
            {/* country */}
            <div className='flex flex-col gap-1'>
              <label className='text-primary-gray text-sm' htmlFor="country">Country</label>
              <ReactFlagsSelect
                className={`${styles.flag} ${formikForPayment.errors.country && formikForPayment.touched.country ? '!border-rose-600' : ''}`}
                selected={formikForPayment.values.country}
                onSelect={(code) => formikForPayment.setFieldValue('country', code)}
                placeholder="Select Country"
                searchable={false}
                selectButtonClassName={styles["menu-flags-button"]}
                countries={["US"]}
              />
            </div>
            <div className='flex items-center justify-between gap-2'>
              <button
                onClick={() => setStep(1)}
                type="button" disabled={isSignUpLoading} className={`${styles['register-btn']} flex-1`}>
                <Icon icon={leftIcon} className='mr-2' />
                <span>Back</span>
              </button>
              <button type="submit" disabled={isSignUpLoading} className={`${styles['register-btn']} flex-1`}>
                {isSignUpLoading && <Icon icon={loadingIcon} className='mr-2' />}
                <span>
                  {isSignUpLoading ? 'Loading...' : 'Complete'}
                </span>
              </button>
            </div>
          </form>
        </>
      }
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>
          Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link>
        </p>
      </div>
    </>
  )
}

export default RegisterForm
