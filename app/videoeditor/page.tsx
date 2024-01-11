'use client'
import React, { useState } from 'react'
import AdminLayout from '@/layout/admin'
import dynamic from 'next/dynamic'
import EditButton from './EditButton'

const DynamicEditor = dynamic(() => import('./Video').then(a => a.EditorWithStore), {
  ssr: false,
})

const VideoEditorPage = () => {
  const [isEditVideo, setIsEditVideo] = useState<boolean>(false)

  const handleSetIsEditVideo = () => {
    setIsEditVideo(true)
  }

  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Video Editor
        </h1>
      </section>
      <>
        <DynamicEditor isEditVideo={isEditVideo} />
        <div className='flex gap-6 justify-end'>
          <EditButton setIsEditVideo={handleSetIsEditVideo} />
        </div>
      </>
    </AdminLayout>
  )
}

export default VideoEditorPage
