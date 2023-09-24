// Importing necessary dependencies and modules
import { GeneImageContext } from '@/context/generate';
import { capitalize } from '@/lib/format';
import { Icon } from '@iconify/react';
import { Image as ImageView } from 'antd';
import React, { useContext } from 'react';
import downloadIcon from '@iconify/icons-mdi/download';
import { downloadImage } from '@/utils';

// GeneResult component
const GeneResult = () => {
  // Accessing gene image context data using useContext hook
  const {
    generatedImage,        // Generated image data
    preTrainedOption,       // Pre-trained options for the image
  } = useContext(GeneImageContext);

  // Function to handle image download
  function onDownload() {
    downloadImage(generatedImage?.[0].img_path!, 'generated image');
  }

  // Rendering the component
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-wrap gap-2 justify-between items-center mb-4'>
          <div className='flex items-center gap-4'>
            <div className='text-xl'>
              {/* Displaying whether it's a Sample or Task */}
              {generatedImage?.[0].isSample ? 'Sample' : 'Task'}
            </div>
            {
              // Displaying the timestamp if it's not a sample
              !generatedImage?.[0].isSample && (
                <div className='text-primary-gray text-sm'>{new Date(generatedImage?.[0].date!).toLocaleString()} Saved</div>
              )
            }
          </div>
          {/* Download button (currently commented out) */}
          {/* <div className='flex items-center justify-center gap-2 text-primary-gray hover:text-white cursor-pointer'>
            <Icon onClick={() => onDownload()} className='' icon={downloadIcon} width={24} height={24} />
            <span>Download</span>
          </div> */}
        </div>
        <div className='flex flex-wrap gap-2 justify between items-center mb-4'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>
              {/* Displaying the image style or pre-trained style */}
              {capitalize(generatedImage?.[0].style || preTrainedOption.style)}
            </div>
            {
              // Displaying additional styles for portrait images
              generatedImage?.[0].mode_type === 'portrait' && (
                <>
                  <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>
                    {/* Displaying the background mode */}
                    {capitalize(generatedImage?.[0].background_mode || preTrainedOption.background)}
                  </div>
                  <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>
                    {/* Displaying the face mode */}
                    {capitalize(generatedImage?.[0].face_mode || preTrainedOption.face)}
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className='mt-8 w-[254px] h-[254px] relative bg-primary-gray/5 rounded-lg overflow-hidden'>
          {/* Displaying the generated image */}
          <ImageView alt='generated image' sizes='contain' src={generatedImage?.[0].img_path!} className='w-full h-full object-contain' rootClassName='w-full h-full' />
        </div>
      </div>
    </>
  );
}

// Exporting the GeneResult component
export default GeneResult;