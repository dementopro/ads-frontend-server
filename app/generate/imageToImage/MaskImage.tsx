import ImageSegmentationCanvasView from '@/app/generate/imageToImage/ImageSegmentationCanvasView'; // Importing the ImageSegmentationCanvasView component
import { GeneImageContext } from '@/context/generate'; // Importing the GeneImageContext from context
import Image from 'next/image'; // Importing the Image component from Next.js
import React, { useContext } from 'react'; // Importing React and necessary hooks

// MaskImage component
const MaskImage = () => {
  // Accessing gene image context data using useContext hook
  const {
    updateShowCrop,    // Function to update the crop view visibility
    modeType,           // Type of image mode (portrait or other)
    isCrop,             // Boolean indicating whether cropping is active
    cropImage,          // Cropped image URL
    originalImageUrl,   // Original image URL
    img_seg             // Image segmentation data
  } = useContext(GeneImageContext);

  // Function to handle enabling crop mode
  function handleCrop() {
    if (originalImageUrl) {
      updateShowCrop(true);
    }
  }

  // Render the component
  return (
    <>
      <div className='flex flex-col items-center gap-4 w-[340px]'>
        {
          modeType === 'portrait' ? (
            <div
              onClick={() => handleCrop()}
              className='rounded-lg bg-[#1B1C21] w-full h-[340px] overflow-hidden relative group'>
              {
                cropImage && !isCrop && (
                  <>
                    <Image alt='image' fill src={cropImage} className='h-full w-full object-contain' />
                    <div className={`cursor-pointer w-full h-full absolute right-0 top-0 left-0 bottom-0 group-hover:flex flex-col items-center justify-center bg-black/60 border-2 border-primary-purple rounded-lg ${!isCrop ? 'flex' : 'hidden'}`}>
                      <Image alt='upload' width={44} height={44} src={'/images/admin/image-ai.svg'} />
                      <div className='text-primary-purple mt-1'>
                        Choose inpainting areas
                      </div>
                      <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                        Please click to select the areas you wish to change.
                      </p>
                      <p className='text-[#878A92] text-center text-xs w-[302px] mt-9'>
                        Size not more than 10MB, aspect ratio less than 2, format does not support gif format
                      </p>
                    </div>
                  </>
                )
              }
              {
                isCrop && cropImage && (
                  <div className='rounded-md overflow-hidden relative w-[340px] h-[340px]'>
                    <ImageSegmentationCanvasView imgSrc={cropImage} imgSegmentation={img_seg} />
                  </div>
                )
              }
            </div>
          ) : (
            <div className='rounded-md overflow-hidden relative w-[340px] h-[340px] bg-[#1B1C21]'>
              {cropImage && <Image src={cropImage} alt='image' fill className='h-full w-full object-contain' />}
            </div>
          )
        }
        <div className='text-primary-gray'>Select area</div>
      </div>
    </>
  );
}

// Export the MaskImage component
export default MaskImage;