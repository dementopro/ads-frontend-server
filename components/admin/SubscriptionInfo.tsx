'use client'
import { Icon } from '@iconify/react'
import React, { useContext, useEffect } from 'react'
import bellCancel from '@iconify/icons-mdi/bell-cancel';
import bellIcon from '@iconify/icons-mdi/bell';
import { Modal, message } from 'antd';
import { AccountContext } from '@/context/account';
import { useRouter } from 'next/navigation';
import vipOne from '@iconify/icons-icon-park-solid/vip-one';
import { SUCCESS_CODE } from '@/data/constant';

const SubscriptionInfo = () => {

  const [modal, modalContextHolder] = Modal.useModal()
  const [messageApi, messageContextHolder] = message.useMessage()
  const router = useRouter()

  const {
    credits,
    trialDays,
    isSubscribed,
    updateAccount,
  } = useContext(AccountContext)


  useEffect(() => {
    updateAccount()
  }, [])

  function onCancel() {
    modal.confirm({
      title: 'Are you sure you want to unsubscribe?',
      content: 'You will lose all your credits and your account will be downgraded to the free plan after your trial ends.',
      okText: 'Yes, unsubscribe',
      cancelText: 'No, keep my subscription',
      cancelButtonProps: {
        className: 'bg-primary-gradient text-white rounded-lg font-semibold hover:!text-white hover:opacity-80 mt-2'
      },
      okButtonProps: {
        className: 'bg-white text-primary-purple rounded-lg font-semibold hover:!text-white hover:!bg-primary-purple mt-2',
        type: 'link'
      },
      maskClosable: true,
      centered: true,
      async onOk() {
        await cancelSubscription()
      }
    })
  }

  async function cancelSubscription() {
    try {
      const response = await fetch('/fapi/cancel_subscription_api', {
        method: 'GET',
      })
      if (response.ok) {
        const data: IResponse = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success(data.message || 'You have successfully unsubscribed.')
        } else {
          messageApi.error(data.message || 'Something went wrong.')
        }
      } else {
        messageApi.error('Something went wrong.')
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      updateAccount()
    }
  }

  function toPricing() {
    router.push('/pricing')
  }

  return (
    <>
      {modalContextHolder}
      {messageContextHolder}
      <div
        className='rounded-[4px] p-4 w-full flex flex-col gap-4'
        style={{
          background: 'linear-gradient(116deg, #844FFF 0%, #037378 100%)'
        }}
      >
        <div className='flex items-center gap-2 text-base text-white font-semibold'>
          <span>Upgrade plan</span>
          <Icon width={24} height={24} icon={vipOne} inline />
        </div>
        <div className='flex items-center justify-between text-white text-xs'>
          <div>Expires After</div>
          <div className='flex items-center'>
            <span className='bg-white/30 rounded p-1 mx-2 min-w-5 h-5 flex items-center justify-center font-bold text-white'>{trialDays}</span> Days
          </div>
        </div>
        <div className='flex items-center justify-between text-white text-sm'>
          <span className='font-semibold'>Credits</span>
          <div><span className='font-semibold'>{credits}</span></div>
        </div>
        {/* <div className='w-full h-[4px] bg-[#3A3A3A] rounded-lg'>
          <div className={`h-full bg-white rounded-lg`} style={{
            width: `${credits / totalCredits * 100}%`
          }}></div>
        </div> */}
        {
          isSubscribed ?
            <button onClick={onCancel} className='cursor-pointer hover:border-solid text-white w-full border-2 border-dashed border-white flex items-center justify-center gap-2 rounded-lg py-1 hover:bg-white hover:text-primary-purple transition-all'>
              <Icon icon={bellCancel} />
              <span>Unsubscribe</span>
            </button>
            :
            <button onClick={toPricing} className='cursor-pointer hover:border-solid text-white w-full border-2 border-dashed border-white flex items-center justify-center gap-2 rounded-lg py-1 hover:bg-white hover:text-primary-purple transition-all'>
              <Icon icon={bellIcon} />
              <span>Subscribe</span>
            </button>
        }
      </div>
    </>
  )
}

export default SubscriptionInfo