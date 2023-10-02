// Import statements
import DescriptionContent from '@/app/generate/productDescription/DescriptionContent';
import SavedCopy from '@/app/generate/productDescription/SavedCopy';
import ReactGATag from '@/components/ReactGATag';
import AdminLayout from '@/layout/admin';
import { IGeneTextForm } from '@/types/generate';
import React from 'react';

// Metadata for the page
export const metadata = {
  title: 'Text to Copies - AdsGency AI',
};

// ProductDescriptionPage component
const ProductDescriptionPage = ({ searchParams }: { searchParams: { mode?: IGeneTextForm['mode'] } }) => {

  return (
    // Render the AdminLayout component
    <AdminLayout>
      {/* Add Google Analytics tag for tracking */}
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/generate/productDescription",
          title: metadata.title
        }}
      />
      <section className='flex flex-col justify-center'>
        {/* Page title */}
        <h1 className='text-white font-medium text-2xl mb-6'>
          Text to Copies
        </h1>
        {/* Render the DescriptionContent component */}
        <DescriptionContent />
        {/* Render the SavedCopy component */}
        <SavedCopy mode={searchParams.mode} />
      </section>
    </AdminLayout>
  );
}

export default ProductDescriptionPage;