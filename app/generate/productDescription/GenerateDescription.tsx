'use client'
import { Spin } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import contentSaveOutline from '@iconify/icons-mdi/content-save-outline';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { Icon } from '@iconify/react';
import Empty from '@/components/Empty';
import { message } from 'antd'
import { SUCCESS_CODE } from '@/data/constant';
import { copyText } from '@/utils';
import { IGeneTextForm } from '@/types/generate';
import { useRouter } from 'next/navigation';

type Props = {
  mode: IGeneTextForm['mode']
}

const GenerateDescription = ({ mode }: Props) => {
  const [prompt, setPrompt] = useState('')
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const router = useRouter()

  async function onGenerate() {
    try {
      if (!prompt) {
        messageApi.error('Please enter your prompt')
        return
      }
      setIsGenerating(true)
      messageApi.loading('Generating...')
      const res = await fetch('/api/generate/text/generate', {
        method: 'POST',
        body: JSON.stringify({ prompt, mode }),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.status === SUCCESS_CODE) {
          setContent(data.text)
          messageApi.success('Generated successfully')
        } else {
          messageApi.error(data.msg || 'Something went wrong')
        }
      } else {
        messageApi.error('Something went wrong')
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsGenerating(false)
    }
  }

  async function onSave() {
    try {
      if (!content) {
        messageApi.error('Nothing to save')
        return
      }
      setIsSaving(true)
      messageApi.loading('Saving...')
      const res = await fetch('/api/generate/text/save', {
        method: 'POST',
        body: JSON.stringify({ prompt, mode, text: content }),
      })
      if (res.ok) {
        const data = await res.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Saved successfully')
          router.refresh()
        } else {
          messageApi.error(data.msg || 'Something went wrong')
        }
      } else {
        messageApi.error('Something went wrong')
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsSaving(false)
    }
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPrompt(e.target.value)
  }

  function handleCopy() {
    if (!content) {
      messageApi.error('Nothing to copy')
      return
    }
    const flag = copyText(content)
    if (!flag) {
      messageApi.error('Copy failed')
    } else {
      messageApi.success('Copied')
    }
  }

  return (
    <>
      {contextHolder}
      <Spin spinning={isGenerating || isSaving} wrapperClassName='text-base rounded-lg'>
        <div className='flex flew-wrap max-lg:flex-col gap-[18px]'>
          {/* left */}
          <div className='flex-1 rounded-lg py-4 px-5 border border-[#3A3A3A] bg-[#1B1C21] flex flex-col gap-4 items-end justify-between'>
            <div className='w-full h-[220px]'>
              <textarea value={prompt} onChange={handleChange} className='w-full h-full text-xl flex-1 bg-transparent outline-none resize-none' placeholder='Write your prompt here...' />
            </div>
            <button onClick={onGenerate} disabled={isGenerating} className='bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
          </div>
          {/* right */}
          <div className='flex-1 rounded-lg py-4 px-5 border border-[#3A3A3A] bg-[#1B1C21] flex flex-col gap-4 items-end justify-between'>
            <div className='w-full h-[220px] overflow-auto text-xl'>
              {content}
              {!content && <Empty />}
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
                <Icon onClick={onSave} icon={contentSaveOutline} width={24} height={24} className='cursor-pointer hover:text-white' />
                <Icon onClick={handleCopy} className='hover:text-white cursor-pointer' icon={contentCopy} width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  )
}

export default GenerateDescription
