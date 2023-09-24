// Import necessary dependencies and components.
import DefaultLayout from '@/layout/default';
import React from 'react';
import Content from '@/app/careers/Content';
import ReactGATag from '@/components/ReactGATag';

// Define metadata for the page.
export const metadata = {
  title: 'Careers - AdsGency AI',
}

// Define the CareersPage component.
const CareersPage = () => {
  return (
    <DefaultLayout>
      {/* Add Google Analytics tag for tracking. */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/careers",
          title: metadata.title,
        }}
      />
      {/* Create a section for the careers page. */}
      <section className={`w-full min-h-[calc(100vh-64px)] flex flex-col items-center pb-12`}>
        {/* Render the content of the careers page. */}
        <Content />
      </section>
    </DefaultLayout>
  )
}

export default CareersPage;