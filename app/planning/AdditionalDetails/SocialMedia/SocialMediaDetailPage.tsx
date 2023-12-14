'use client';
import React, { FC, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { BiCalendar, BiFileBlank } from 'react-icons/bi';
import { Chip, tabs, useDisclosure } from '@nextui-org/react';
import { message } from 'antd';
import axios from 'axios';

// import PinterestAnalyticsModal from "@/app/planning/Analytics/PinterestAnalyticsModal";
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { useSeoAnalyzerContext } from '@/context/seo';
import { DETAIL_LIMIT } from '@/data/constant';
import Image from 'next/image';
import styles from '../planning.module.css';
import { popupCenter } from '@/utils/popup';

import TargetAudience from '../Common/TargetAudience';
import CustomerProfile from '../Common/CustomerProfile';
import BusinessObjectives from '../Common/BusinessObjectives';
import SubmitAndBackButton from '../SubmitAndBackButton';
import PlatformSelection from '../Common/PlatformSelection';
import SocialMediaConnect from './SocialMediaConnect';
import MarketingTemplate from '../EmailMarketing/MarketingTemplate';
import Schedule from '../EmailMarketing/EmailSchedule';
import UploadAssest from './UploadAssest';

type SocialMediaDetailPageProps = {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
  activeTab: number;
  setActiveTab: (value: number) => void;
};

export const socialMediaObjectives = [
  'Increase Sales',
  'Brand Awareness',
  'Website Traffic',
  'Engagement'
];

export const socialMediaTabsList = [
  {
    title: 'Instagram',
    icon: '/images/planning/instagram.svg',
    page: '/auth/social/instagram',
    provider: 'instagram'
  },
  {
    title: 'Meta',
    icon: '/images/planning/meta.svg',
    page: '/auth/social/facebook',
    provider: 'facebook'
  },
  {
    title: 'Linkedin',
    icon: '/images/planning/linkedin.svg',
    page: '/auth/social/linkedin',
    provider: 'linkedin'
  },
  {
    title: 'Youtube',
    icon: '/images/planning/youtube.svg',
    page: '/auth/social/youtube',
    provider: 'youtube'
  },
  {
    title: 'Pinterest',
    icon: '/images/planning/pinterest.svg',
    page: '/auth/social/pinterest',
    provider: 'pinterest'
  },
  {
    title: 'Reddit',
    icon: '/images/planning/reddit.svg',
    page: '/auth/social/reddit',
    provider: 'reddit'
  },
  {
    title: 'Google Ads',
    icon: '/images/planning/googleads.svg',
    page: '/auth/social/google',
    provider: 'google'
  }
];

const SocialMediaDetailPage: FC<SocialMediaDetailPageProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData,
  setFormData,
  activeTab,
  setActiveTab,
}) => {

  const { company, setCompany } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenAdSchedule, onOpenChange } = useDisclosure();
  const [isSocialAuthenticated, setIsSocialAuthenticated] = useState<{ [key: string]: boolean }>({
    "instagram": false,
    "meta": false,
    "linkedin": false,
    "youtube": false,
    "pinterest": false,
    "google ads": false
  });
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState<boolean>(false);
  const { isOpen: isPinterestAnalyticsModalOpen, onOpen: onOpenPinterestAnalyticsModal, onOpenChange: onOpenPinterestAnalyticsModalChange } = useDisclosure();
  const [messageApi, contextHolder] = message.useMessage();
  const [analyticsData, setAnalyticsData] = useState([]);
  const { data: session, status } = useSession();

  const oauthLogin = () => {
    const selectedProvider: string = socialMediaTabsList[activeTab].provider;
    if (selectedProvider === 'google' || selectedProvider === 'pinterest') {
      popupCenter(socialMediaTabsList[activeTab].page, `${socialMediaTabsList[activeTab].title} Sign In`, () => {
        setIsSocialAuthenticated(prevState => ({
          ...prevState,
          [socialMediaTabsList[activeTab].title.toLowerCase()]: true
        }));

        formik.setValues({
          ...formik.values,
          url: `https://www.pinterest.com/${(session as any)["user"]["name"]}`
        })
      });
    }
  };

  const isCurrentSocialAuthenticated: boolean = useMemo(() => {
    return isSocialAuthenticated[socialMediaTabsList[activeTab].title.toLowerCase()]
  }, [activeTab]);

  const handleAnalyticsDashboard = async () => {
    if (status === "authenticated" && (session as any)[socialMediaTabsList[activeTab].provider] && formik.values.websiteURL
      && isCurrentSocialAuthenticated) {
      try {
        setIsSocialAuthenticated(prevState => ({
          ...prevState,
          [socialMediaTabsList[activeTab].title.toLowerCase()]: false
        }));

        const pinterestAnalytics = await axios.post(`/api/planning/${socialMediaTabsList[activeTab].title.toLowerCase().replaceAll(" ", "")}?site=${formik.values.websiteURL}`, {
          accessToken: (session as any)[socialMediaTabsList[activeTab].provider].accessToken,
          refreshToken: (session as any)[socialMediaTabsList[activeTab].provider].refreshToken
        });
        setAnalyticsData(pinterestAnalytics.data as []);
        onOpenPinterestAnalyticsModal();

        messageApi.success("Fetched analysis data");
      } catch (error) {
        messageApi.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <PlatformSelection
        formik={formik}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        platforms={socialMediaTabsList}
        setIsEmailAuthenticated={setIsEmailAuthenticated}
        content_type='social media'
      />
      <SocialMediaConnect platforms={socialMediaTabsList} formik={formik} index={3} activeTab={activeTab} />
      <div className='flex android:flex-col desktop:flex-row gap-[15px]'>
        <UploadAssest formData={formData} platforms={socialMediaTabsList} formik={formik} index={4} activeTab={activeTab} />
        <Schedule index={5} content_type='Email' />
      </div>
      <div className='flex android:flex-col desktop:flex-row gap-[15px]'>
        <TargetAudience formik={formik} index={6} />
        <CustomerProfile formik={formik} index={7} />
      </div>

      <BusinessObjectives
        index={8}
        objectives={socialMediaObjectives}
        formData={formData}
        setFormData={setFormData}
      />

      <SubmitAndBackButton
        activeButtonIndex={activeButtonIndex}
        setActiveButtonIndex={setActiveButtonIndex}
        formik={formik}
        formData={formData}
      />
    </div>
  );
};

export default SocialMediaDetailPage;
