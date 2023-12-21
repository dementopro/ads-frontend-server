import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import { service } from '@/data/service'
import Image from 'next/image'
import AboveFooter from '@/components/common/AboveFooter'


export const metadata = {
  title: 'Report Misuse - AdsGency AI',
}

const TermsPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/reportMisuse",
          title: metadata.title
        }}
      />
      <div className="relative ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <Image
          width={100}
          height={100}
          className='absolute android:top-[250px] ipadmini:top-[300px] ipad:top-[350px] desktop:top-[250px] h-auto z-10'
          title='Home'
          src={'/images/bg-elements/headline-circles.svg'} alt='logo'
        />
        <Image
          width={100}
          height={100}
          className='android:hidden desktop:block absolute right-[50px] top-[350px] rotate-[180deg] h-auto z-10'
          title='Home'
          src={'/images/bg-elements/headline-circles.svg'} alt='logo'
        />
        <div className="ipad:w-[900px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px] z-20">
          <div className="w-full text-white font-poppins font-medium text-center android:text-[34px] ipad:text-[43px] android:leading-[34px] desktop:leading-[43px]">
            Report a vulnerability or misuse of <span className="bg-brand-color text-transparent bg-clip-text">AdsGency AI</span>
          </div>
          <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-center android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
            {`At AdsGency AI, we take the security and proper use of our platform seriously. If you have identified a vulnerability or misuse within our system, we encourage you to report it to our team.`}
          </div>
        </div>
      </div>
      <div className="ipad:w-[900px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px]">
        <div className="w-full text-white font-poppins font-medium text-center android:text-[30px] ipad:text-[34px]">
          {`Found a vulnerability?`}
        </div>
        <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px] android:border-l-5 ipad:border-l-8 border-[#9D93FF] border-opacity-60 pl-[18px]">
          <p>
            {`If you believe you've identified a potential vulnerability in our software, we encourage you to share the details with us. Your insights are valuable in maintaining the security of our system and safeguarding the privacy of our users.`}
          </p>
          <p>
            {`Please provide comprehensive information about the vulnerability, including its type and steps to reproduce the issue. Kindly notify us at contactus@adsgency.ai`}
          </p>
        </div>
      </div>
      <div className="ipad:w-[900px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px]">
        <div className="w-full text-white font-poppins font-medium text-center android:text-[30px] ipad:text-[34px]">
          {`Witnessed misuse of AdsGency AI?`}
        </div>
        <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px] android:border-l-5 ipad:border-l-8 border-[#9D93FF] border-opacity-60 pl-[18px]">
          <p>
            {`We aim to be a guiding force in responsible AI use for marketing, sales, and various business applications. Our terms of service expressly prohibit the utilization of AdsGency AI in the creation of sexually suggestive content, hate speech, credible threats or direct attacks on individuals or groups, self-harm or excessive violence, fake or impostor profiles, content intended for electoral campaign dissemination, encouragement of violence, terrorism, or any form of serious harm, illegal activities or content promoting such actions, malicious programs or code, and unauthorized use of personal information.`}
          </p>
          <p className="android:mt-[15px] ipad:mt-[20px]">
            {`Should you come across a AdsGency AI user who is violating these terms or causing harm through AdsGency AI-generated content, kindly forward the details of the misuse, including any accompanying images or evidence, to contactus@adsgency.ai`}
          </p>
          <p className="android:mt-[15px] ipad:mt-[20px]">
            {`We geatly value your contributions, as they play a crucial role in maintaining the safety and security of our community.`}
          </p>
        </div>
      </div>
      <AboveFooter />
    </DefaultLayout>
  )
}

export default TermsPage;
