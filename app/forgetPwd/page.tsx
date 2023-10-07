import ResetPasswordForm from '@/app/forgetPwd/ResetPasswordForm'
import Landing from '@/components/Landing'
import ReactGATag from '@/components/ReactGATag'

export const metadata = {
  title: 'Reset Password - AdsGency AI',
}

const ForgetPswPage = () => {
  return (
    <div className='flex flex-col ipad:flex-row w-full h-screen bg-[#121212]'>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/forgetPwd",
          title: metadata.title
        }}
      />
      <Landing />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div
          className='max-sm:w-full p-6 sm:px-16 sm:py-12 rounded-lg'
          style={{
            boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.46)'
          }}
        >
          <h1 className='font-bold text-3xl text-white text-center'>Reset Password</h1>
          <p className='sm:max-w-[400px] text-sm text-[18px] text-center text-white mt-[10px]'>
            {`Enter your email address below and we'll send you a verification code to reset your password.`}
          </p>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default ForgetPswPage
