import { Icon } from '@iconify/react'
import React from 'react'
import { Pricing } from '@/data/pricing'
import Image from 'next/image'

type ComfirmModalProps = {
  visible: boolean,
  onOk: () => void,
  onCancel: () => void,
  planId: number
  loading?: boolean
}

const ConfirmModal = ({ visible, onCancel, onOk, planId, loading }: ComfirmModalProps) => {

  const plan = Pricing[~~((planId - 1) / 3)].plans.find(p => p.planId === planId)!
  const features = Pricing[~~((planId - 1) / 3)].features

  return (
    <>
      {
        visible &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[726px] border border-[#27282F] bg-[#1B1C21] rounded-xl p-8">
            <div className="absolute top-6 right-6 cursor-pointer" onClick={onCancel}>
              <Icon icon="mdi:close-circle-outline" className="text-[#5F6368]" width={24} height={24} />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center font-bold text-3xl">
                You are subscribing!
              </div>
              <p className='text-center text-xs mt-4 max-w-[400px]'>
                This transaction will be billed and the amount you see in the table below will be debited from your account each month.
              </p>
              <div
                className='mt-7 flex flex-col w-[330px] bg-[#35363A] border border-primary-purple rounded-lg overflow-hidden'
                style={{
                  boxShadow: '0px 0px 15px 0px rgba(132, 79, 255, 0.29)'
                }}
              >
                <div className='text-white bg-primary-purple flex items-center gap-2 py-3 px-5'>
                  <Image src={'/images/admin/subscription.svg'} alt='subscription icon' width={16} height={16} />
                  <span>Subscription</span>
                </div>
                <div className='flex flex-col p-6'>
                  <div className='flex items-center justify-center text-primary-purple gap-2 text-sm'>
                    <div>{Pricing[~~((planId - 1) / 3)].plan}</div>
                    <span>|</span>
                    <div>{plan.title}</div>
                  </div>
                  <div className='flex items-center justify-center text-primary-gray text-sm w-full border-b border-[#5F6368] mt-4 pb-6'>
                    <span className='text-white text-3xl mr-3'>{plan.price}</span>
                    <span>/month</span>
                  </div>
                  <div className='mt-4 grid grid-flow-row grid-cols-2 gap-x-4 text-primary-gray w-full'>
                    {
                      features.map(item => (
                        <div key={item[0] as string} className='flex items-center justify-between mt-2 text-xs'>
                          <span>{item[0]}</span>
                          <div className={`${item[planId - 3 * ~~((planId - 1) / 3)] === 'Unlimited' || item[planId - 3 * ~~((planId - 1) / 3)] === 'Available' ? 'text-primary-purple' : 'text-white'}`}>
                            {
                              typeof item[planId - 3 * ~~((planId - 1) / 3)] === 'boolean'
                                ? (
                                  item[planId - 3 * ~~((planId - 1) / 3)] ?
                                    <Icon className='text-primary-purple' icon='mdi-check' /> : <Icon className='text-[#34A853]' icon='mdi-close' />
                                )
                                : item[planId - 3 * ~~((planId - 1) / 3)]
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <button
                onClick={onOk}
                className={`mt-9 w-[330px] flex items-center justify-center py-2 text-white cursor-pointer hover:opacity-80 overflow-hidden rounded-lg border-2
                    ${loading ? 'bg-primary-purple border-transparent' : 'bg-[#1B1C21]'}
                  `}
                style={!loading ? {
                  boxShadow: '0px 0px 21px 0px rgba(132, 79, 255, 0.26)',
                  borderImage: 'linear-gradient(to right, #6859FF 0%, #AF41FF 100%)',
                  borderImageSlice: 1,
                } : {}}
                disabled={loading}
              >
                {
                  loading ?
                    <div className='flex items-center justify-center'>
                      <div className="animate-spin rounded-full w-4 h-4 border-b-2 border-white"></div>
                      <span className='ml-2'>Processing...</span>
                    </div>
                    : 'Checkout'
                }
              </button>
              <div className='mt-9 text-sm text-[#5F6368] flex items-center gap-2'>
                <Icon icon='mdi:security' width={16} height={16} />
                <span>This is a secure SSL encrypted payment</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ConfirmModal
