import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import { privacy } from '@/data/privacy'
import { terms } from '@/data/terms'
import Header from '@/components/common/Header'
import Image from 'next/image'


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
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <div className="desktop:w-[1240px] relative android:mx-[32px] android:my-[32px] ipad:mx-[60px] desktop:mx-auto ipad:my-[60px]">
          <Image
            width={100}
            height={100}
            className='android:hidden ipad:block absolute top-[-20px] left-[-50px] android:w-[60px] ipad:w-[100px] h-auto z-10'
            title='Home'
            src={'/images/bg-elements/headline-circles.svg'} alt='logo'
          />
          <div className="z-20 relative text-white font-poppins font-bold android:text-center ipad:text-left android:text-[34px] ipadmini:text-[44px] ipad:text-[54px] desktop:text-[64px]">
            Privacy & Terms
          </div>
          <div className="z-20 relative text-[#D0D0D0] font-open-sans font-regular android:text-center ipad:text-left android:text-[12px] ipadmini:text-[16px] ipad:text-[20px] desktop:text-[24px]">
            Last updated: April 2023
          </div>
        </div>
      </div>

      <div className="desktop:w-[1240px] flex flex-col android:mx-[32px] android:mb-[32px] ipad:mx-[100px] desktop:mx-auto ipad:mb-[80px] android:gap-[16px] ipad:gap-[32px]">
        <div className="text-center font-poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
          <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
            Privacy Policy
          </div>
        </div>
        {privacy.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
              {item.title}
            </div>
            <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      <div className="desktop:w-[1240px] flex flex-col android:m-[32px] android:mb-[32px] ipad:mx-[100px] desktop:mx-auto ipad:mb-[80px] android:gap-[16px] ipad:gap-[32px]">
        <div className="text-center font-poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
          <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
            Terms of Services
          </div>
        </div>
        {terms.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
              {item.title}
            </div>
            <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout >
  )
}

export default PrivacyPolicyPage