import Image from 'next/image'
import React, { ChangeEvent, DragEvent, useContext, useState } from 'react'
import { message, Spin } from 'antd'

import { GeneImageContext } from '@/context/generate'
import { SUCCESS_CODE } from '@/data/constant'
import { IUploadImageResp } from '@/types/generate'
import { getCookie } from '@/lib/cookies'
import axios from '@/lib/axios';

const OriginImageUpload = () => {

  const {
    modeType,
    originalImageUrl,
    updateOriginalImage,
    updateCropImage,
    updateIsCrop,
    updateFile,
    updateFileName,
    updateFilePath,
    updateMaskFileName,
    updateMaskFilePath,
    updateImgSeg,
    updateImageId,
    updatePreTrainStep,
    updatePreTrainedOption
  } = useContext(GeneImageContext)

  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false)


  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement
    if (e.target.files) {
      const file = e.target.files[0]
      if (file?.type === 'image/gif') {
        messageApi.error('Gif is not supported')
        return
      }
      // Size not more than 10MB
      if (file?.size > 10 * 1024 * 1024) {
        messageApi.error('File size is too large')
        return
      }

      updateCropImage(null)
      updateIsCrop(false)

      try {
        setLoading(true)
        messageApi.loading('Uploading...')
        const formData = new FormData()
        formData.append('file', file)
        formData.append('mode', modeType)
        const response = await axios({
          url: "/fapi/generate_image/upload_image",
          method: 'POST',
          data: formData
        });
        if (response.status === 200) {
          const data: IUploadImageResp = response.data;
          if (data.status === SUCCESS_CODE) {
            messageApi.success(data.message || 'Upload successfully')
            updateOriginalImage(file)
            // const newUrl = `${process.env.NEXT_PUBLIC_IMG_URL}/${data.img_path}`
            // updateCropImage(newUrl)
            updateFile(data.file)
            updateCropImage(`data:image/png;base64, ${data.file}`)
            updateIsCrop(false)
            updateFileName(data.file_name)
            updateFilePath(data.file_path)
            updateMaskFileName(data.mask_file_name)
            updateMaskFilePath(data.mask_file_path)
            updateImgSeg(data.img_seg)
            updateImageId(data._id)
            if (modeType === 'product') {
              updatePreTrainStep('background')
              updatePreTrainedOption({
                image: data.file || ''
              })
            }
          } else {
            messageApi.error(data.message || 'Upload failed')
          }
        } else {
          messageApi.error('Upload failed')
        }
      } catch (error) {
        messageApi.error('Upload failed')
      } finally {
        setLoading(false)
        element.value = ''
      }
    }
  }

  function handleDrag(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  return (
    <>
      {contextHolder}
      <div className='flex flex-col items-center gap-4 w-[340px]'>
        <Spin className='text-base' spinning={loading}>
          <div
            onDrag={handleDrag}
            className={`rounded-lg bg-[#1B1C21] border-[1.5px] border-dashed w-[340px] h-[340px] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer
            ${!!originalImageUrl ? 'border-transparent' : 'border-primary-purple'}`}
          >
            {
              originalImageUrl
                ?
                <Image alt='uploaded image' fill sizes='contain' src={originalImageUrl} className='w-full h-full object-contain' />
                :
                <>
                  <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white/10 z-1 hidden group-hover:flex' />
                  <div className='flex flex-col items-center justify-center'>
                    <Image alt='upload' width={44} height={44} src={'/images/admin/upload-image.svg'} />
                    <div className='text-primary-purple mt-1'>
                      Click to upload
                    </div>
                    <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                      Or drag and drop image files directly into this area
                    </p>
                    <p className='text-[#878A92] text-center text-xs w-[302px] mt-9'>
                      Size not more than 10MB, aspect ratio less than 2, format does not support gif format
                    </p>
                  </div>
                </>
            }
            <input type='file' accept='image/*' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-2 opacity-0 cursor-pointer' onChange={handleChange} />
          </div>
        </Spin>
        <div className='text-primary-gray'>Original image</div>
      </div>
    </>
  )
}

export default OriginImageUpload
