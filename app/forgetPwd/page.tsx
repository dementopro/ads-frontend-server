// Import necessary components and modules.
import ResetPasswordForm from '@/app/forgetPwd/ResetPasswordForm';
import Landing from '@/components/Landing';
import ReactGATag from '@/components/ReactGATag';

// Define metadata for the page.
export const metadata = {
  title: 'Reset Password - AdsGency AI', // Page title.
};

// Define the ForgetPswPage component.
const ForgetPswPage = () => {
  return (
    // Create a flex container for page layout with two sections (Landing and Password Reset).
    <div className='flex flex-col lg:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/forgetPwd",
          title: metadata.title // Set the page title for Google Analytics.
        }}
      />
      {/* Left-side section for Landing content */}
      <Landing />
      {/* Right-side section for Password Reset */}
      <div className='flex-1 flex flex-col items-center justify-center'>
        {/* Container for the password reset form */}
        <div
          className='max-sm:w-full p-6 sm:px-16 sm:py-12 rounded-lg'
          style={{
            boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.46)' // Apply a box shadow to the form container.
          }}
        >
          <h1 className='font-bold text-3xl text-white text-center'>Reset Password</h1>
          <p className='sm:max-w-[400px] text-sm text-[18px] text-center text-white mt-[10px]'>
            {`Enter your email address below and we'll send you a verification code to reset your password.`}
          </p>
          {/* Render the ResetPasswordForm component for password reset functionality. */}
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}

// Export the ForgetPswPage component as the default export.
export default ForgetPswPage;