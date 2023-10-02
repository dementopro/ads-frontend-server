// Import necessary dependencies and components
import { SocialInsightsContext } from '@/context/socialInsights';
import React, { useContext } from 'react';
import Topbar from '@/app/socialInsights/Topbar';
import SocialMetrics from '@/app/socialInsights/SocialMetrics';
import ClicksMetrics from '@/app/socialInsights/ClicksMetrics';
import FollowerProfile from '@/app/socialInsights/FollowerProfile';

// Define the Dashboard component
const Dashboard = () => {

  // Get the current 'topTab' value from the context
  const { topTab } = useContext(SocialInsightsContext);

  return (
    <>
      <Topbar />
      {/* Render the appropriate sub-component based on the 'topTab' value */}
      {topTab === 'social' && <SocialMetrics />}
      {topTab === 'click' && <ClicksMetrics />}
      {topTab === 'follower' && <FollowerProfile />}
    </>
  );
}

// Export the Dashboard component as the default export
export default Dashboard;