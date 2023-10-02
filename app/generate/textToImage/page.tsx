// Import necessary components and modules
import HistoricalGenerations from '@/app/generate/textToImage/HistoricalGenerations';
import AdminLayout from '@/layout/admin';
import React from 'react';
import ImageGenerate from '@/app/generate/textToImage/ImageGenerate';
import ReactGATag from '@/components/ReactGATag';

// Define metadata for the page
export const metadata = {
  title: 'Text to Image - AdsGency AI',
};

// Define the TextToImagePage component
const TextToImagePage = () => {
  return (
    // Wrap the page content with AdminLayout
    <AdminLayout>
      {/* Include Google Analytics tracking for the page */}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/generate/textToImage',
          title: metadata.title,
        }}
      />
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Text to Image
        </h1>
        {/* Render the ImageGenerate component for generating images */}
        <ImageGenerate />
        {/* Render the HistoricalGenerations component for displaying historical image generations */}
        <HistoricalGenerations />
      </section>
    </AdminLayout>
  );
}

export default TextToImagePage;