'use client'
import ConnectPlatform from '@/app/socialInsights/ConnectPlatform'
import Dashboard from '@/app/socialInsights/Dashboard'
import Header from '@/app/socialInsights/Header'
import { SocialInsightsContext, SocialInsightsProvider } from '@/context/socialInsights'
import React, { useContext } from 'react'


const Layout = () => {

  const { currentPlatform, platforms } = useContext(SocialInsightsContext)

  return (
    <>
      <Header />
      {
        platforms.find(platform => platform.name === currentPlatform)?.isConnected
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
