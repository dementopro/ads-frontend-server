import { DataMetric, DateRange, Platform, PlatformType } from "@/types/socialInsights";
import { createContext, useEffect, useState } from "react";
import twitterIcon from '@iconify/icons-logos/twitter';
import facebookIcon from '@iconify/icons-logos/facebook';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import tiktokIcon from '@iconify/icons-logos/tiktok-icon';
import pinterestIcon from '@iconify/icons-logos/pinterest';
import instagramIcon from '@iconify/icons-skill-icons/instagram';
import { checkFacebookIsConnected, checkPinterestIsConnected, checkTikTokIsConnected } from "@/lib/socialInsights";


export const SocialInsightsContext = createContext<{
  platforms: Platform[]
  currentPlatform: PlatformType
  dateRange: DateRange
  dataMetric: DataMetric
  topTab: 'social' | 'click' | 'follower'
  setCurrentPlatform: (platformName: PlatformType) => void
  setDateRange: (dateRange: DateRange) => void
  setDataMetric: (dataMetric: DataMetric) => void
  setTopTab: (topTab: 'social' | 'click' | 'follower') => void
  isFacebookConnected: boolean
  isTikTokConnected: boolean
  isPinterestConnected: boolean
  setIsFacebookConnected: (isConnected: boolean) => void
  setIsTikTokConnected: (isConnected: boolean) => void
  setIsPinterestConnected: (isConnected: boolean) => void
  checkConnectStatus: (platformName: PlatformType) => boolean
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  updateAllConnectStatus: () => void
}>({
  platforms: [],
  currentPlatform: 'facebook',
  dateRange: 'last_day',
  dataMetric: 'page',
  topTab: 'social',
  setCurrentPlatform: () => { },
  setDateRange: () => { },
  setDataMetric: () => { },
  setTopTab: () => { },
  isFacebookConnected: false,
  isTikTokConnected: false,
  isPinterestConnected: false,
  setIsFacebookConnected: () => { },
  setIsTikTokConnected: () => { },
  setIsPinterestConnected: () => { },
  checkConnectStatus: () => false,
  isLoading: false,
  setIsLoading: () => { },
  updateAllConnectStatus: () => { }
})

export const SocialInsightsProvider = ({ children }: { children: React.ReactNode }) => {

  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      name: 'tiktok',
      icon: tiktokIcon,
    },
    {
      name: 'pinterest',
      icon: pinterestIcon,
    },
    {
      name: 'facebook',
      icon: facebookIcon,
    },
    {
      name: 'linkedin',
      icon: linkedinIcon,
    },
    {
      name: 'twitter',
      icon: twitterIcon,
    },
    {
      name: 'instagram',
      icon: instagramIcon,
    },
  ])
  const [currentPlatform, setCurrentPlatform] = useState<PlatformType>(platforms[0].name)
  const [dateRange, setDateRange] = useState<DateRange>('last_week')
  const [dataMetric, setDataMetric] = useState<DataMetric>('page')
  const [topTab, setTopTab] = useState<'social' | 'click' | 'follower'>('social')
  const [isFacebookConnected, setIsFacebookConnected] = useState(false)
  const [isTikTokConnected, setIsTikTokConnected] = useState(false)
  const [isPinterestConnected, setIsPinterestConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  function checkConnectStatus(platformName: PlatformType) {
    switch (platformName) {
      case 'facebook':
        return isFacebookConnected
      case 'tiktok':
        return isTikTokConnected
      case 'pinterest':
        return isPinterestConnected
      default:
        return false
    }
  }


  useEffect(() => {
    setDateRange('last_week')
  }, [topTab])

  useEffect(() => {
    updateAllConnectStatus()
  }, [])

  async function updateAllConnectStatus() {
    setIsLoading(true)
    Promise.all([
      checkFacebookIsConnected(),
      checkTikTokIsConnected(),
      checkPinterestIsConnected(),
    ]).then(([facebookConnect, tiktokConnect, pinterestConnect]) => {
      setIsFacebookConnected(facebookConnect)
      setIsTikTokConnected(tiktokConnect)
      setIsPinterestConnected(pinterestConnect)
      setIsLoading(false)
    })
  }

  return (
    <SocialInsightsContext.Provider value={{
      platforms,
      currentPlatform, setCurrentPlatform,
      dateRange, setDateRange,
      dataMetric, setDataMetric,
      topTab, setTopTab,
      isFacebookConnected, isTikTokConnected,
      setIsFacebookConnected, setIsTikTokConnected,
      isPinterestConnected, setIsPinterestConnected,
      checkConnectStatus,
      isLoading, setIsLoading,
      updateAllConnectStatus,
    }}>
      {children}
    </SocialInsightsContext.Provider>
  )
}

