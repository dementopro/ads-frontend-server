'use client';
import React, { useEffect, useMemo, useRef } from 'react';
import { redirect } from 'next/navigation';
import Script from 'next/script';

import AdminSidebar from '@/components/admin/AdminSidebar'; // Importing the AdminSidebar component
import ContentHeader from '@/components/admin/ContentHeader'; // Importing the ContentHeader component
import { isUserLogin } from '@/lib/auth';
import { useAccountContext, type AccountInterface } from '@/context/account';
import { useTutorialsContext } from '@/context/tutorials';
// Define the AdminLayout component
const AdminLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const { account, isLoading, setAccount, setIsLogin } = useAccountContext();
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();

  useEffect(() => {
    if (isLoading) {

    } else {
      if (!account){
        redirect ('/login')
      }
      else{
        setIsLogin(true)
      }
    }
  }, [account, isLoading]);

  if (isLoading) {
    return <div className='flex flex-col h-screen max-h-screen min-w-full admin-content'>

      </div>
  };

  const overFlowVisibleCases = isInTutorialMode && ((tutorialCampaign === 'HOME' && currentGuideMode.mode === 'GENERAL') || (tutorialCampaign === 'SEO' && currentGuideMode.mode === 'RECOMMENDATION') || (tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL') || (tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OAUTH') || (tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'ADDITIONAL1') || (tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'ADDITIONAL2') || (tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OBJECTIVES') || (tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OAUTH') || (tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'ADDITIONAL1') || (tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'ADDITIONAL2') || (tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OBJECTIVES'));

  return (
    <div className='flex flex-col h-screen max-h-screen min-w-full'>
      <div className='h-min'>
        {/* Render the ContentHeader component */}
        <ContentHeader />
      </div>
      <div className={`flex flex-1 h-full overflow-auto ${overFlowVisibleCases ? 'overflow-visible' : 'overflow-auto'}`}>
        <div className='w-min'>
          {/* Render the AdminSidebar component */}
          <AdminSidebar />
        </div>
        <div className={`admin-content max-h-full w-full ${overFlowVisibleCases ? 'overflow-visible' : 'overflow-auto'}`}>
          {/* Render the children components, which will represent the content of the admin pages */}
          {children}
        </div>
      </div>
      <div className="fixed" style={{ bottom: '8px', right: '8px' }}>
        <iframe src="/documents/chat_bot.html" frameBorder="0" width="80px" height="80px"></iframe>
      </div>
    </div>
  );
};

export default AdminLayout;
