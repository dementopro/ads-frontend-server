'use client'
import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import GenerateDescription from '@/app/generate/productDescription/GenerateDescription'
// import GenerateEmail from '@/app/generate/productDescription/GenerateEmail'


const DescriptionContent = () => {

  const [categories] = useState({
    Description: <GenerateDescription />,
    Email: <GenerateDescription />,
  })

  return (
    <div>
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex gap-5">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={
                  ({ selected }) =>
                    `rounded-lg px-4 py-2 text-base leading-5 font-medium text-primary-gray bg-[#35363A] hover:text-white outline-none
                  ${selected ? 'text-white border border-[#848484]' : ''}`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            {Object.values(categories).map((el, idx) => (
              <Tab.Panel key={idx}>
                <div className='w-full'>
                  {el}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default DescriptionContent
