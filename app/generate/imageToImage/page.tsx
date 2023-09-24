// Import necessary dependencies and modules
// Note: These imports are currently commented out
// import Sidebar from '@/app/generate/imageToImage/Sidebar'
// import { UploadImageWithCtx } from '@/app/generate/imageToImage/UploadImage'
import { WithContext } from '@/app/generate/imageToImage/WithContext'; // Importing the WithContext component
import ReactGATag from '@/components/ReactGATag'; // Importing the ReactGATag component
import AdminLayout from '@/layout/admin'; // Importing the AdminLayout component
import { getPretrainBackgroundList, getPretrainFaceList, getPretrainStyleList } from '@/lib/generate'; // Importing functions to get pretraining lists
import React from 'react'; // Importing React

// Metadata for the page
export const metadata = {
  title: 'Image to Image - AdsGency AI',
};

// ImageToImagePage component
const ImageToImagePage = async () => {
  // Fetch pretraining lists asynchronously
  const [faceList, backgroundList, styleList] = await Promise.all([
    getPretrainFaceList(),
    getPretrainBackgroundList(),
    getPretrainStyleList(),
  ]);

  // Render the page within AdminLayout
  return (
    <AdminLayout>
      {/* Track pageview using ReactGATag */}
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/generate/imageToImage",
        title: metadata.title
      }} />
      <section className='flex justify-between h-full mx-[-32px]'>
        {/* Render the WithContext component with pretraining lists */}
        <WithContext
          faceList={faceList}
          backgroundList={backgroundList}
          styleList={styleList}
        />
      </section>
    </AdminLayout>
  );
}

// Export the ImageToImagePage component
export default ImageToImagePage;