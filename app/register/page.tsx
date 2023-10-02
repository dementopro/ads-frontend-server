// Import necessary dependencies and components
import RegisterForm from '@/app/register/RegisterForm'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'
import React from 'react'
import styles from './RegisterForm/register.module.css'

// Metadata for the page
export const metadata = {
  title: 'Register - AdsGency AI',
}

// Define the RegisterPage component
const RegisterPage = () => {
  return (
    // Main container for the Register page
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      {/* Add Google Analytics tracking tag */}
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/register",
        title: metadata.title
      }} />
      {/* Render the Landing component */}
      <Landing />
      {/* Register form container */}
      <div className='flex-1 flex flex-col items-center justify-center max-sm:px-4'>
        {/* Page title */}
        <h1 className={`font-bold text-2xl sm:text-3xl text-center text-white landing-txt`}
        >
          Welcome to Adsgency AI
        </h1>
        {/* Render the RegisterForm component */}
        <RegisterForm />
      </div>
    </div>
  )
}

// Export the RegisterPage component as the default export
export default RegisterPage