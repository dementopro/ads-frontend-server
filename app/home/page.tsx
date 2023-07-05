import CardItems from '@/app/home/CardItems'
import CommunityFrom from '@/app/home/CommunityFrom'
import RecentProjects from '@/app/home/RecentProjects'
import AdminLayout from '@/layout/admin'
import React from 'react'

const HomePage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center w-full mx-auto'>
        <h1 className='text-center text-[#3A3A3A] font-[700] text-[36px] mt-[56px] mb-[34px]'>What agency tasks do you have today?</h1>
        <CardItems />
        <RecentProjects />
        <CommunityFrom />
      </section>
    </AdminLayout>
  )
}

export default HomePage
