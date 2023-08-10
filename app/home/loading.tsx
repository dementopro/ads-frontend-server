import AdminLayout from '@/layout/admin'
import React from 'react'

const loading = () => {
  return (
    <AdminLayout>
      <div className='w-full h-full flex justify-center items-center m-[-32px]'>
        <div className='flex flex-col items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-purple' />
          <span className='text-white mt-4'>
            Loading...
          </span>
        </div>
      </div>
    </AdminLayout>
  )
}

export default loading
