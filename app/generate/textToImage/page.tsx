'use client'
import HistoricalGenerations from '@/app/generate/textToImage/HistoricalGenerations'
import SelectCom from '@/app/generate/textToImage/SelectCom'
import { typeOptions, modeOptions } from '@/data/constant'
import AdminLayout from '@/layout/admin'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import twitterIcon from '@iconify/icons-mdi/twitter';
import { Icon } from '@iconify/react'
import facebookIcon from '@iconify/icons-mdi/facebook';
import pinterestIcon from '@iconify/icons-mdi/pinterest';
import downloadIcon from '@iconify/icons-mdi/download';
import scanHelper from '@iconify/icons-mdi/scan-helper';
import contentCopy from '@iconify/icons-mdi/content-copy';
import { copyText } from '@/utils/copy'
import checkboxMultipleMarked from '@iconify/icons-mdi/checkbox-multiple-marked';


const TextToImagePage = () => {

  const [mode, setMode] = useState(modeOptions[0])
  const [type, setType] = useState(typeOptions[0])
  const [propmt, setPropmt] = useState('')

  const p1 = 'Ethereal warrior dances amidst swirling mist and moonlight.'
  const p2 = 'A captivating image featuring a stylish man in a white outfit performing martial arts, set against a dreamy background with rich details.'

  const [isCopyed, setIsCopyed] = useState({
    p1: false,
    p2: false,
  })

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPropmt(e.target.value)
  }

  function handleCopy(key: 'p1' | 'p2', ctx: string) {
    const flag = copyText(ctx)
    if (flag) {
      setIsCopyed({ ...isCopyed, [key]: true })
      setTimeout(() => {
        setIsCopyed({ ...isCopyed, [key]: false })
      }, 1000);
    }
  }

  return (
    <AdminLayout>
      <section className='flex flex-col justify-center mx-8'>
        <h1 className='text-white font-medium text-2xl my-6'>
          Text to Image
        </h1>
        <div className='flex gap-4 max-md:flex-col'>
          <div className='flex flex-col gap-4 flex-1'>
            <div className='border rounded-lg border-[#3A3A3A] bg-[#1B1C21] px-4 py-[18px] flex flex-col gap-[10px] justify-between'>
              <textarea onChange={handleChange} className='bg-transparent outline-none h-[90px] resize-none' placeholder='Write your prompt here...'>{propmt}</textarea>
              <div className='flex flex-wrap items-center justify-end gap-5'>
                <SelectCom options={typeOptions} selected={type} setSelected={setType} />
                <SelectCom options={modeOptions} selected={mode} setSelected={setMode} />
                <button className='bg-primary-purple hover:opacity-80 flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>Generate</button>
              </div>
            </div>
            <div className='bg-[#1B1C21] rounded-lg px-4 py-[18px] flex flex-col gap-5'>
              <div className='flex items-baseline gap-[18px] text-primary-gray'>
                <div className='flex-1 text-2xl'>
                  {p1}
                </div>
                {
                  !isCopyed.p1 ?
                    <Icon onClick={() => handleCopy('p1', p1)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
                    :
                    <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
                }
              </div>
              <div className='flex items-baseline gap-[18px] text-primary-gray'>
                <div className='flex-1 text-base'>
                  {p2}
                </div>
                {
                  !isCopyed.p2 ?
                    <Icon onClick={() => handleCopy('p2', p2)} className='hover:text-white cursor-pointer' icon={contentCopy} width={24} height={24} />
                    :
                    <Icon className='text-primary-purple cursor-pointer' icon={checkboxMultipleMarked} width={24} height={24} />
                }
              </div>
              <div className='justify-end text-primary-gray flex items-center gap-[14px]'>
                <Icon className='hover:text-white cursor-pointer' icon={downloadIcon} width={24} height={24} />
                <Icon className='hover:text-white cursor-pointer' icon={scanHelper} width={20} height={20} />
                <Icon className='hover:text-white cursor-pointer' icon={pinterestIcon} width={24} height={24} />
                <Icon className='hover:text-white cursor-pointer' icon={facebookIcon} width={24} height={24} />
                <Icon className='hover:text-white cursor-pointer' icon={twitterIcon} width={24} height={24} />
              </div>
            </div>
          </div>
          <div className='relative bg-primary-gray max-w-[420px] h-max rounded-lg overflow-hidden'>
            <Image src={'/images/admin/home/cover.png'} alt='generate image' width={420} height={426} />
          </div>
        </div>
        <HistoricalGenerations />
      </section>
    </AdminLayout>
  )
}

export default TextToImagePage
