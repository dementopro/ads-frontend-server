'use client'
import ListPlanning from '@/app/planning/ListPlanning'
import MyPlanning from '@/app/planning/MyPlanning'
import AdminLayout from '@/layout/admin'
import React, { ChangeEvent, useState } from 'react'

const PlanningPage = () => {
  const [propmt, setPropmt] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPropmt(e.target.value)
  }

  return (
    <AdminLayout>
      <section className='flex flex-col justify-center mx-8'>
        <h1 className='text-white font-medium text-2xl my-6'>
          Planning
        </h1>
        <div className='border rounded-lg border-[#3A3A3A] bg-[#1B1C21] px-4 py-[18px] flex flex-col gap-[10px] justify-between'>
          <input type='text' onChange={handleChange} className='bg-transparent outline-none  resize-none h-[30px]' placeholder='What are you selling?' />
          <div className='flex flex-wrap items-center justify-end gap-5'>
            <button className='bg-primary-purple hover:opacity-80 flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>Generate</button>
          </div>
        </div>
        <ListPlanning />
        <MyPlanning />
      </section>
    </AdminLayout>
  )
}

export default PlanningPage
