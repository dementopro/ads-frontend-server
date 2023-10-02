// Import necessary modules and components
import { WithContext } from '@/app/socialInsights/WithContext'
import AdminLayout from '@/layout/admin'
import React from 'react'

// Define metadata for the page
export const metadata = {
  title: 'Social Insights - AdsGency AI', // Page title
}

// Define the SocialInsightsPage component
const SocialInsightsPage = () => {
  return (
    // Render the SocialInsightsPage within an AdminLayout
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Social Insights
        </h1>
        {/* Render the WithContext component, which likely contains the main content */}
        <WithContext />
      </section>
    </AdminLayout>
  )
}

export default SocialInsightsPage