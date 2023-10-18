'use client';

// Import necessary modules and components
import SubscriptionInfo from '@/components/admin/SubscriptionInfo';
import Menu from '@/components/admin/sidebar/Menu';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import creditCardMarkerOutline from '@iconify/icons-mdi/credit-card-marker-outline';
import React, { useContext } from 'react';
import { AccountContext } from '@/context/account';
import { isUserLogin } from '@/lib/auth';

const AdminSidebar = () => {
  const router = useRouter();

  function toPricing() {
    router.push('/pricing');
  }


  const { isLogin }  = useContext(AccountContext)


  return (
    <aside className="max-ipad:hidden bg-[#1B1C21] border-r border-r-[#3A3A3A] w-[260px] h-full flex flex-col items-center justify-between pt-4 pb-6">
      <div className="flex flex-col w-full">
        <Menu />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 px-6">
        {isLogin && <SubscriptionInfo />}
        <button
          onClick={toPricing}
          className="flex items-center justify-center w-full gap-2 py-1 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary-purple hover:text-primary-purple hover:border-solid text-primary-gray border-primary-gray"
        >
          <Icon icon={creditCardMarkerOutline} width={20} />
          <span>Pricing</span>
        </button>
        <div className="text-xs text-[#F6F6F6]">
          Made with 💜 in San Francisco
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
