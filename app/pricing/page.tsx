'use client'
import { Pricing } from '@/data/pricing'
import AdminLayout from '@/layout/admin'
import React, { useState } from 'react'
import checkIcon from '@iconify/icons-mdi/check';
import closeIcon from '@iconify/icons-mdi/close';
import { Icon } from '@iconify/react';
import Image from 'next/image';


const PricingPage = () => {

  const [plan, setPlan] = useState(Pricing[0].plan)

  return (
    <AdminLayout>
      <div>
        <div className='flex items-center gap-4 '>
          {
            Pricing.map(price => (
              <div
                onClick={() => setPlan(price.plan)}
                key={price.plan}
                className={`${price.plan === plan ? 'border-primary-purple text-white' : 'border-transparent text-primary-gray'} border-2 rounded-lg bg-[#35363A] py-3 px-4 text-[18px] cursor-pointer flex items-center justify-center gap-2`}
              >
                <Image src={`/images/home/pricing/${price.icon}`} width={24} height={24} alt={price.plan} />
                <span>{price.plan}</span>
              </div>
            ))
          }
        </div>
        <div className='mt-6 p-5 w-full h-min bg-[#1B1C21] border border-[#27282F] rounded-[12px]'>
          <div className='flex items-center justify-center gap-12 pl-[200px]'>
            {
              Pricing
                .find(item => item.plan === plan)!
                .tiers
                .map(item => (
                  <div key={item.title}
                    className='w-[240px] flex flex-col justify-center items-center bg-[#27282F] rounded-lg p-4 border border-[#3A3A3A] gap-2'
                  >
                    <div className='text-primary-purple'>{item.title}</div>
                    <div className='flex items-center text-primary-gray text-sm'>
                      <span className='text-white text-3xl mr-3'>{item.price}</span>
                      <span>/month</span>
                    </div>
                    <button className='bg-primary-purple text-white rounded-lg w-[132px] flex items-center justify-center py-2 hover:opacity-80'>Buy now</button>
                  </div>
                ))
            }
          </div>
          <div className='flex flex-col mt-5'>
            {
              Pricing
                .find(item => item.plan === plan)!
                ?.features
                ?.map(item => (
                  <div key={item?.[0] as string}
                    className='w-full h-10 flex justify-evenly items-center text-sm rounded-lg even:bg-[#27282F]'
                  >
                    <div className='w-[160px] text-primary-gray text-sm text-left'>{item[0]}</div>
                    <div className={`w-[240px] text-center flex items-center justify-center ${item[1] === 'Unlimited' || item[1] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[1] === 'boolean' ? (
                        item[1] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[1]}
                    </div>
                    <div className={`w-[240px] text-center flex items-center justify-center ${item[2] === 'Unlimited' || item[2] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[2] === 'boolean' ? (
                        item[2] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[2]}
                    </div>
                    <div className={`w-[240px] text-center flex items-center justify-center ${item[3] === 'Unlimited' || item[3] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[3] === 'boolean' ? (
                        item[3] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[3]}
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default PricingPage
