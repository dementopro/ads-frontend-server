
import { SocialInsightsContext } from '@/context/socialInsights'
import React, { useContext } from 'react'
import Topbar from '@/app/socialInsights/Topbar';
import SocialMetrics from '@/app/socialInsights/SocialMetrics';
import ClicksMetrics from '@/app/socialInsights/ClicksMetrics';
import FollowerProfile from '@/app/socialInsights/FollowerProfile';


const Dashboard = () => {

  const { topTab } = useContext(SocialInsightsContext)

  return (
    <>
      <Topbar />
      {topTab === 'social' && <SocialMetrics />}
      {topTab === 'click' && <ClicksMetrics />}
      {topTab === 'follower' && <FollowerProfile />}
    </>
  )
}

export default Dashboard

