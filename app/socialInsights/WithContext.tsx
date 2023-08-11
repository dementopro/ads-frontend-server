'use client'
import ConnectPlatform from '@/app/socialInsights/ConnectPlatform'
import Dashboard from '@/app/socialInsights/Dashboard'
import Header from '@/app/socialInsights/Header'
import Comming from '@/app/socialInsights/TikTok/Comming'
import { SocialInsightsContext, SocialInsightsProvider } from '@/context/socialInsights'
import { PlatformType } from '@/types/socialInsights'
import { Spin } from 'antd'
import React, { useContext } from 'react'

const PlatformDashboard = (platform: PlatformType) => {
  switch (platform) {
    case 'facebook':
      return <Dashboard />
    case 'tiktok':
      return <Comming />
    default:
      return <ConnectPlatform />
  }
}



const Layout = () => {

  const { currentPlatform, platforms, checkConnectStatus, isLoading } = useContext(SocialInsightsContext)

  const platform = platforms.find(platform => platform.name === currentPlatform)!

  return (
    <>
      <Header />
      {
        isLoading ?
          <div className="flex justify-center items-center h-64">
            <Spin />
          </div>
          :
          checkConnectStatus(platform.name)
            ? PlatformDashboard(platform.name)
            : <ConnectPlatform />
      }
    </>
  )
}

type Props = {

}

export const WithContext = (props: Props) => {

  return (
    <SocialInsightsProvider>
      <Layout />
    </SocialInsightsProvider>
  )
}
