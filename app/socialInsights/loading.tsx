// Import the AdminLayout component and React
import AdminLayout from '@/layout/admin'
import React from 'react'

// Define the loading component
const Loading = () => {
  return (
    // Render the loading component within the AdminLayout
    <AdminLayout>
      <div className='w-full h-full flex justify-center items-center m-[-32px]'>
        <div className='flex flex-col items-center'>
          {/* Create a spinning loader */}
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-purple' />
          {/* Display "Loading..." text */}
          <span className='text-white mt-4'>
            Loading...
          </span>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Loading