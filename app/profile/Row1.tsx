'use client';
import ProfileCard from '@/app/profile/ProfileCard';
import SocialAccounts from '@/app/profile/SocialAccounts';
import { SocialInsightsProvider } from '@/context/socialInsights';
import React from 'react';
import Member from './Member';

const Row1 = () => {
  return (
    <>
      <div className="w-full grid grid-cols-5 gap-6">
        <div className="col-span-5 md:col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-5 md:col-span-2">
          <SocialInsightsProvider>
            <SocialAccounts />
          </SocialInsightsProvider>
        </div>
      </div>
      <div className="mt-6">
        <Member />
      </div>
    </>
  );
};

export default Row1;
