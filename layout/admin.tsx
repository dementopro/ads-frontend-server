import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import React from 'react'

const AdminLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex flex-col h-screen max-h-screen min-w-full'>
      <div className='flex-1'>
        <AdminHeader />
      </div>
      <div className='flex flex-1 h-full overflow-auto'>
        <div className='flex-1 '>
          <AdminSidebar />
        </div>
        <div className='max-h-full w-full overflow-auto'>
          {children}
        </div>
      </div>

    </div>
  )
}

export default AdminLayout
