import { DataMetric, DateRange, Platform, PlatformType } from "@/types/socialInsights";
import { createContext, useEffect, useState } from "react";
import twitterIcon from '@iconify/icons-logos/twitter';
import facebookIcon from '@iconify/icons-logos/facebook';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import tiktokIcon from '@iconify/icons-logos/tiktok-icon';
import pinterestIcon from '@iconify/icons-logos/pinterest';
import instagramIcon from '@iconify/icons-skill-icons/instagram';
import { checkFacebookIsConnected } from "@/lib/socialInsights";


export const SocialInsightsContext = createContext<{
  platforms: Platform[]
  currentPlatform: PlatformType
  dateRange: DateRange
  dataMetric: DataMetric
  topTab: 'social' | 'click' | 'follower'
  updatePlatformStatus: (platformName: PlatformType, config: Partial<Platform>) => void
  setCurrentPlatform: (platformName: PlatformType) => void
  setDateRange: (dateRange: DateRange) => void
  setDataMetric: (dataMetric: DataMetric) => void
  setTopTab: (topTab: 'social' | 'click' | 'follower') => void
}>({
  platforms: [],
  currentPlatform: 'facebook',
  dateRange: 'last_day',
  dataMetric: 'page',
  topTab: 'social',
  updatePlatformStatus: () => { },
  setCurrentPlatform: () => { },
  setDateRange: () => { },
  setDataMetric: () => { },
  setTopTab: () => { },
})

export const SocialInsightsProvider = ({ children }: { children: React.ReactNode }) => {

  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      name: 'facebook',
      icon: facebookIcon,
      isConnected: false,
      loading: true,
    },
    {
      name: 'linkedin',
      icon: linkedinIcon,
      isConnected: false,
      loading: false,
    },
    {
      name: 'twitter',
      icon: twitterIcon,
      isConnected: false,
      loading: false,
    },
    {
      name: 'tiktok',
      icon: tiktokIcon,
      isConnected: false,
      loading: false,
    },
    {
      name: 'pinterest',
      icon: pinterestIcon,
      isConnected: false,
      loading: false,
    },
    {
      name: 'instagram',
      icon: instagramIcon,
      isConnected: false,
      loading: false,
    },
  ])
  const [currentPlatform, setCurrentPlatform] = useState<PlatformType>('facebook')
  const [dateRange, setDateRange] = useState<DateRange>('last_week')
  const [dataMetric, setDataMetric] = useState<DataMetric>('page')
  const [topTab, setTopTab] = useState<'social' | 'click' | 'follower'>('social')

  useEffect(() => {
    setDateRange('last_week')
  }, [topTab])

  useEffect(() => {
    updateConnectStatus()
  }, [currentPlatform])

  async function updateConnectStatus() {
    if (currentPlatform === 'facebook') {
      updatePlatformStatus('facebook', {
        loading: true,
      })
      const isConnect = await checkFacebookIsConnected()
      updatePlatformStatus('facebook', {
        isConnected: isConnect,
        loading: false,
      })
    }
  }

  function updatePlatformStatus(platformName: PlatformType, config: Partial<Platform>) {
    const updatedPlatforms = platforms.map(platform => {
      if (platform.name === platformName) {
        return {
          ...platform,
          ...config,
        }
      }
      return platform
    })
    setPlatforms(updatedPlatforms)
  }

  return (
    <SocialInsightsContext.Provider value={{
      platforms, updatePlatformStatus,
      currentPlatform, setCurrentPlatform,
      dateRange, setDateRange,
      dataMetric, setDataMetric,
      topTab, setTopTab,
    }}>
      {children}
    </SocialInsightsContext.Provider>
  )
}

