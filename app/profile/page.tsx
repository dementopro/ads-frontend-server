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
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/profile',
          title: metadata.title,
        }}
      />
      <section className="w-full">
        <Row1 />
      </section>
    </AdminLayout>
  );
};

export default ProfilePage;
