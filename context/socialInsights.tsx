import { DataMetric, DateRange, Platform, PlatformType } from "@/types/socialInsights";
import { createContext, useState } from "react";
import twitterIcon from '@iconify/icons-logos/twitter';
import facebookIcon from '@iconify/icons-logos/facebook';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import tiktokIcon from '@iconify/icons-logos/tiktok-icon';
import pinterestIcon from '@iconify/icons-logos/pinterest';
import instagramIcon from '@iconify/icons-skill-icons/instagram';



export const SocialInsightsContext = createContext<{
  platforms: Platform[]
  currentPlatform: PlatformType | 'all'
  dateRange: DateRange
  dataMetric: DataMetric
  updateConnectedStatus: (platformName: PlatformType | 'all', isConnected: boolean) => void
  setCurrentPlatform: (platformName: PlatformType | 'all') => void
  setDateRange: (dateRange: DateRange) => void
  setDataMetric: (dataMetric: DataMetric) => void
}>({
  platforms: [],
  currentPlatform: 'all',
  dateRange: 'last_day',
  dataMetric: 'page',
  updateConnectedStatus: () => { },
  setCurrentPlatform: () => { },
  setDateRange: () => { },
  setDataMetric: () => { },
})

export const SocialInsightsProvider = ({ children }: { children: React.ReactNode }) => {

  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      name: 'facebook',
      icon: facebookIcon,
      isConnected: false
    },
    {
      name: 'linkedin',
      icon: linkedinIcon,
      isConnected: false
    },
    {
      name: 'twitter',
      icon: twitterIcon,
      isConnected: false
    },
    {
      name: 'tiktok',
      icon: tiktokIcon,
      isConnected: false
    },
    {
      name: 'pinterest',
      icon: pinterestIcon,
      isConnected: false
    },
    {
      name: 'instagram',
      icon: instagramIcon,
      isConnected: false,
    },
  ])
  const [currentPlatform, setCurrentPlatform] = useState<PlatformType | 'all'>('all')
  const [dateRange, setDateRange] = useState<DateRange>('last_day')
  const [dataMetric, setDataMetric] = useState<DataMetric>('page')

  function updateConnectedStatus(platformName: PlatformType | 'all', isConnected: boolean) {
    const updatedPlatforms = platforms.map(platform => {
      if (platform.name === platformName) {
        return {
          ...platform,
          isConnected
        }
      }
      return platform
    })
    setPlatforms(updatedPlatforms)
  }

  return (
    <SocialInsightsContext.Provider value={{
      platforms, updateConnectedStatus,
      currentPlatform, setCurrentPlatform,
      dateRange, setDateRange,
      dataMetric, setDataMetric,
    }}>
      {children}
    </SocialInsightsContext.Provider>
  )
}

