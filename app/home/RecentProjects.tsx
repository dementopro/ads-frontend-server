import Image from 'next/image';
import React from 'react';

// Sample project data
const projects = [
  {
    name: 'green velvet sofa',
    image: '/images/admin/home/tree.jpg',
    desc: 'xxxxxxxx',
  },
  {
    name: 'Project 2',
    image: '/images/admin/home/tree.jpg',
    desc: 'xxxxxxxx',
  },
  {
    name: 'Project 3',
    image: '/images/admin/home/tree.jpg',
    desc: 'xxxxxxxx',
  },
  {
    name: 'Project 4',
    image: '/images/admin/home/tree.jpg',
    desc: 'xxxxxxxx',
  },
];

// RecentProjects component
const RecentProjects = () => {
  // Generate a random number of projects
  const projectNum = Math.floor(Math.random() * 100);

  return (
    <div className='mt-12 w-full'>
      {/* Title for recent projects */}
      <h2 className='text-white font-medium text-2xl'>
        Recent Projects ({projectNum})
      </h2>
      <div className='flex flex-wrap gap-5 mt-[20px]'>
        {projects.map((project, index) => (
          <div key={index} className='relative w-[260px] h-[158px] overflow-hidden rounded-lg bg-red-200'>
            {/* Display project image */}
            <Image src={project.image} width={260} height={158} alt={project.name} className='h-[158px]' />
            {/* Project information overlay */}
            <div className='flex flex-col justify-end absolute top-0 bottom-0 right-0 left-0 pb-3 pl-5 w-full h-full' style={{
              background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.00) 100%)'
            }}>
              {/* Project name */}
              <div className='text-white font-medium text-base'>{project.name}</div>
              {/* Project description */}
              <span className='text-white text-xs'>{project.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;