'use client'
import { Pricing } from '@/data/pricing'
import AdminLayout from '@/layout/admin'
import React, { useContext, useState, useEffect } from 'react'
import checkIcon from '@iconify/icons-mdi/check';
import closeIcon from '@iconify/icons-mdi/close';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import ReactGATag from '@/components/ReactGATag';
import { message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import { AccountContext } from '@/context/account';
import { PricingPlan } from '@/types/pricing';
import { SubscriptionResp } from '@/types/account';
import ConfirmModal from '@/app/pricing/ConfirmModal';
import PayResult from '@/app/pricing/PayResult';
import { useRouter } from 'next/navigation';

// Define the SubscriptionButton component
type SubscriptionButtonProps = {
  plan: PricingPlan,
  onSubscription: (planId: number) => void,
}

const SubscriptionButton = ({ plan, onSubscription }: SubscriptionButtonProps) => {
  // Get user account information and plan status from context
  const { planId, isSubscribed } = useContext(AccountContext);

  // Format the button text based on user's plan status
  const formatBtnText = () => {
    if (planId === 0) {
      return 'Buy now';
    }
    if (!isSubscribed) {
      if (planId !== plan.planId) {
        return 'Buy now';
      } else {
        return 'Activate';
      }
    } else {
      if (planId === plan.planId) {
        return 'Current plan';
      }
      if (planId > plan.planId) {
        return 'Downgrade';
      }
      if (planId < plan.planId) {
        return 'Upgrade';
      }
    }
  };

  return (
    <button
      onClick={() => onSubscription(plan.planId)}
      disabled={planId === plan.planId && isSubscribed}
      className={
        `rounded-lg w-[132px] flex items-center justify-center py-2
        ${planId === plan.planId && isSubscribed ? 'bg-[#201641] text-primary-purple' : 'bg-primary-gradient text-white cursor-pointer hover:opacity-80'}
        `
      }>
      {formatBtnText()}
    </button>
  );
}

// Define the PricingPage component
const PricingPage = () => {
  const { updateAccount,
    planId,
    isLogin,
    creditInfo,
    setNextPage,
    setSelectedPlan,
    selectedPlan} = useContext(AccountContext)
  const [buyPlanId, setBuyPlanId] = useState(0)
  const router = useRouter()
  const [plan, setPlan] = useState(Pricing[~~((planId - 1) / 3)].plan)
  const [loading, setLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage();
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [payResultVisible, setPayResultVisible] = useState(false);
  const [payResultMessage, setPayResultMessage] = useState('');

  useEffect(() => {
    if(selectedPlan && selectedPlan!==-1 && creditInfo){
      setBuyPlanId(selectedPlan)
      setConfirmVisible(true)
    }
  }, [])

  async function onSubscription(planId: number) {
    try {
      setLoading(true);
      const response = await fetch('/fapi/subscription_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plan_id: planId,
          mode: 'subscribe'
        })
      });
      if (response.ok) {
        const data: SubscriptionResp = await response.json();
        if (data.status === 'active' || data.status === SUCCESS_CODE) {
          setPayResultMessage(data.message || 'Subscription successfully')
          setPayResultVisible(true)
          setConfirmVisible(false)
          updateAccount()
          setSelectedPlan(-1)
          setNextPage("")

        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('response', response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Function to handle plan downgrade action
  async function onDowngrade(planId: number) {
    try {
      setLoading(true);
      const response = await fetch('/fapi/downgrade_subscription_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plan_id: planId,
        })
      });
      if (response.ok) {
        const data: SubscriptionResp = await response.json();
        if (data.status === SUCCESS_CODE || data.status === 'active') {
          setPayResultMessage(data.message || 'Downgrade successfully');
          setPayResultVisible(true);
          setConfirmVisible(false);
          updateAccount();
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('response', response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Function to handle plan upgrade action
  async function onUpgrade(planId: number) {
    try {
      setLoading(true);
      const response = await fetch('/fapi/subscription_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plan_id: planId,
          mode: 'upgrade'
        })
      });
      if (response.ok) {
        const data: SubscriptionResp = await response.json();
        if (data.status === 'active' || data.status === SUCCESS_CODE) {
          setPayResultMessage(data.message || 'Upgrade successfully');
          setPayResultVisible(true);
          setConfirmVisible(false);
          updateAccount();
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('response', response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Function to handle subscription based on plan status
  function handleSubscription(clickPlanId: number) {
    if (planId === 0) {
      onSubscription(clickPlanId);
    } else if (clickPlanId < planId) {
      onDowngrade(clickPlanId);
    } else if (clickPlanId > planId) {
      onUpgrade(clickPlanId);
    } else {
      onSubscription(clickPlanId);
    }
  }

  return (
      <AdminLayout>
        {contextHolder}
        <ReactGATag
          fieldObject={{
            hitType: "pageview",
            page: "/pricing",
            title: "Pricing - AdsGency AI"
          }}
        />
        <ConfirmModal
          planId={buyPlanId}
          visible={confirmVisible}
          onCancel={() => setConfirmVisible(false)}
          onOk={() => {
            handleSubscription(buyPlanId)
          }}
          loading={loading}
        />
        <PayResult
          visible={payResultVisible}
          onClose={() => {
            setPayResultVisible(false)
            setPayResultMessage('')
          }}
          message={payResultMessage}
        />
        <div className='flex items-center gap-4'>
          {
            Pricing.map(price => (
              <div
                onClick={() => setPlan(price.plan)}
                key={price.plan}
                className={`${price.plan === plan ? 'border-primary-purple text-white' : 'border-transparent text-primary-gray'} border-2 rounded-lg bg-[#35363A] py-3 px-4 text-[18px] cursor-pointer flex items-center justify-center gap-2`}
              >
                <Image src={`/images/home/pricing/${price.plan === plan ? price.activeIcon : price.icon}`} width={24} height={24} alt={price.plan} />
                <span>{price.plan}</span>
              </div>
            ))
          }
        </div>
        <div className='mt-6 p-5 w-full h-min bg-[#1B1C21] border border-[#27282F] rounded-[12px]'>
          <div className='flex flex-col'>
            <div className='w-full flex justify-evenly items-center mb-5'>
              <div className='w-[160px]' />
              {
                Pricing
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
                      <SubscriptionButton
                        plan={item}
                        onSubscription={(planId) => {
                          if (!isLogin) {
                            router.push('/login')
                            return
                          }
                          if(!creditInfo){
                            setSelectedPlan(planId)
                            setNextPage("/pricing")
                            router.push('/auth/payment')
                            return
                          }
                          setBuyPlanId(planId)
                          setConfirmVisible(true)
                        }}
                      />
                    </div>
                  ))
              }
            </div>
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
            <div
              className='w-full mt-4 hidden justify-evenly items-center text-sm rounded-lg'
            >
              <div className='w-[160px]' />
              {
                Pricing
                  .find(item => item.plan === plan)!
                  .plans
                  .map((item) => (
                    <div key={item.price} className={`w-[240px] flex items-center justify-center`}>
                      <SubscriptionButton
                        plan={item}
                        onSubscription={onSubscription}
                      />
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </AdminLayout>
  )
}

export default PricingPage;