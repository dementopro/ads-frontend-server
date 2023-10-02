import Crop from '@/app/generate/remixTool/Crop'
import ReactGATag from '@/components/ReactGATag'
import AdminLayout from '@/layout/admin'
import React from 'react'


export const metadata = {
  title: 'Remix Tool - AdsGency AI',
}

const RemixToolPage = () => {

  return (
    <AdminLayout>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/generate/remixTool",
        title: metadata.title
      }} />
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Remix Tool
        </h1>
        <Crop />
      </section>
    </AdminLayout>
  )
}

export default RemixToolPage
