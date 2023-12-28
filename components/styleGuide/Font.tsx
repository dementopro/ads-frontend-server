'use client';
import { font } from '@/data/StyleGuide/font';
import React from 'react';

const Font = () => {
  return (
    // <div className='w-full flex flex-col gap-[16px]'>
    //   {font.map((item, index) =>
    //     <div key={index} className={`${item.title} flex flex-col flex-wrap gap-[16px]`}>
    //       {item.types.map((type, i) =>
    //         <div key={i} className={`w-full ${type.size} ${type.font} ${type.fontWeight} ${type.leading} ${type.tracking}`}>
    //           {type.title}
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <div className='w-full flex flex-col gap-[16px]'>
      <div className='flex flex-col flex-wrap gap-[16px]'>
        <div className='w-full android:text-center ipadmini:text-left text-[72px] font-poppins font-semibold leading-[80px] tracking-[-4]'>
          Display 01 - Poppins
        </div>
        <div className='w-full android:text-center ipadmini:text-left text-[60px] font-poppins font-semibold leading-[72px] tracking-[-4]'>
          Display 02 - Poppins
        </div>
      </div>
      <div className='flex flex-col flex-wrap gap-[16px]'>
        <div className='w-full android:text-center ipadmini:text-left text-[48px] font-poppins font-semibold leading-[56px] tracking-[-4]'>
          Heading 01 - Poppins
        </div>
        <div className='w-full android:text-center ipadmini:text-left text-[34px] font-poppins font-semibold leading-[40px] tracking-[-4]'>
          Heading 02 - Poppins
        </div>
      </div>
      <div className='flex flex-col flex-wrap gap-[16px]'>
        <div className='w-full android:text-center ipadmini:text-left text-[18px] font-open-sans font-semibold leading-[21.6px] tracking-0'>
          Paragraph 01 - Open Sans
        </div>
        <div className='w-full android:text-center ipadmini:text-left text-[16px] font-open-sans font-semibold leading-[19px] tracking-0'>
          Paragraph 02 - Open Sans
        </div>
      </div>
    </div>
  );
};

export default Font;
