// Import necessary components and libraries
import Crop from '@/app/generate/remixTool/Crop'
import ReactGATag from '@/components/ReactGATag'
import AdminLayout from '@/layout/admin'
import React from 'react'

// Metadata for the page
export const metadata = {
  title: 'Remix Tool - AdsGency AI',
}

// Page component for the Remix Tool page
const RemixToolPage = () => {

  return (
    // Use the AdminLayout component as the page layout
    <AdminLayout>
      {/* Add Google Analytics tracking for the page */}
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/generate/remixTool",
        title: metadata.title
      }} />
      {/* Section containing the page content */}
      <section className='flex flex-col justify-center'>
        {/* Page title */}
        <h1 className='text-white font-medium text-2xl mb-6'>
          Remix Tool
        </h1>
        {/* Render the Crop component, likely the main content of the remix tool */}
        <Crop />
      </section>
    </AdminLayout>
  )
}

export default RemixToolPage