import PaymentForm from '@/app/auth/payment/PaymentForm'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'
import React from 'react'

export const metadata = {
  title: 'Payment Details - AdsGency AI',
  description: 'Payment Page',
}

const PaymentPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/auth/payment',
          title: metadata.title,
        }}
      />
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center max-sm:px-4'>
        <h1 className='font-bold text-2xl sm:text-4xl text-center text-white'>
          Payment Details
        </h1>
        <p className='text-sm sm:text-[18px] max-w-[300px] text-center leading-6 text-primary-gray mt-[10px]'>
          This is to verify your account, you will not be charged.
        </p>
        <PaymentForm />
      </div>
    </div>
  )
}

export default PaymentPage
