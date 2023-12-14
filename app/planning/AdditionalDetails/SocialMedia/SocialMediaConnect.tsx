'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import styles from '@/./app/planning/planning.module.css';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Input } from 'antd';
import { CompanyForm, CompanyDetailForm } from '@/types/planning';
import { message } from 'antd';
import axios from 'axios';
import { useDisclosure } from '@nextui-org/react';
import { useSeoAnalyzerContext } from '@/context/seo';
import { popupCenter } from '@/utils/popup';
import { socialMediaTabsList } from '@/app/planning/AdditionalDetails/SocialMedia/SocialMediaDetailPage'

const PinterestAnalyticsModal = dynamic(() => import("@/app/planning/Analytics/PinterestAnalyticsModal"), { ssr: false });

type platformsProps = {
  title: string;
  icon: string;
  page: string;
  provider: string;
}

type SocialMediaConnectProps = {
  platforms: platformsProps[];
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
  activeTab: number;
};

const SocialMediaConnect = ({ platforms, formik, index, activeTab }: SocialMediaConnectProps) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenAdSchedule, onOpenChange } = useDisclosure();
  const { isOpen: isPinterestAnalyticsModalOpen, onOpen: onOpenPinterestAnalyticsModal, onOpenChange: onOpenPinterestAnalyticsModalChange } = useDisclosure();
  const [selectedAdAccount, setSelectedAdAccount] = useState(null);
  const [adAccounts, setAdAccounts] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [isOAuthFinished, setIsOAuthFinished] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session, status } = useSession();

  const oauthLogin = () => {
    const selectedProvider: string = socialMediaTabsList[activeTab].provider;
    if (selectedProvider === 'google' || selectedProvider === 'pinterest') {
      popupCenter(socialMediaTabsList[activeTab].page, `${socialMediaTabsList[activeTab].title} Sign In`, () => {
        setIsOAuthFinished(true);
      });
    }
  };

  const isCurrentSocialAuthenticated: boolean = useMemo(() => {
    return !!(session && (session as any)[socialMediaTabsList[activeTab].provider])
  }, [session, activeTab]);

  const handleAnalyticsDashboard = async () => {
    if (status === "authenticated" && (session as any)[socialMediaTabsList[activeTab].provider] && formik.values.websiteURL
      && isCurrentSocialAuthenticated) {
      try {
        const pinterestAnalytics = await axios.post(`/api/planning/${socialMediaTabsList[activeTab].title.toLowerCase().replaceAll(" ", "")}`, {
          accessToken: (session as any)[socialMediaTabsList[activeTab].provider].accessToken,
          refreshToken: (session as any)[socialMediaTabsList[activeTab].provider].refreshToken
        });

        const data = pinterestAnalytics.data;
        data.length > 0 ? setSelectedAdAccount(data[0]) : setSelectedAdAccount(null);
        setAdAccounts(data);
        onOpenPinterestAnalyticsModal();
        messageApi.success("Fetched analysis data");
      } catch (error) {
        messageApi.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsOAuthFinished(false);
    }
  }, []);

  useEffect(() => {
    setIsOAuthFinished(!!(session && (session as any)[socialMediaTabsList[activeTab].provider]));
  }, [activeTab]);

  useEffect(() => {
    if (isOAuthFinished && session && (session as any)["user"]) {
      formik.setValues({
        ...formik.values,
        url: `https://www.pinterest.com/${(session as any)["user"]["name"]}`
      });
    }
  }, [isOAuthFinished, session]);

  useEffect(() => {
    (async () => {
      if (selectedAdAccount) {
        const pinterestAnalytics = await axios.post(`/api/planning/${socialMediaTabsList[activeTab].title.toLowerCase().replaceAll(" ", "")}/getAnalytics?ad_account_id=${(selectedAdAccount as any).id}`, {
          accessToken: (session as any)[socialMediaTabsList[activeTab].provider].accessToken,
          refreshToken: (session as any)[socialMediaTabsList[activeTab].provider].refreshToken
        });

        setAnalytics(pinterestAnalytics.data as []);
      }
    })();
  }, [selectedAdAccount]);

  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Connect your {platforms[activeTab].title} Account
      </div>
      <div className='w-full flex android:flex-col desktop:flex-row gap-[14px]'>
        <div className='w-full flex flex-col gap-[5px] items-start'>
          <div className={`${styles.subHead}`}>
            Select for 1 click Authentication
          </div>
          <button className={`${styles.button}`}
            onClick={handleAnalyticsDashboard}
            disabled={!isCurrentSocialAuthenticated}
          >
            <Image
              src={platforms[activeTab].icon}
              alt={platforms[activeTab].title}
              width={24}
              height={24}
            />
            Analytics Dashboard
          </button>
        </div>
        <div className='w-full flex flex-col gap-[5px] items-start'>
          <div className={`${styles.subHead}`}>
            OR Enter {platforms[activeTab].title}
          </div>
          <Input
            type="text"
            id="url/email"
            className={`${styles['input']} ${formik.errors.url && formik.touched.url
              ? 'border-rose-600'
              : isCurrentSocialAuthenticated
                ? 'border-green-600'
                : 'border-[#3A3A3A]'
              }`}
            placeholder={`Enter ${platforms[activeTab].title} address`}
            {...formik.getFieldProps('url')}
            disabled={isCurrentSocialAuthenticated}
          />
          {formik.errors.url && formik.touched.url && (
            <label className="w-full text-[12px] text-rose-600">
              {formik.errors.url}
            </label>
          )}
        </div>
      </div>
      <PinterestAnalyticsModal
        formik={formik}
        isOpen={isPinterestAnalyticsModalOpen}
        onOpenChange={onOpenPinterestAnalyticsModalChange}
        selectedAdAccount={selectedAdAccount}
        setSelectedAdAccount={setSelectedAdAccount}
        accounts={adAccounts as []}
        analyticsData={analytics as []}
      />
    </div>
  );
};

export default SocialMediaConnect;