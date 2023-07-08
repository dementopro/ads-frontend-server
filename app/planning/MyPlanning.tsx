import { IPlan } from '@/types/planning'
import React from 'react'

type Props = {
  plan: IPlan | null
}

const MyPlanning = ({ plan }: Props) => {
  return (
    <div className='mb-8'>
      <h2 className='text-white font-medium text-xl my-8'>
        My planning
      </h2>
      {
        !plan &&
        <div className='w-full flex items-center justify-center'>
          <span className='text-primary-gray'>
            No planning has been generated yet
          </span>
        </div>
      }
      <div className='flex flex-wrap gap-5'>
        {
          plan && Object.entries(plan).map(([name, contents], index) => (
            <div key={index} className='border border-[#3A3A3A] bg-[#1B1C21] p-[18px] rounded-lg w-[352px] min-h-[236px] flex flex-col gap-9'>
              <h4 className='text-base font-medium'>{name}</h4>
              <div className='flex flex-col gap-3'>
                <p>{contents[0]}</p>
                <p>{contents[1]}</p>
                <p>{contents[2]}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyPlanning
