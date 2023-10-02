import Empty from '@/components/Empty';
import { IPlan } from '@/types/planning';
import React from 'react';

// Define the props for the MyPlanning component
type Props = {
  plan: IPlan | null; // The planning data or null
};

// Define the MyPlanning component
const MyPlanning = ({ plan }: Props) => {
  return (
    <>
      <h2 className='text-white font-medium text-xl my-8'>
        My planning
      </h2>
      {!plan && <Empty text="No plan has been loaded yet." />} {/* Display "Empty" message if plan is null */}
      <div className='flex flex-wrap gap-5'>
        {
          plan &&
          Object.entries(plan).map(([name, contents], index) => (
            <div key={index} className='border border-[#3A3A3A] bg-[#1B1C21] p-[18px] rounded-lg min-w-[352px] min-h-[236px] flex flex-1 flex-col gap-6'>
              <h4 className='text-lg font-medium'>{name}</h4>
              <div className='flex flex-col gap-3'>
                <p>{contents[0]}</p>
                <p>{contents[1]}</p>
                <p>{contents[2]}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default MyPlanning;