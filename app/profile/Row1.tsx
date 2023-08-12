'use client'
import ProfileCard from '@/app/profile/ProfileCard'
import SocialAccounts from '@/app/profile/SocialAccounts'
import { SocialInsightsProvider } from '@/context/socialInsights'
import React from 'react'

const Row1 = () => {
  return (
    <>
      <div style={{ gridArea: "a" }}>
        <ProfileCard />
      </div>
      <div style={{ gridArea: "b" }}>
        <SocialInsightsProvider>
          <SocialAccounts />
        </SocialInsightsProvider>
      </div>
    </>
  )
}

export default Row1
