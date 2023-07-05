import Image from 'next/image'
import React from 'react'

const projects = [
  {
    name: 'green velvet sofa',
    image: '/images/admin/home/tree.jpg',
  },
  {
    name: 'Project 2',
    image: '/images/admin/home/tree.jpg',
  },
  {
    name: 'Project 3',
    image: '/images/admin/home/tree.jpg',
  },
  {
    name: 'Project 4',
    image: '/images/admin/home/tree.jpg',
  },
]

const RecentProjects = () => {
  const projectNum = Math.floor(Math.random() * 100)
  return (
    <div className='mt-[50px] px-[76px] w-full'>
      <h2 className='text-[#3A3A3A] font-semibold text-xl'>
        Recent Projects ({projectNum})
      </h2>
      <div className='flex flex-wrap gap-[38px] mt-[20px]'>
        {projects.map((project, index) => (
          <div key={index} className='relative w-[268px] h-[100px] overflow-hidden rounded-[10px] shadow'>
            <Image src={project.image} width={268} height={100} alt={project.name} className='object-contain' />
            <div className='flex items-center justify-center backdrop-blur-sm absolute top-0 left-0 w-full h-full'>
              <span className='text-white'>{project.name}</span>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default RecentProjects
