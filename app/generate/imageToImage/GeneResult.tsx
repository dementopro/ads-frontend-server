import { GeneImageContext } from '@/context/generate'
import { capitalize } from '@/lib/format'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Image as ImageView } from 'antd';
import React, { useContext } from 'react'
import downloadIcon from '@iconify/icons-mdi/download';
import { downloadImage } from '@/utils'

const GeneResult = () => {

  const {
    generatedImage,
    preTrainedOption,
    pretrainList,
  } = useContext(GeneImageContext)

  const { faceList } = pretrainList

  const faceImg = faceList?.find(item => item.name === preTrainedOption.face || item.name === generatedImage?.[0].face_mode)?.image_path

  function onDownload() {
    downloadImage(generatedImage?.[0].img_path!, 'generated image')
  }

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-wrap gap-2 justify-between items-center mb-4'>
          <div className='flex items-center gap-4'>
            <div className='text-xl'>Task {generatedImage?.[0]._id}</div>
            <div className='text-primary-gray text-sm'>{new Date(generatedImage?.[0].date!).toLocaleString()} Saved</div>
          </div>
          {/* <div className='flex items-center justify-center gap-2 text-primary-gray hover:text-white cursor-pointer'>
            <Icon onClick={() => onDownload()} className='' icon={downloadIcon} width={24} height={24} />
            <span>Download</span>
          </div> */}
        </div>
        <div className='flex flex-wrap gap-2 justify-between items-center mb-4'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>{capitalize(generatedImage?.[0].face_mode || preTrainedOption.face)}</div>
            <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>{capitalize(generatedImage?.[0].background_mode || preTrainedOption.background)}</div>
            <div className='bg-[#35363A] rounded-[2px] text-sm text-primary-gray px-2 py-[2px]'>{capitalize(generatedImage?.[0].style || preTrainedOption.style)}</div>
          </div>
        </div>
        <div className='mt-8 w-[254px] h-[254px] relative bg-primary-gray/5 rounded-lg overflow-hidden'>
          <ImageView alt='generated image' sizes='contain' src={generatedImage?.[0].img_path!} className='w-full h-full object-contain' rootClassName='w-full h-full' />
        </div>
      </div>
    </>
  )
}

export default GeneResult
