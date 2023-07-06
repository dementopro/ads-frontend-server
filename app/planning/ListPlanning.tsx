import React from 'react'

const ListPlanning = () => {
  const plannings = [
    {
      date: '2021-10-10',
      requirement: 'Travel product',
      status: 'save',
    },
    {
      date: '2021-10-10',
      requirement: 'Travel product',
      status: 'save',
    },
    {
      date: '2021-10-10',
      requirement: 'Travel product',
      status: 'save',
    },
    {
      date: '2021-10-10',
      requirement: 'Travel product',
      status: 'save',
    },
  ]
  return (
    <div className='bg-[#1B1C21] rounded-lg px-10 py-[30px] flex flex-col gap-5 mt-5'>
      <div className='flex justify-between text-[#848484]'>
        <div className='w-[100px]'>Date</div>
        <div>Requirement</div>
        <div className='w-[100px] text-center'>Save/Load</div>
      </div>
      <div className='flex flex-col gap-[10px] text-primary-gray'>
        {
          plannings.map((planning, index) => (
            <div key={index} className='flex justify-between'>
              <div className='w-100px'>{planning.date}</div>
              <div>{planning.requirement}</div>
              <button className='text-white bg-primary-purple hover:opacity-80 cursor-pointer rounded-lg w-[96px] h-[28px]'>{planning.status}</button>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default ListPlanning
