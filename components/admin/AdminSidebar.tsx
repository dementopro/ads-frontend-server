'use client';

// Import necessary modules and components
import SubscriptionInfo from '@/components/admin/SubscriptionInfo';
import Menu from '@/components/admin/sidebar/Menu';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import creditCardMarkerOutline from '@iconify/icons-mdi/credit-card-marker-outline';
import React, { useContext } from 'react';
import { AccountContext } from '@/context/account';

const AdminSidebar = () => {
  const router = useRouter();

  function toPricing() {
    router.push('/pricing');
  }

  const { isLogin } = useContext(AccountContext);

  return (
    <aside className='max-lg:hidden bg-[#1B1C21] border-r border-r-[#3A3A3A] w-[260px] h-full flex flex-col items-center justify-between pt-4 pb-6'>
      <div className='flex flex-col w-full'>
        <Menu />
      </div>
      <div className='flex flex-col items-center justify-center gap-3 w-full px-6'>
        {isLogin && <SubscriptionInfo />}
        <button onClick={toPricing} className='cursor-pointer hover:border-primary-purple hover:text-primary-purple hover:border-solid text-primary-gray w-full border-2 border-dashed border-primary-gray flex items-center justify-center gap-2 rounded-lg py-1'>
          <Icon icon={creditCardMarkerOutline} width={20} />
          <span>Pricing</span>
        </button>
        <div className='text-xs text-[#F6F6F6]'>Made with 💜 in San Francisco</div>
      </div>
    </aside>
  )
}

export default AdminSidebar;