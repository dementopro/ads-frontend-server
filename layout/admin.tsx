'use client';
import AdminSidebar from '@/components/admin/AdminSidebar'; // Importing the AdminSidebar component
import ContentHeader from '@/components/admin/ContentHeader'; // Importing the ContentHeader component
import { isUserLogin } from '@/lib/auth';
import { useAccountContext, type AccountInterface } from '@/context/account';
import React, { useEffect } from 'react';
import { usePathname, useRouter, redirect } from 'next/navigation';
// Define the AdminLayout component
const AdminLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const { account, isLoading, setAccount } = useAccountContext();
  const pathname: string = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {

    } else {
      if (!account)
        redirect ('/login')
    }
    console.log ({account, isLoading})
  }, [account, isLoading]);

  if (isLoading) {
    return <div className='flex flex-col h-screen max-h-screen min-w-full admin-content'>
      
      </div>
  }

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