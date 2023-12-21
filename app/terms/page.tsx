import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import { service } from '@/data/service'
import Image from 'next/image'


export const metadata = {
  title: 'Terms of Service - AdsGency AI',
}

const PrivacyPolicyPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/terms",
          title: metadata.title
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <div className="desktop:w-[1240px] relative android:m-[32px] ipad:m-[60px] desktop:mx-auto">
          <Image
            width={100}
            height={100}
            className='absolute android:top-[-10px] ipad:top-[-20px] android:left-[-30px] ipad:left-[-50px] android:w-[80px] ipad:w-[120px] desktop:w-[140px] h-auto z-10'
            title='Home'
            src={'/images/bg-elements/headline-circles.svg'} alt='logo'
          />
          <div className="z-20 relative text-white font-poppins font-bold text-left android:text-[34px] ipadmini:text-[44px] ipad:text-[54px] desktop:text-[64px] tracking-[-3px] android:leading-[43px] ipadmini:leading-[64px]">
            AdsGency AI Terms of Service
          </div>
          <div className="z-20 ipad:mt-[20px] relative text-[#D0D0D0] font-open-sans font-regular text-left android:text-[12px] ipadmini:text-[16px] ipad:text-[20px] desktop:text-[24px]">
            Last updated: December 2023
          </div>
        </div>
      </div>

      <div className="desktop:w-[1240px] flex flex-col android:mx-[32px] android:mb-[32px] ipad:mx-[100px] desktop:mx-auto ipad:mb-[80px] android:gap-[32px] ipad:gap-[60px]">
        {service.map((item, index) => (
          <div key={index} className='flex flex-col gap-[16px]'>
            <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
              {item.title}
            </div>
            {item.description && (
              <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
                {item.description}
              </div>
            )}
            {Array.isArray(item.detail) &&
              item.detail.map((detail, i) => (
                <div key={i} className="flex flex-col pl-[16px] gap-[12px]">
                  <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
                    {detail.title}
                  </div>
                  {Array.isArray(detail.description) ? (
                    <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
                      {detail.description.map((des, ind) => (
                        <div key={ind}>{des}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
                      {detail.description}
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </DefaultLayout >
  )
}

export default PrivacyPolicyPage