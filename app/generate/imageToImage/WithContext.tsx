// Import necessary components and dependencies
import Sidebar from '@/app/generate/imageToImage/Sidebar'; // Sidebar component
import UploadImage from '@/app/generate/imageToImage/UploadImage'; // Component for image uploading and generation
import { GeneImageProvider } from '@/context/generate'; // Provider component for the GeneImageContext context
import { NewImage, PretrainItem } from '@/types/generate'; // Import types
import React from 'react'; // Import React

// Props type for WithContext component
type Props = {
  faceList: PretrainItem[]; // List of pre-trained face options
  backgroundList: PretrainItem[]; // List of pre-trained background options
  styleList: PretrainItem[]; // List of pre-trained style options
}

// WithContext Component: Wraps the main components with the GeneImageContext provider
export const WithContext = (props: Props) => {
  return (
    <GeneImageProvider> {/* Use GeneImageProvider to provide context to child components */}
      <div className='h-full flex-1 flex flex-col pl-8 overflow-auto'>
        {/* Main content area */}
        <div className='flex flex-col pr-8'>
          <UploadImage {...props} /> {/* Render the UploadImage component with props */}
        </div>
      </div>
      <Sidebar /> {/* Render the Sidebar component */}
    </GeneImageProvider>
  );
};