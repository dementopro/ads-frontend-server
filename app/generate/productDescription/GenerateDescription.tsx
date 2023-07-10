'use client'
import { Spin } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import contentSaveOutline from '@iconify/icons-mdi/content-save-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { Icon } from '@iconify/react';
import { copyText } from '@/utils/copy';

const GenerateDescription = () => {
  const [propmt, setPropmt] = useState('')
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  function onGenerate() {
    console.log('onGenerate')
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPropmt(e.target.value)
    setContent(e.target.value)
  }

  return (
    <Spin spinning={isGenerating} wrapperClassName='text-base rounded-lg'>
      <div className='flex flew-wrap max-lg:flex-col gap-[18px]'>
        {/* left */}
        <div className='flex-1 rounded-lg py-4 px-5 border border-[#3A3A3A] bg-[#1B1C21] flex flex-col gap-4 items-end justify-between'>
          <div className='w-full h-[220px]'>
            <textarea value={propmt} onChange={handleChange} className='w-full h-full text-xl flex-1 bg-transparent outline-none resize-none' placeholder='Write your prompt here...' />
          </div>
          <button onClick={onGenerate} disabled={isGenerating} className='bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </div>
        {/* right */}
        <div className='flex-1 rounded-lg py-4 px-5 border border-[#3A3A3A] bg-[#1B1C21] flex flex-col gap-4 items-end justify-between'>
          <div className='w-full h-[220px] overflow-auto text-xl'>
            {content}
            {
              !content && (
                <div className='flex items-center justify-center w-full h-full text-primary-gray text-base'>
                  No content has been generated yet
                </div>
              )
            }
          </div>
          <div className='w-full flex text-primary-gray items-center justify-between'>
            <div className='text-xs'>
              <span>
                {content.length} Characters
              </span>
              <span className="ml-4">
                {!content ? 0 : content.split('\n').length} Sentences
              </span>
            </div>
            <div className='flex items-center gap-5'>
              <Icon icon={contentSaveOutline} width={24} height={24} className='cursor-pointer hover:text-white' />
              <Icon onClick={() => copyText(content)} className='hover:text-white cursor-pointer' icon={contentCopy} width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default GenerateDescription
