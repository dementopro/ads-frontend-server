import Row1 from '@/app/profile/Row1';
import ReactGATag from '@/components/ReactGATag';
import AdminLayout from '@/layout/admin';
import React from 'react';

export const metadata = {
  title: 'User Profile - AdsGency AI',
};

const gridTemplateLargeScreens = `
  "a a a"
  "b b b"
  "c c c"
`;

const ProfilePage = () => {
  return (
    <AdminLayout>
      {/* Adding Google Analytics tag */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/profile",
          title: metadata.title
        }}
      />
      {/* Creating a grid layout for the profile page */}
      <section className='w-full grid gap-4'
        style={{
          gridTemplateColumns: "repeat(3, 1fr)", // Grid columns for large screens
          gridTemplateRows: "repeat(1, minmax(200px, 1fr))", // Grid rows for large screens
          gridTemplateAreas: gridTemplateLargeScreens, // Define grid areas for large screens
        }}
      >
        {/* Render the user's profile information using the Row1 component */}
        <Row1 />
      </section>
    </AdminLayout>
  );
}

export default ProfilePage;