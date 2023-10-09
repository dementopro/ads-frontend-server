import AdminSidebar from '@/components/admin/AdminSidebar'; // Importing the AdminSidebar component
import ContentHeader from '@/components/admin/ContentHeader'; // Importing the ContentHeader component
import React from 'react';

// Define the AdminLayout component
const AdminLayout = ({ children }: {
  children: React.ReactNode;
}) => {

  return (
    <div className='flex flex-col h-screen max-h-screen min-w-full'>
      <div className='h-min'>
        {/* Render the ContentHeader component */}
        <ContentHeader />
      </div>
      <div className='flex flex-1 h-full overflow-auto'>
        <div className='w-min'>
          {/* Render the AdminSidebar component */}
          <AdminSidebar />
        </div>
        <div className='admin-content max-h-full w-full overflow-auto'>
          {/* Render the children components, which will represent the content of the admin pages */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;