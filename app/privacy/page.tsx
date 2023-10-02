import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import styles from './privacy.module.css'

// Metadata for the page
export const metadata = {
  title: 'Privacy Policy - AdsGency AI',
}

// Define the PrivacyPolicyPage component
const PrivacyPolicyPage = () => {
  return (
    <DefaultLayout>
      {/* Google Analytics tracking tag for the page */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/privacy",
          title: metadata.title
        }}
      />
      {/* Container for the page content */}
      <div className={`w-full bg-[#1B1C21] flex flex-col items-center justify-center ${styles['home-bg']} pt-8 pb-12`}>
        <section className='flex flex-col max-w-[1000px] mx-auto sm:px-8 my-8 bg-black/80'>
          {/* Page title */}
          <h1 className='text-center text-4xl sm:text-4xl font-bold'>
            AdsGency AI
          </h1>
          <div className='flex flex-col gap-4 mt-6 max-sm:w-[90%] mx-auto'>
            {/* Privacy Policy section */}
            <h1 className='text-center text-3xl font-bold pb-3 border-b border-primary-gray/50 px-4'>
              Privacy Policy
            </h1>
            <h2 className='text-xl font-semibold my-2'>Introduction</h2>
            {/* Privacy Policy content */}
            <p className='font-mono text-white/70'>
              {/* Privacy Policy content here */}
            </p>

            {/* Additional sections and content */}
            
            {/* Terms of Service section */}
            <h1 className='text-center text-3xl font-bold mt-4 pb-3 border-b border-primary-gray/50 px-4'>
              Terms of Service
            </h1>
            <h2 className='text-xl font-semibold my-2'>Acceptance of Terms</h2>
            {/* Terms of Service content */}
            <p className='font-mono text-white/70'>
              {/* Terms of Service content here */}
            </p>

            {/* Additional sections and content */}
            
            {/* Governing Law section */}
            <h2 className='text-xl font-semibold my-2'>Governing Law</h2>
            {/* Governing Law content */}
            <p className='font-mono text-white/70'>
              {/* Governing Law content here */}
            </p>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage