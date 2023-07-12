import DescriptionContent from '@/app/generate/productDescription/DescriptionContent'
import SavedCopy from '@/app/generate/productDescription/SavedCopy'
import AdminLayout from '@/layout/admin'
import React from 'react'

const ProductDescriptionPage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Product Description
        </h1>
        <DescriptionContent />
        <SavedCopy />
      </section>
    </AdminLayout>
  )
}

export default ProductDescriptionPage