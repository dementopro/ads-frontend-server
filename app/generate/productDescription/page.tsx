import DescriptionContent from '@/app/generate/productDescription/DescriptionContent'
import SavedCopy from '@/app/generate/productDescription/SavedCopy'
import AdminLayout from '@/layout/admin'
import { IGeneTextForm } from '@/types/generate'
import React from 'react'

export const metadata = {
  title: 'Product Description - AdsGency AI',
}

const ProductDescriptionPage = ({ searchParams }: { searchParams: { mode?: IGeneTextForm['mode'] } }) => {

  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Product Description
        </h1>
        <DescriptionContent />
        <SavedCopy mode={searchParams.mode} />
      </section>
    </AdminLayout>
  )
}

export default ProductDescriptionPage
