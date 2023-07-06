import React from 'react'

const MyPlanning = () => {

  const cards = [
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
  ]

  return (
    <div className='mb-8'>
      <h2 className='text-white font-medium text-xl my-8'>
        My planning
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          cards.map((card, index) => (
            <div key={index} className='border border-[#3A3A3A] bg-[#1B1C21] p-[18px] rounded-lg w-[352px] min-h-[236px] flex flex-col gap-9'>
              <h4 className='text-base font-medium'>Client Overview</h4>
              <div className='flex flex-col gap-3'>
                <p>{card}</p>
                <p>{card}</p>
                <p>{card}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyPlanning
