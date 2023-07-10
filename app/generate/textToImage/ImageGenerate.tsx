'use client'
import GenerateContext from '@/app/generate/textToImage/GenerateContext'
import SelectCom from '@/app/generate/textToImage/SelectCom';
import { SUCCESS_CODE, modeOptions, typeOptions } from '@/data/constant';
import { Spin, message } from 'antd'
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'

const ImageGenerate = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [mode, setMode] = useState(modeOptions[0])
  const [type, setType] = useState(typeOptions[0])
  const [propmt, setPropmt] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPropmt(e.target.value)
  }

  async function onGenerate() {
    try {
      if (!mode || !propmt || !type) {
        messageApi.error('Please fill all fields')
        return
      }
      setIsGenerating(true)
      const res = await fetch('/api/generate/textToImage', {
        method: 'POST',
        body: JSON.stringify({
          mode: mode.value, propmt, type: type.value
        }),
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          console.log('data', data)
          messageApi.success(data.msg || 'Generate successfully')
          const image = data.image_list[0]
          setTitle(image.prompt)
          setDescription(image.description)
          // TODO: set image url
        } else {
          console.log('data', data)
          messageApi.error(data.msg || 'Generate failed')
        }
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      {contextHolder}
      <Spin spinning={isGenerating}>
        <div className='flex gap-4 max-md:flex-col'>
          <div className='flex flex-col gap-4 flex-1'>
            <div className='border rounded-lg border-[#3A3A3A] bg-[#1B1C21] px-4 py-[18px] flex flex-col gap-[10px] justify-between'>
              <textarea value={propmt} onChange={handleChange} className='text-xl bg-transparent outline-none h-[90px] resize-none' placeholder='Write your prompt here...' />
              <div className='flex flex-wrap items-center justify-end gap-5'>
                <SelectCom options={typeOptions} selected={type} setSelected={setType} />
                <SelectCom options={modeOptions} selected={mode} setSelected={setMode} />
                <button onClick={onGenerate} disabled={isGenerating} className='bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>
            {
              !title.length || !description.length
                ?
                <div
                  className='flex items-center justify-center w-full h-[200px] bg-[#1B1C21] text-primary-gray text-base rounded-lg'
                >
                  No content has been generated yet
                </div>
                :
                <GenerateContext title={title} description={description} />
            }
          </div>
          <div className='relative max-w-[420px] h-max min-h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-[#1B1C21]'>
            {image
              ? <Image src={image} alt='generate image' width={420} height={426} />
              : <p
                className='px-24 text-center text-base w-full h-full text-primary-gray'
              >
                No content has been<br /> generated yet
              </p>}
          </div>
        </div>
      </Spin>
    </>
  )
}

export default ImageGenerate
