import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import styles from './features.module.css'
import FeatureOne from '@/app/features/FeatureOne'
import { features } from '@/data/features'
import Link from 'next/link'
import TopContent from '@/app/features/TopContent'

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
      <section className={`w-full min-h-[calc(100vh-64px)] flex flex-col items-center pb-12`}>
        <TopContent />
        <div className='w-full flex flex-col gap-16 py-8' id='features'>
          {
            features.map((feature, index) => (
              <FeatureOne key={index} isReverse={index % 2 === 0} feature={feature} />
            ))
          }
        </div>
        <p className='mt-12 font-thin text-center px-4 text-white italic'>
          Unlock the full potential of your advertising efforts with AdsGency AI! 🎊
        </p>
        <div className='flex items-center mt-8'>
          <Link
            href='/requestDemo'
            className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-8 truncate`}>
            Request Demo
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default FeaturesPage
