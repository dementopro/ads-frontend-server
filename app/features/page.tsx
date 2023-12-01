import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import FeaturesPageHome from '@/components/features/FeaturesPageHome'
import Step1 from '@/components/features/Step1'
import Step2 from '@/components/features/Step2'
import Step3 from '@/components/features/Step3'
import Step4 from '@/components/features/Step4'
import Step5 from '@/components/features/Step5'
import AboveFooter from '@/components/common/AboveFooter'

export const metadata = {
  title: 'Features - AdsGency AI',
}

const FeaturesPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/features",
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-pattern bg-cover">
        <FeaturesPageHome />
      </div>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <AboveFooter />
    </DefaultLayout>
  )
}

export default FeaturesPage
