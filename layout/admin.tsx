import AdminSidebar from '@/components/admin/AdminSidebar'
import ContentHeader from '@/components/admin/ContentHeader'
import React from 'react'

const AdminLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex flex-col h-screen max-h-screen min-w-full'>
      <div className='h-min'>
        <ContentHeader />
      </div>
      <div className='flex flex-1 h-full overflow-auto'>
        <div className='w-min'>
          <AdminSidebar />
        </div>
        <div className='admin-content max-h-full w-full overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
