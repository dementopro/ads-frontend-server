import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import { PRIVACY } from '@/data/privacy'
import { TERMS } from '@/data/terms'
import Header from '@/components/home/Header'


export const metadata = {
  title: 'Privacy Policy - AdsGency AI',
}

const PrivacyPolicyPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/privacy",
          title: metadata.title
        }}
      />
      <div className="w-full h-auto relative">
        <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipad:pt-[82px] android:pb-[32px] ipad:pb-[60px] w-full relative z-10 bg-hero-pattern bg-cover">
          <Header />
          <div className="relative android:mx-[32px] android:my-[32px] ipad:mx-[60px] ipad:my-[60px]">
            <img
              className='absolute top-[-50px] left-[-50px] android:w-[80px] ipad:w-[130px] h-auto z-10'
              title='Home'
              src={'/images/bg-elements/headline-circles.png'} alt='logo'
            />
            <div className="z-20 text-white font-Poppins font-bold android:text-center ipad:text-left android:text-[34px] ipadmini:text-[44px] ipad:text-[54px] desktop:text-[64px]">
              Privacy & Terms
            </div>
            <div className="z-20 text-[#D0D0D0] font-Open+Sans font-regular android:text-center ipad:text-left android:text-[12px] ipadmini:text-[16px] ipad:text-[20px] desktop:text-[24px]">
              Last updated: April 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col android:mx-[32px] android:mb-[32px] ipad:mx-[100px] ipad:mb-[80px] android:gap-[16px] ipad:gap-[32px]">
          <div className="text-center font-Poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
            <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
              Privacy Policy
            </div>
          </div>
          {PRIVACY.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-white font-Poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
                {item.title}
              </div>
              <div className="text-[#D0D0D0] font-Open+Sans font-regular android:text-[12px] ipad:text-[16px]">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col android:m-[32px] android:mb-[32px] ipad:mx-[100px] ipad:mb-[80px] android:gap-[16px] ipad:gap-[32px]">
          <div className="text-center font-Poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
            <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
              Terms of Services
            </div>
          </div>
          {TERMS.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-white font-Poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
                {item.title}
              </div>
              <div className="text-[#D0D0D0] font-Open+Sans font-regular android:text-[12px] ipad:text-[16px]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout >
  )
}

export default PrivacyPolicyPage