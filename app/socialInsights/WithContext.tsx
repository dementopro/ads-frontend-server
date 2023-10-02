'use client'

// Import necessary components and modules
import ConnectPlatform from '@/app/socialInsights/ConnectPlatform'
import Dashboard from '@/app/socialInsights/Dashboard'
import Header from '@/app/socialInsights/Header'
import TikTokDashboard from '@/app/socialInsights/TikTok/Dashboard'
import { SocialInsightsContext, SocialInsightsProvider } from '@/context/socialInsights'
import { PlatformType } from '@/types/socialInsights'
import { Spin } from 'antd'
import React, { useContext } from 'react'

// Define a component that displays the appropriate dashboard based on the selected platform
const PlatformDashboard = (platform: PlatformType) => {
  switch (platform) {
    case 'facebook':
      return <Dashboard />
    case 'tiktok':
      return <TikTokDashboard />
    default:
      return <ConnectPlatform />
  }
}

// Define the main layout component
const Layout = () => {
  const { currentPlatform, platforms, checkConnectStatus, isLoading } = useContext(SocialInsightsContext) // Get relevant context data

  // Find the platform object based on the current platform name
  const platform = platforms.find(platform => platform.name === currentPlatform)!

  return (
    <>
      <Header /> {/* Render the header component */}
      {isLoading ? ( // If loading data, show a loading spinner
        <div className="flex justify-center items-center h-64">
          <Spin />
        </div>
      ) : (
        // If not loading, check if the platform is connected
        checkConnectStatus(platform.name) ? (
          PlatformDashboard(platform.name) // Render the appropriate dashboard based on the platform
        ) : (
          <ConnectPlatform /> // Render the ConnectPlatform component if not connected
        )
      )}
    </>
  )
}

type Props = {}

// Create a component that wraps the main layout component with the SocialInsightsProvider
export const WithContext = (props: Props) => {
  return (
    <SocialInsightsProvider>
      <Layout /> {/* Render the main layout component */}
    </SocialInsightsProvider>
  )
}