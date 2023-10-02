// Import necessary components and modules
import CardItems from '@/app/home/CardItems';
import CommunityFrom from '@/app/home/CommunityFrom';
import RecentProjects from '@/app/home/RecentProjects';
import ReactGATag from '@/components/ReactGATag';
import AdminLayout from '@/layout/admin';
import React from 'react';

// Define metadata for the page
export const metadata = {
  title: 'User Home - AdsGency AI',
};

// Define the HomePage component
const HomePage = () => {
  return (
    // Wrap the page content with AdminLayout
    <AdminLayout>
      {/* Include Google Analytics tracking for the page */}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/home',
          title: metadata.title,
        }}
      />
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          What advertising tasks do you have today?
        </h1>
        {/* Render the CardItems component for displaying card items */}
        <CardItems />
        {/* Render the RecentProjects component (commented out) */}
        {/* <RecentProjects /> */}
        {/* Render the CommunityFrom component for displaying community images */}
        <CommunityFrom />
      </section>
    </AdminLayout>
  );
}

export default HomePage;