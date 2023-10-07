'use client'
import { PublicPricing } from '@/data/pricing'
import React, { useContext, useState } from 'react'
import checkIcon from '@iconify/icons-mdi/check';
import closeIcon from '@iconify/icons-mdi/close';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { AccountContext } from '@/context/account';
import { useRouter } from 'next/navigation';
import styles from './pricing.module.css'

const Content = () => {

  const { planId } = useContext(AccountContext)
  const router = useRouter()

  const [plan, setPlan] = useState(PublicPricing[~~((planId - 1) / 3)].plan)

  function requestDemo() {
    router.push('/requestDemo')
  }

  return (
    <>
      <section className='max-ipad:w-full overflow-auto flex flex-col justify-center items-center py-8 mx-auto'>
        <div className='flex items-center gap-4 max-sm:flex-col'>
          {
            PublicPricing.map((price, index) => (
              <div
                onClick={() => setPlan(price.plan)}
                key={price.plan}
                className={`${styles['plan-' + index]} ${price.plan === plan ? styles.active : 'text-primary-gray'} !box-border rounded-lg w-[220px] h-[48px] px-4 text-[18px] cursor-pointer flex items-center justify-center gap-2`}
              >
                <Image src={`/images/home/pricing/${price.plan === plan ? price.activeIcon : price.icon}`} width={24} height={24} alt={price.plan} />
                <span>{price.plan}</span>
              </div>
            ))
          }
        </div>
        <div
          className='mt-6 p-5 w-full h-min border border-[#27282F] rounded-[12px]'
          style={{
            background: 'linear-gradient(180deg, #251F32 0%, #1B1C21 100%)'
          }}
        >
          <div className='flex flex-col'>
            <div className='w-full flex max-sm:flex-col justify-evenly items-center gap-5 mb-5'>
              <div className='max-sm:hidden w-[160px]' />
              {
                PublicPricing
                  .find(item => item.plan === plan)!
                  .plans
                  .map(item => (
                    <div key={item.title}
                      className='w-[240px] flex flex-col justify-center items-center bg-[#27282F] rounded-lg p-4 border border-[#3A3A3A] gap-2'
                    >
                      <div className='text-primary-purple uppercase'>{item.title}</div>
                      <div className='flex items-center text-primary-gray text-sm'>
                        <span className='text-white text-3xl mr-3'>{item.price}</span>
                        <span>/month</span>
                      </div>
                    </div>
                  ))
              }
            </div>
            {
              PublicPricing
                .find(item => item.plan === plan)!
                ?.features
                ?.map(item => (
                  <div key={item?.[0] as string}
                    className='w-full max-sm:h-16 h-10 flex justify-evenly items-center text-sm rounded-lg even:bg-[#27282F]'
                  >
                    <div className='w-[160px] max-sm:pl-2 text-primary-gray text-sm text-left'>{item[0]}</div>
                    <div className={`max-sm:w-[120px] w-[240px] text-center flex items-center justify-center ${item[1] === 'Unlimited' || item[1] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[1] === 'boolean' ? (
                        item[1] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[1]}
                    </div>
                    <div className={`max-sm:w-[120px] w-[240px] text-center flex items-center justify-center ${item[2] === 'Unlimited' || item[2] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[2] === 'boolean' ? (
                        item[2] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[2]}
                    </div>
                    <div className={`max-sm:w-[120px] w-[240px] text-center flex items-center justify-center ${item[3] === 'Unlimited' || item[3] === 'Available' ? 'text-primary-purple' : ''}`}>
                      {typeof item[3] === 'boolean' ? (
                        item[3] ? <Icon className='text-primary-purple' icon={checkIcon} /> : <Icon className='text-[#34A853]' icon={closeIcon} />
                      ) : item[3]}
                    </div>
                  </div>
                ))
            }
            <div
              className='w-full mt-4 hidden justify-evenly items-center text-sm rounded-lg'
            >
              <div className='w-[160px]' />
              {
                PublicPricing
                  .find(item => item.plan === plan)!
                  .plans
                  .map((item) => (
                    <div key={item.price} className={`w-[240px] flex items-center justify-center`}>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
        <div className='flex items-center mt-8'>
          <button
            onClick={requestDemo}
            className={`${styles['border-image-pesudo']} flex items-center justify-center h-[44px] bg-transparent text-white cursor-pointer hover:opacity-80 px-8 truncate`}>
            Request Demo
          </button>
        </div>
      </section>
    </>
  )
}

export default Content
