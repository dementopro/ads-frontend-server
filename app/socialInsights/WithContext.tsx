'use client'
import Dashboard from '@/app/socialInsights/Dashboard'
import Header from '@/app/socialInsights/Header'
import SocialAccountsList from '@/app/socialInsights/SocialAccountsList'
import { SocialInsightsContext, SocialInsightsProvider } from '@/context/socialInsights'
import React, { useContext } from 'react'


const Layout = () => {

  const { currentPlatform } = useContext(SocialInsightsContext)

  return (
    <>
      <Header />
      {currentPlatform === 'all' && <SocialAccountsList />}
      {currentPlatform !== 'all' && <Dashboard />}
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
