import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import FeaturesPageHome from '@/components/features/FeaturesPageHome'
import Planning from '@/components/features/Planning'
import Types from '@/components/features/Types'
import Step4 from '@/components/features/Step4'
import AboveFooter from '@/components/common/AboveFooter'
import Optimization from '@/components/features/Optimization'

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
      <Planning />
      <Types />
      <Optimization />
      <Step4 />
      <AboveFooter />
    </DefaultLayout>
  )
}

export default FeaturesPage
