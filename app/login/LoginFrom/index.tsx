'use client'
// Import necessary components and modules
import { useState } from 'react';
import styles from './login.module.css';
import Link from 'next/link';
import { FormikHelpers, useFormik } from 'formik';
import { LoginForm } from '@/types/auth';
import { loginValidate } from '@/lib/validate';
import loadingIcon from '@iconify/icons-eos-icons/loading';
import eyeIcon from '@iconify/icons-mdi/eye';
import eyeOff from '@iconify/icons-mdi/eye-off';
import { Icon } from '@iconify/react';
import { message } from 'antd';
import { NO_CREDIT_CARD, SUCCESS_CODE } from '@/data/constant';
import { onLogin } from '@/lib/auth';

// Define the LoginForm component
const LoginForm = () => {
  // Initialize Formik for login form
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

  // Function to handle form submission
  async function onSubmit(values: LoginForm, actions: FormikHelpers<LoginForm>) {
    actions.setSubmitting(false);
    try {
      setIsLoading(true);
      // Create a FormData object for form data
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      // Send a POST request to login API
      const response = await fetch('/fapi/login_api', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Login success');
          // Redirect to the home page after successful login
          // NOTE: Need to refresh the page to get the new cookie
          onLogin();
          window.location.href = '/home';
        } else if (data.status === NO_CREDIT_CARD) {
          messageApi.success('Login success');
          onLogin();
          window.location.href = '/auth/payment';
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        messageApi.error(response.statusText || 'Something went wrong');
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
      <form className='flex flex-col gap-6 mt-8' onSubmit={formik.handleSubmit}>
        {/* Email input field */}
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="email">Email</label>
          <input
            type="email"
            placeholder='Enter your email'
            id="email"
            className={`${styles['login-input']} ${
              formik.errors.email && formik.touched.email ? '!border-rose-600' : ''
            }`}
            {...formik.getFieldProps('email')}
          />
        </div>
        {/* Password input field */}
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray mb-2 text-base' htmlFor="password">Password</label>
          <div className='relative'>
            <input
              type={showPwd ? 'text' : 'password'}
              placeholder='Enter your password'
              id="password"
              className={`${styles['login-input']} ${
                formik.errors.password && formik.touched.password ? '!border-rose-600' : ''
              }`}
              {...formik.getFieldProps('password')}
            />
            <div className='absolute top-1/2 translate-y-[-50%] right-6 text-primary-gray'>
              <Icon
                width={22}
                onClick={() => setShowPwd(!showPwd)}
                icon={!showPwd ? eyeIcon : eyeOff}
                className='hover:opacity-80 cursor-pointer'
              />
            </div>
          </div>
        </div>
        {/* Remember me and Forgot Password */}
        <div className="flex items-center justify-between">
          <div className='flex items-center'>
            <input
              type="checkbox"
              id="remember"
              {...formik.getFieldProps('remember')}
            />
            <label className='text-white text-xs ml-2 select-none cursor-pointer' htmlFor="remember">
              Remember me
            </label>
          </div>
          <Link className='text-[#7366ff] text-xs font-semibold' href={'/forgetPwd'}>
            Forgot Password?
          </Link>
        </div>
        {/* Sign In Button */}
        <button type="submit" disabled={isLoading} className={`${styles['login-btn']}`}>
          {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
          <span>Sign in</span>
        </button>
      </form>
      {/* Sign-up link */}
      <div className='mt-12 flex flex-col items-center justify-center gap-4 text-primary-gray text-sm'>
        <p>
          Don&apos;t have an account?{' '}
          <Link className='text-[#7366ff] font-semibold' href={'/register'} >
            Sign up 💜
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginForm;