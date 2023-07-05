import AdminSidebar from '@/components/admin/AdminSidebar'
import React from 'react'

const AdminLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex h-screen max-h-screen min-w-full'>
      <div className='flex-1 h-full'>
        <AdminSidebar />
      </div>
      <section className={`max-h-full w-full overflow-auto admin-content`}>
        {children}
      </section>
    </div>
  )
}

export default AdminLayout
