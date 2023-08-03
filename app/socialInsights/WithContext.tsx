'use client'
import ConnectPlatform from '@/app/socialInsights/ConnectPlatform'
import Dashboard from '@/app/socialInsights/Dashboard'
import Header from '@/app/socialInsights/Header'
import { SocialInsightsContext, SocialInsightsProvider } from '@/context/socialInsights'
import { Spin } from 'antd'
import React, { useContext } from 'react'


const Layout = () => {

  const { currentPlatform, platforms } = useContext(SocialInsightsContext)

  const platform = platforms.find(platform => platform.name === currentPlatform)!

  return (
    <>
      <Header />
      {
        platform.loading ?
          <div className="flex justify-center items-center h-64">
            <Spin />
          </div>
          : platform.isConnected
            ? <Dashboard />
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
