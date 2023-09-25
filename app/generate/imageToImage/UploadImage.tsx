'use client'
import CropImage from '@/app/generate/imageToImage/CropImage'; // Component for cropping an image
import GeneResult from '@/app/generate/imageToImage/GeneResult'; // Component to display generated images
import MaskImage from '@/app/generate/imageToImage/MaskImage'; // Component to mask an image
import OriginImageUpload from '@/app/generate/imageToImage/OriginImageUpload'; // Component for uploading an original image
import PreTrainedPick from '@/app/generate/imageToImage/PreTrainedPick'; // Component for picking pre-trained options
import Topbar from '@/app/generate/imageToImage/Topbar'; // Top navigation bar component
import { GeneImageContext } from '@/context/generate'; // Import context for managing state
import { PretrainItem } from '@/types/generate'; // Import types
import React, { useContext, useEffect } from 'react'; // Import React and useContext hook

// Props type for UploadImage component
type Props = {
  faceList: PretrainItem[]; // List of pre-trained face options
  backgroundList: PretrainItem[]; // List of pre-trained background options
  styleList: PretrainItem[]; // List of pre-trained style options
}

// UploadImage Component: Represents the main component for image uploading and generation
const UploadImage = ({ faceList, backgroundList, styleList }: Props) => {
  const {
    updatePretrainList, // Function to update the list of pre-trained options
    showCrop, // Boolean to control whether to show the image cropping component
    isGenerating, // Boolean to indicate if image generation is in progress
    generatedImage, // Array of generated images
  } = useContext(GeneImageContext); // Access state and functions from the GeneImageContext

  // Update the pre-trained options list when the lists of options change
  useEffect(() => {
    updatePretrainList({
      faceList,
      backgroundList,
      styleList,
    });
  }, [faceList, backgroundList, styleList]);

  return (
    <>
      {/* Render the components based on the current state */}
      {!generatedImage ? ( // If no generated images, render image uploading components
        <>
          <Topbar /> {/* Render the top navigation bar */}
          <div className='flex flex-wrap gap-12'>
            <OriginImageUpload /> {/* Component to upload the original image */}
            <MaskImage /> {/* Component to mask the image */}
          </div>
          {showCrop && <CropImage />} {/* Render the image cropping component if needed */}
          <PreTrainedPick /> {/* Component to pick pre-trained options */}
        </>
      ) : (
        <GeneResult /> // If there are generated images, render the result component
      )}

      {/* Display a loading overlay if image generation is in progress */}
      {isGenerating && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-purple' />
            <span className='text-white mt-4'>Generating...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadImage; // Export the UploadImage component
