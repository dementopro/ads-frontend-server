'use client'
import { Icon } from '@iconify/react'
import plusIcon from '@iconify/icons-mdi/plus'
import dotsIcon from '@iconify/icons-mdi/dots-horizontal'
import React, { useContext } from 'react'
import { NewImage } from '@/types/generate'
import Image from 'next/image'
import { GeneImageContext } from '@/context/generate'


const HistoryItem = ({
  _id, img_path, filename, date, email, face_mode, background_mode, style, task_label, mode_type
}: NewImage) => {

  const { updateGeneratedImage, updatePreTrainedOption } = useContext(GeneImageContext)

  function handleClick() {
    // load image
    updateGeneratedImage([{
      _id,
      img_path,
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
          <div className='text-primary-gray text-[15px]'>Mission {_id.slice(-6)}</div>
        </div>
        <Icon className='text-primary-gray hover:text-white' icon={dotsIcon} width={16} height={16} />
      </div>
    </div>
  )
}

type SidebarProps = {
  historyList: NewImage[]
}

const Sidebar = ({ historyList }: SidebarProps) => {

  const { resetCtx } = useContext(GeneImageContext)

  function reloadPage() {
    resetCtx()
  }

  return (
    <div className='mt-[-32px] h-[calc(100vh-64px)] w-[282px] bg-[#1B1C21] flex flex-col py-10 px-4 border-l border-[#35363A] overflow-y-auto'>
      <button
        onClick={reloadPage}
        className='w-[240px] flex items-center justify-center py-[10px] gap-1 rounded-lg border border-[#2f2a45] bg-[#232528] hover:opacity-80 hover:border-primary-purple'>
        <Icon icon={plusIcon} width={16} height={16} />
        <span>New assignment</span>
      </button>
      <div className='my-4 text-primary-gray text-[15px]'>History</div>
      <div className='flex flex-col gap-4 mx-auto'>
        {
          historyList.map(item => (
            <HistoryItem key={item._id} {...item} />
          ))
        }
        {
          historyList.length === 0 &&
          <div className='text-primary-gray text-center text-sm my-3'>No history</div>
        }
      </div>
    </div>
  )
}

export default Sidebar
