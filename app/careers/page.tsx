import DefaultLayout from '@/layout/default'
import React from 'react'
import Content from '@/app/careers/Content'
import ReactGATag from '@/components/ReactGATag'

export const metadata = {
  title: 'Careers - AdsGency AI',
}

const CareersPage = () => {

  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/careers",
          title: metadata.title,
        }}
      />
      <section className={`w-full min-h-[calc(100vh-64px)] flex flex-col items-center pb-12`}>
        <Content />
      </section>
    </DefaultLayout>
  )
}

export default CareersPage
