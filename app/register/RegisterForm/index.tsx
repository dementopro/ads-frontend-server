'use client'
import { ChangeEvent, useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { useFormik } from 'formik'
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

// Define the RegisterForm component
const RegisterForm = () => {
  // Initialize React Router's router hook
  const router = useRouter()

  // Set up a useFormik form for user registration
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

  // Set up message and loading state
  const [messageApi, contextHolder] = message.useMessage();
  const [isSending, setIsSending] = useState(false)
  const [isSignUpLoading, setIsSignUpLoading] = useState(false)

  // Define the step state for multi-step form
  const [step, setStep] = useState<1 | 2>(1)

  // Initialize card number state
  const [cardNumber, setCardNumber] = useState('');

  // Initialize state for agreeing to the privacy policy
  const [isAgree, setIsAgree] = useState(false);

  // Set up a useFormik form for payment details
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

  // Function to handle user registration submission
  async function onSubmitRegister(values: RegisterForm) {
    // Validate form fields
    const errors = Object.values(formikForRegister.errors)
    if (errors.length > 0) {
      messageApi.error(errors[0])
      return
    }
    // Check if the user has agreed to the privacy policy
    if (!isAgree) {
      messageApi.error('You need to agree with the privacy policy first')
      return
    }
    // Call the onRegister function to complete registration
    onRegister()
  }

  // Function to handle payment details submission
  async function onSubmitPayment(values: PaymentForm) {
    // Validate form fields
    const errors = Object.values(formikForPayment.errors)
    if (errors.length > 0) {
      messageApi.error(errors[0])
      return
    }
    // Call the onRegister function to complete registration
    onRegister()
  }

  // Function to complete user registration
  async function onRegister() {
    try {
      setIsSignUpLoading(true)
      const form = {
        ...formikForRegister.values,
      }
      const response = await fetch('/fapi/signup_api', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        const data = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Register success');
          setTimeout(() => {
            // Redirect to login page after successful registration
            router.push('/login')
          }, 500);
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        messageApi.error(response.statusText || 'Something went wrong');
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsSignUpLoading(false)
    }
  }

  // Function to handle changes in the CVC input
  const handleChangeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Check if input is an integer
    if (!Number.isInteger(Number(value))) {
      return;
    }
    // Check input length
    if (value.length > 4) {
      return;
    }
    // Update the formik value for CVC
    formikForPayment.setFieldValue('cvc', value);
  };

  // Function to send a verification code via email
  async function onSendCode() {
    try {
      const { email } = formikForRegister.values
      if (!email) {
        messageApi.error('Please enter your email')
        return
      }
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
        messageApi.error(response.statusText || 'Something went wrong');
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setTimeout(() => {
        setIsSending(false)
      }, 30 * 1000);
    }
  }

  // Function to show the Privacy Policy in a modal
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

  // Function to handle expiration date change
  function onChangeExpiration(date: any, dateString: string) {
    formikForPayment.setFieldValue('expiration', dateString);
  }

  return (
    <>
      {contextHolder}
      {
        step === 1 &&
        <form className='flex flex-col gap-4 max-sm:w-full max-sm:px-4 mt-8' onSubmit={formikForRegister.handleSubmit}>
          {/* Username */}
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="username">Your Name</label>
            <input type="text" placeholder='Enter your name' id="username" className={`${styles['register-input']} ${formikForRegister.errors.username && formikForRegister.touched.username ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('username')} />
          </div>
          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="email">Email Address</label>
            <input type="email" placeholder='Enter your email' id="email" className={`${styles['register-input']} ${formikForRegister.errors.email && formikForRegister.touched.email ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('email')} />
          </div>
          {/* Password */}
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' id="password" className={`${styles['register-input']} ${formikForRegister.errors.password && formikForRegister.touched.password ? '!border-rose-600' : ''}`} {...formikForRegister.getFieldProps('password')} />
          </div>
          {/* Verification Code */}
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
          {/* Referral Code */}
          <div className='flex flex-col gap-1'>
            <label className='text-primary-gray text-sm' htmlFor="rcode">Referral Code</label>
            <input type="text" placeholder='Optional' id="rcode" className={styles['register-input']} {...formikForRegister.getFieldProps('referral_code')} />
          </div>
          {/* Privacy Policy Agreement */}
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
          {/* Register Button */}
          <button
            onClick={() => onSubmitRegister(formikForRegister.values)}
            disabled={isSignUpLoading} className={styles['register-btn']}>
            {isSignUpLoading && <Icon icon={loadingIcon} className='mr-2' />}
            <span>Sign up</span>
          </button>
        </form>
      }
      {
        step === 2 &&
        <>
          {/* Payment Details */}
          <p className='text-sm sm:text-[18px] max-w-[300px] my-4 text-center text-white'>
            {`We won't charge you, this is for verification purpose only`}
          </p>
          <form className='flex flex-col gap-4 max-sm:w-full max-sm:px-4' onSubmit={formikForPayment.handleSubmit}>
            {/* Card Holder Name */}
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
            {/* Card Number */}
            <div className='flex flex-col gap-1'>
              <label className='text-primary-gray text-sm' htmlFor="card_number">
                Card number
              </label>
              <CCInput value={cardNumber} setValue={(value) => {
                setCardNumber(value);
                formikForPayment.setFieldValue('card_number', value.replaceAll(' ', ''));
              }} isError={!!formikForPayment.errors.card_number} />
            </div>
            {/* Expiration Date and CVC */}
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
            {/* Country */}
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
            {/* Back and Complete Buttons */}
            <div className='flex items-center justify-between gap-2'>
              <button
                onClick={() => setStep(1)}
                type="button" disabled={isSignUpLoading} className={`${styles['register-btn']} flex-1`}>
                <Icon icon={leftIcon} className='mr-2' />
                <span>Back</span>
              </button>
              <button
                onClick={() => onSubmitPayment(formikForPayment.values)}
                disabled={isSignUpLoading} className={`${styles['register-btn']} flex-1`}>
                {isSignUpLoading && <Icon icon={loadingIcon} className='mr-2' />}
                <span>
                  {isSignUpLoading ? 'Loading...' : 'Complete'}
                </span>
              </button>
            </div>
          </form>
        </>
      }
      {/* Sign In Link */}
      <div className='mt-8 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>
          Already have an account? <Link className='text-[#7366ff] font-semibold' href={'/login'} >Sign in 💜</Link>
        </p>
      </div>
    </>
  )
}

// Export the RegisterForm component as the default export
export default RegisterForm