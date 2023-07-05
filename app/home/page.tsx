import CardItems from '@/app/home/CardItems'
import CommunityFrom from '@/app/home/CommunityFrom'
import RecentProjects from '@/app/home/RecentProjects'
import AdminLayout from '@/layout/admin'
import React from 'react'

const HomePage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center mx-8'>
        <h1 className='text-white font-medium text-2xl my-6'>
          What advertising tasks do you have today?
        </h1>
        <CardItems />
        <RecentProjects />
        <CommunityFrom />
      </section>
    </AdminLayout>
  )
}

export default HomePage
