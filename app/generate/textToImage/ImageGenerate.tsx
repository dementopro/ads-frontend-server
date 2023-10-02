// Import necessary components and modules
import GenerateContext from '@/app/generate/textToImage/GenerateContext';
import SelectCom from '@/app/generate/textToImage/SelectCom';
import Empty from '@/components/Empty';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import {
  NOT_ENOUGH_CREDIT,
  SUCCESS_CODE,
  modeOptions,
  typeOptions,
} from '@/data/constant';
import { IGeneImageResp } from '@/types/generate';
import { Spin, message } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

// Define the ImageGenerate component
const ImageGenerate = () => {
  // Initialize state variables and message context
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [mode, setMode] = useState(modeOptions[0]);
  const [type, setType] = useState(typeOptions[0]);
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);

  // Function to handle prompt input change
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value);
  }

  // Function to generate an image
  async function onGenerate() {
    try {
      if (!prompt) {
        messageApi.error('Please enter prompt');
        return;
      }
      setIsGenerating(true);
      const response = await fetch('/api/generate/textToImage', {
        method: 'POST',
        body: JSON.stringify({
          mode: mode.value,
          prompt: prompt,
          type: type.value,
        }),
      });
      const data: IGeneImageResp = await response.json();
      if (response.ok) {
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'Generate successfully');
          const image = data.image_list[0];
          setTitle(image.prompt);
          setDescription(image.description);
          setImage(
            `${process.env.NEXT_PUBLIC_IMG_URL}${data.file_path}/${image.filename}`
          );
          router.refresh();
        } else if (data.status === NOT_ENOUGH_CREDIT) {
          setShowNotEnoughCredits(true);
        } else {
          console.log('data', data);
          messageApi.error(data.message || 'Generate failed');
        }
      } else {
        console.log('error: ', data);
      }
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      {contextHolder}
      {/* Display NotEnoughtCredits component if showNotEnoughCredits is true */}
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />
      <Spin spinning={isGenerating}>
        <div className='flex gap-4 max-md:flex-col'>
          <div className='flex flex-col gap-4 flex-1'>
            <div className='border rounded-lg border-[#3A3A3A] bg-[#1B1C21] px-4 py-[18px] flex flex-col gap-[10px] justify-between'>
              {/* Input for user to enter the prompt */}
              <textarea
                value={prompt}
                onChange={handleChange}
                className='text-xl bg-transparent outline-none h-[90px] resize-none'
                placeholder='Write your prompt here...'
              />
              <div className='flex flex-wrap items-center justify-end gap-5'>
                {/* Dropdowns for mode and type selection */}
                <SelectCom options={typeOptions} selected={type} setSelected={setType} />
                <SelectCom options={modeOptions} selected={mode} setSelected={setMode} />
                {/* Button to trigger image generation */}
                <button
                  onClick={onGenerate}
                  disabled={isGenerating}
                  className='bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'
                >
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>
            { // Display Empty component if title, description, or image is missing
              !title.length || !description.length || !image ? (
                <div className='w-full h-[200px] bg-[#1B1C21] rounded-lg'>
                  <Empty />
                </div>
              ) : (
                <GenerateContext image={image} title={title} description={description} />
              )}
          </div>
          <div className='relative max-w-[420px] h-max min-h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-[#1B1C21]'>
            {image ? (
              // Display generated image using Next.js Image component
              <Image src={image} alt='generate image' width={420} height={426} />
            ) : (
              // Display Empty component if no image is available
              <div className='flex items-center justify-center w-[420px]'>
                <Empty />
              </div>
            )}
          </div>
        </div>
      </Spin>
    </>
  );
}


export default ImageGenerate;

