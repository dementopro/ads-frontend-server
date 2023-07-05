import AdminSidebar from '@/components/admin/AdminSidebar'
import ContentHeader from '@/components/admin/ContentHeader'
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
        <ContentHeader />
        {children}
      </section>
    </div>
  )
}

export default AdminLayout
