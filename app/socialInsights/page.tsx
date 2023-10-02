import { WithContext } from '@/app/socialInsights/WithContext'
import AdminLayout from '@/layout/admin'
import React from 'react'

export const metadata = {
  title: 'Social Insights - AdsGency AI',
}

const SocialInsightsPage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Social Insights
        </h1>
        <WithContext />
      </section>
    </AdminLayout>
  )
}

export default SocialInsightsPage
