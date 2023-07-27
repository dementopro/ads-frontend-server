import DescriptionContent from '@/app/generate/productDescription/DescriptionContent'
import SavedCopy from '@/app/generate/productDescription/SavedCopy'
import ReactGATag from '@/components/ReactGATag'
import AdminLayout from '@/layout/admin'
import { IGeneTextForm } from '@/types/generate'
import React from 'react'

export const metadata = {
  title: 'Text to Copies - AdsGency AI',
}

const ProductDescriptionPage = ({ searchParams }: { searchParams: { mode?: IGeneTextForm['mode'] } }) => {

  return (
    <AdminLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/generate/productDescription",
          title: metadata.title
        }}
      />
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Text to Copies
        </h1>
        <DescriptionContent />
        <SavedCopy mode={searchParams.mode} />
      </section>
    </AdminLayout>
  )
}

export default ProductDescriptionPage
