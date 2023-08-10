'use client'
import { Icon } from '@iconify/react'
import plusIcon from '@iconify/icons-mdi/plus'
import React, { useContext, useEffect, useState } from 'react'
import { IGeneImageHistoryResp, NewImage } from '@/types/generate'
import Image from 'next/image'
import { GeneImageContext } from '@/context/generate'
import { SUCCESS_CODE } from '@/data/constant'
import { Spin } from 'antd'


const HistoryItem = ({
  img_path, filename, date, email, face_mode,
  background_mode, style, task_label, mode_type, file,
  index
}: NewImage & { index: number }) => {

  const { updateGeneratedImage, updatePreTrainedOption } = useContext(GeneImageContext)

  function handleClick() {
    // load image
    updateGeneratedImage([{
      _id: `${index + 1}`,
      img_path: `data:image/png;base64, ${file}`,
      filename,
      date,
      email,
      background_mode,
      face_mode,
      style,
      task_label,
      mode_type,
    }])
    updatePreTrainedOption({
    })
  }

  return (
    <div onClick={handleClick} className='rounded-lg bg-[#23252B] cursor-pointer border border-[#2F2A45] hover:border-primary-purple w-[240px] px-4 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg overflow-hidden relative bg-primary-gray'>
            <Image alt={filename} src={img_path} width={32} height={32} className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='text-primary-gray text-[15px]'>Task {index + 1}</div>
        </div>
      </div>
    </div>
  )
}

const Sidebar = () => {

  const { resetCtx } = useContext(GeneImageContext)

  const [history, setHistory] = useState<NewImage[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getHistory()
  }, [])

  async function getHistory() {
    try {
      setLoading(true)
      const response = await fetch(`/fapi/generate_image/check_task?limit=10`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          limit: 10,
        }),
      })
      if (response.ok) {
        const data: IGeneImageHistoryResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          const imageList = data.image_data?.map(item => ({
            ...item,
            img_path: `${process.env.NEXT_PUBLIC_IMG_URL}/${item.img_path}/${item.filename}`,
          })) || []
          setHistory(imageList)
        }
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }

  function reloadPage() {
    resetCtx()
  }

  return (
    <div className='mt-[-32px] h-[calc(100vh-64px)] w-[282px] bg-[#1B1C21] flex flex-col py-8 px-4 border-l border-[#35363A] overflow-y-auto'>
      <button
        onClick={reloadPage}
        className='w-[240px] flex items-center justify-center py-[10px] gap-1 rounded-lg border border-[#2f2a45] bg-[#232528] hover:opacity-80 hover:border-primary-purple'>
        <Icon icon={plusIcon} width={16} height={16} />
        <span>New assignment</span>
      </button>
      <div className='my-4 text-primary-gray text-[15px]'>History</div>
      <Spin spinning={loading}>
        <div className='flex flex-col gap-4 mx-auto'>
          {
            history.map((item, index) => (
              <HistoryItem key={item._id} {...item} index={index} />
            ))
          }
          {
            history.length === 0 &&
            <div className='flex items-center justify-center text-primary-gray text-center text-sm my-3 h-[300px]'>No history</div>
          }
        </div>
      </Spin>
    </div>
  )
}

export default Sidebar
