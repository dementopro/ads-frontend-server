// Import necessary components and modules
import LoginFrom from '@/app/login/LoginFrom';
import Landing from '@/components/Landing';
import ReactGATag from '@/components/ReactGATag';
import React from 'react';

// Metadata for the page
export const metadata = {
  title: 'Login - AdsGency AI',
};

// Define the LoginPage component
const LoginPage = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      {/* Google Analytics tracking */}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/login',
          title: metadata.title,
        }}
      />
      {/* Landing component */}
      <Landing />
      {/* Login form section */}
      <div className='flex-1 flex flex-col items-center justify-center'>
        {/* Styling for the login form container */}
        <div
          className='px-16 p-12'
          style={{
            boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.46)',
          }}
        >
          <h1 className='font-bold text-3xl text-white mt-9'>Hey, hello！👋</h1>
          <p className='text-[18px] text-white mt-[10px]'>
            Your marketing just got an AI upgrade.
          </p>
          {/* Render the LoginFrom component */}
          <LoginFrom />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;