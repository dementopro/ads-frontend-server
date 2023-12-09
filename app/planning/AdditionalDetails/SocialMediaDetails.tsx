'use client';

import React, { FC, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { BiCalendar, BiFileBlank } from 'react-icons/bi';
import { Chip, tabs, useDisclosure } from '@nextui-org/react';
import { message } from 'antd';
import { useFormik } from 'formik';
import axios from 'axios';

// import PinterestAnalyticsModal from "@/app/planning/Analytics/PinterestAnalyticsModal";
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { useSeoAnalyzerContext } from '@/context/seo';
import { DETAIL_LIMIT } from '@/data/constant';
import Button from '../TabButton';
import Image from 'next/image';
import styles from '../planning.module.css';
import EmailScheduleModal from './EmailScheduleModal';
import { popupCenter } from '@/utils/popup';
import { formatTimeOfDay } from '@/utils';

const PinterestAnalyticsModal = dynamic(() => import("@/app/planning/Analytics/PinterestAnalyticsModal"), { ssr: false });

interface SocialMediaDetailsProps {
  formData: CompanyDetailForm;
  activeTab: number;
  setActiveTab: (value: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

export const tabsList = [
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

const SocialMediaDetails: FC<SocialMediaDetailsProps> = ({
  formData,
  formik,
  activeTab,
  setActiveTab,
}) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenAdSchedule, onOpenChange } = useDisclosure();
  const [isSocialAuthenticated, setIsSocialAuthenticated] = useState<{[key: string]: boolean}>({
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
    const selectedProvider: string = tabsList[activeTab].provider;
    if ( selectedProvider === 'google' || selectedProvider === 'pinterest') {
      popupCenter(tabsList[activeTab].page, `${ tabsList[activeTab].title } Sign In`, () => {
        setIsSocialAuthenticated(prevState => ({
          ...prevState,
          [tabsList[activeTab].title.toLowerCase()]: true
        }));

        formik.setValues({
          ...formik.values,
          url: `https://www.pinterest.com/${(session as any)["user"]["name"]}`
        })
      });
    }
  };
  
  const isCurrentSocialAuthenticated: boolean = useMemo(() => {
    return isSocialAuthenticated[tabsList[activeTab].title.toLowerCase()]
  }, [activeTab]);
  
  const handleAnalyticsDashboard = async () => {
    if (status === "authenticated" && (session as any)[tabsList[activeTab].provider] && formik.values.websiteURL
      && isCurrentSocialAuthenticated) {
      try {
        setIsSocialAuthenticated(prevState => ({
          ...prevState,
          [tabsList[activeTab].title.toLowerCase()]: false
        }));

        const pinterestAnalytics = await axios.post(`/api/planning/${tabsList[activeTab].title.toLowerCase().replaceAll(" ", "")}?site=${formik.values.websiteURL}`, {
          accessToken: (session as any)[tabsList[activeTab].provider].accessToken,
          refreshToken: (session as any)[tabsList[activeTab].provider].refreshToken
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
    <>
      {contextHolder}
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className={`col-span-12 !mt-0 flex items-end`}>
          {tabsList.map((tab, i) => (
            <Button
              key={`tab_${i}`}
              isActivated={activeTab == i}
              onClick={() => {
                setIsEmailAuthenticated(false);
                setActiveTab(i);
                formik.setValues({
                  ...formik.values,
                  socialMediaType: tab.title.toLowerCase()
                });
              }}
              className='w-full md:w-auto'
            >
              <Image
                src={tab.icon}
                alt={'SEO (off-page)'}
                width={24}
                height={24}
              />
              <span className="hidden truncate md:block" title="SEO (off-page)">
                {tab.title}
              </span>
            </Button>
          ))}
        </div>
        <div className={`${styles.div} col-span-12 !mt-0`}>
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <h6 className="text-[15px] text-white not-italic font-medium leading-[normal]">
                3.&nbsp;Connect your {tabsList[activeTab].title} account*
              </h6>
              <p className="mt-1 text-sm text-primary-gray">
                Select for 1 click authentication
              </p>
              <div className="mt-6 flex flex-row">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isCurrentSocialAuthenticated ? "bg-background-300" : "bg-primary-purple"} hover:brightness-110`}
                  onClick={oauthLogin}
                  disabled={isCurrentSocialAuthenticated}
                >
                  <Image
                    src={tabsList[activeTab].icon}
                    alt={tabsList[activeTab].title}
                    width={24}
                    height={24}
                  />
                  <p className={`${isCurrentSocialAuthenticated ? "text-primary-gray" : "text-white"} text-[15px]`}>
                    {tabsList[activeTab].title}
                  </p>
                </button>
                <button
                  className={`flex items-center gap-2 ml-3 px-4 py-2 rounded-lg ${isCurrentSocialAuthenticated ? "bg-primary-purple" : "bg-background-300" } hover:brightness-110`}
                  onClick={handleAnalyticsDashboard}
                  disabled={!isCurrentSocialAuthenticated}
                >
                  <p className={`${isCurrentSocialAuthenticated ? "text-white" : "text-primary-gray"} text-[15px]`}>
                    Analytics Dashboard
                  </p>
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="mt-1 text-sm text-primary-gray">
                OR Enter {tabsList[activeTab].title} URL
              </p>
              <input
                className={`border bg-[#1b1c21] text-white pl-[24px] py-[18px] rounded-lg mt-2 ${
                  formik.errors.url && formik.touched.url
                    ? 'border-rose-600'
                    : isCurrentSocialAuthenticated
                    ? 'border-green-600'
                    : 'border-none'
                } w-full `}
                placeholder={`Enter ${tabsList[activeTab].title} address`}
                {...formik.getFieldProps('url')}
                disabled={isCurrentSocialAuthenticated}
              />
              {formik.errors.url && formik.touched.url && (
                <label className="mt-2 text-xs text-rose-600">
                  {formik.errors.url}
                </label>
              )}
            </div>
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            4.&nbsp;Upload media assets for {tabsList[activeTab].title}*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <div className='flex flex-wrap items-center gap-6'>
              {
                company.assets && company.assets.map((img, i) => (
                  <span key={i} className='text-sm text-primary-gray'>
                    {img.name}
                  </span>
                ))
              }
            </div>
            <label className='flex items-center gap-2 mt-4 cursor-pointer text-primary-purple' htmlFor='upload_image'>
              <BiFileBlank />
              Upload Asset
              <input type='file' multiple id='upload_image' accept="image/*" onChange={(e) => {
                if (e.currentTarget.files && e.currentTarget.files.length > 0) {
                  const assets = [...new Array(e.currentTarget.files.length)].map((_, i) => e.currentTarget.files?.item(i) as File);
                  setCompany({
                    ...company,
                    name: formik.values.companyName,
                    business_objectives: formData.business_objectives,
                    competitors: formik.values.competitors,
                    content_type: formData.content_type,
                    customer_profile: formik.values.idealCustomerProfile,
                    description: formik.values.description,
                    product_description: formik.values.sellingDescription,
                    target_audice: formik.values.targetAudience,
                    website: formik.values.websiteURL,
                    email: formik.values.email,
                    marketing_template: formik.values.marketing_template,
                    schedule: formik.values.schedule,
                    url: formik.values.url,
                    assets
                  });
                }
              }} hidden />
            </label>
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            5.&nbsp;Add your target audience*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`border bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 rounded-lg ${
                formik.errors.targetAudience && formik.touched.targetAudience
                  ? 'border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Ex: Gender, Age, Interests & Hobbies"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('targetAudience')}
            />
            <label className={`text-xs text-right mt-2 ${(formik.errors.targetAudience && formik.touched.targetAudience) ? 'text-rose-600' : 'text-primary-gray'}`}>
              {formik.values.targetAudience.length} / {DETAIL_LIMIT}
            </label>
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            6.&nbsp;Add ideal customer profile*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.idealCustomerProfile &&
                formik.touched.idealCustomerProfile
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Ex: Title, income level, pain points, goals & aspirations, buying habits, device usage"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('idealCustomerProfile')}
            />
            <label className={`text-xs text-right mt-2 ${(formik.errors.idealCustomerProfile && formik.touched.idealCustomerProfile) ? 'text-rose-600' : 'text-primary-gray'}`}>
              {formik.values.idealCustomerProfile.length} / {DETAIL_LIMIT}
            </label>
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            7.&nbsp;Provide your Ad scheduling*
          </p>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-300 hover:brightness-110 text-primary-gray"
            onClick={() => {
              onOpenAdSchedule();
              setCompany({
                ...company,
                name: formik.values.companyName,
                business_objectives: formData.business_objectives,
                competitors: formik.values.competitors,
                content_type: formData.content_type,
                customer_profile: formik.values.idealCustomerProfile,
                description: formik.values.description,
                product_description: formik.values.sellingDescription,
                target_audice: formik.values.targetAudience,
                website: formik.values.websiteURL,
                email: formik.values.email,
                marketing_template: formik.values.marketing_template,
                schedule: formik.values.schedule,
                url: formik.values.url
              });
            }}
          >
            <BiCalendar className="w-6 h-6" />
            <p className="text-primary-gray text-[15px]">Ad Schedule</p>
          </button>
          <div className='flex flex-wrap w-full gap-3'>
            {
              Object.keys(company.schedule).map((key, _) => {
                return company.schedule[key].map((time: number, _i: number) => (
                  <Chip key={_i} className='rounded-lg'>
                    {key + ' ' + formatTimeOfDay(time)}
                  </Chip>
                ))
              })
            }
          </div>
          <EmailScheduleModal isOpen={isOpen} onOpenChange={onOpenChange} title="Ad Schedule" description="Select the days & times you would like to schedule your ads" />
        </div>
      </div>

      <PinterestAnalyticsModal isOpen={isPinterestAnalyticsModalOpen} onOpenChange={onOpenPinterestAnalyticsModalChange} formik={formik} analyticsData={analyticsData as []} />
    </>
  );
};

export default SocialMediaDetails;
