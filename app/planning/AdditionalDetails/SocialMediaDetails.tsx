'use client';

import React, { ComponentType, FC, Fragment, useEffect, useMemo, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { BiCalendar, BiFileBlank } from 'react-icons/bi';
import { Chip, tabs, useDisclosure } from '@nextui-org/react';
import { message } from 'antd';
import { useFormik } from 'formik';
import axios from 'axios';

// import PinterestAnalyticsModal from "@/app/planning/Analytics/PinterestAnalyticsModal";
import { type SocialAccountInterface, type SocialAccountsInterface, useAccountContext } from '@/context/account';
import { useSeoAnalyzerContext } from '@/context/seo';
import { useTutorialsContext } from '@/context/tutorials';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import CloseButton from '@/components/tutorial/CloseButton';
import { TopToLeftCurveLineArrow, BottomToRightCurveLineArrow, MiddleToRightCurveLineArrow, BottomToLeftCurveLine, TopToRightCurveLineArrow } from '@/components/tutorial/Arrows';
import { DETAIL_LIMIT } from '@/data/constant';
import Button from '../TabButton';
import EmailScheduleModal from './EmailScheduleModal';
import type { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { popupCenter } from '@/utils/popup';
import { formatTimeOfDay } from '@/utils';
import styles from '../planning.module.css';

const PinterestAnalyticsModal = dynamic(() => import("@/app/planning/Analytics/PinterestAnalyticsModal"), { ssr: false });
const MetaAnalyticsModal = dynamic(() => import("@/app/planning/Analytics/MetaAnalyticsModal"), { ssr: false });

interface SocialMediaDetailsProps {
  formData: CompanyDetailForm;
  activeTab: number;
  setActiveTab: (value: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

interface SocialTab {
  title: string;
  uri: string;
  icon: string;
  page: string;
  provider: string;
  url: (userid: string) => string;
  analyticsModalComponent?: ComponentType;
}

export const tabsList: SocialTab[] = [
  {
    title: 'Instagram',
    uri: 'instagram',
    icon: '/images/planning/instagram.svg',
    page: '/auth/social/instagram',
    provider: 'instagram',
    url: (userid: string) => `https://www.instagram.com/${userid}`
  },
  {
    title: 'Meta',
    uri: 'meta',
    icon: '/images/planning/meta.svg',
    page: '/auth/social/facebook',
    provider: 'facebook',
    url: (userid: string) => `https://www.facebook.com/profile.php?id=${userid}`
  },
  {
    title: 'Linkedin',
    uri: 'linkedin',
    icon: '/images/planning/linkedin.svg',
    page: '/auth/social/linkedin',
    provider: 'linkedin',
    url: (userid: string) => `https://www.linkedin.com/${userid}`
  },
  {
    title: 'Youtube',
    uri: 'youtube',
    icon: '/images/planning/youtube.svg',
    page: '/auth/social/youtube',
    provider: 'youtube',
    url: (userid: string) => `https://www.youtube.com/${userid}`
  },
  {
    title: 'Pinterest',
    uri: 'pinterest',
    icon: '/images/planning/pinterest.svg',
    page: '/auth/social/pinterest',
    provider: 'pinterest',
    url: (userid: string) => `https://www.pinterest.com/${userid}`
  },
  {
    title: 'Reddit',
    uri: 'reddit',
    icon: '/images/planning/reddit.svg',
    page: '/auth/social/reddit',
    provider: 'reddit',
    url: (userid: string) => `https://www.reddit.com/${userid}`
  },
  {
    title: 'Google Ads',
    uri: 'googleads',
    icon: '/images/planning/googleads.svg',
    page: '/auth/social/google',
    provider: 'google',
    url: (userid: string) => `https://ads.google.com/${userid}`
  }
];

const SocialMediaDetails: FC<SocialMediaDetailsProps> = ({
  formData,
  formik,
  activeTab,
  setActiveTab,
}) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  const { socialAccounts, setSocialAccounts } = useAccountContext();
  const { isOpen, onOpen: onOpenAdSchedule, onOpenChange } = useDisclosure();
  const { isOpen: isAnalyticsModalOpen, onOpen: onOpenAnalyticsModal, onOpenChange: onOpenChangeAnalyticsModal } = useDisclosure();
  const [selectedAdAccount, setSelectedAdAccount] = useState(null);
  const [adAccounts, setAdAccounts] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState([]);
  const [isOAuthFinished, setIsOAuthFinished] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();
  
  const currentProvider: string = useMemo(() => {
    setAdAccounts([]);
    setAnalytics([]);
    return tabsList[activeTab].provider as string
  }, [tabsList, activeTab]);

  const isCurrentSocialAuthenticated: boolean = useMemo(() => {
    const account: SocialAccountInterface = socialAccounts[currentProvider];
    return !!account;
  }, [socialAccounts, currentProvider]);

  const oauthLogin = async () => {
    try {
      await signOut({redirect: false});
      const selectedProvider: string = currentProvider;
      const providers = [
        'google',
        'pinterest',
        'instagram',
        'facebook'
      ];
      if (providers.indexOf(selectedProvider) > -1) {
        // void signIn(selectedProvider, {});
        popupCenter(tabsList[activeTab].page, `${tabsList[activeTab].title} Sign In`, () => {
          setIsOAuthFinished(true);
        });
      }
    } catch (error: any) {
      messageApi.error(error.message || "Something went wrong");
    }
  };


  const handleAnalyticsDashboard = async () => {
    if (status === "authenticated" && socialAccounts[currentProvider] && formik.values.websiteURL && isCurrentSocialAuthenticated) {
      try {
        console.log("uri: ", tabsList[activeTab].uri);
        const accountsResponse = await axios.post(`/api/planning/${tabsList[activeTab].uri}`, {
          accountId: socialAccounts[currentProvider].accountId,
          accessToken: socialAccounts[currentProvider].accessToken,
          refreshToken: socialAccounts[currentProvider].refreshToken
        });

        const accounts: any[] = accountsResponse.data;
        accounts.length > 0 ? setSelectedAdAccount(accounts[0]) : setSelectedAdAccount(null);
        setAdAccounts(accounts);
        onOpenAnalyticsModal();
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

  // useEffect(() => {
  //   if (searchParams) {
  //     const socialPlatform = searchParams.get('social');
  //     if (socialPlatform) {
  //       const index = tabsList.findIndex((tab: SocialTab) => tab.uri === socialPlatform);
  //       if (index > -1) {
  //         setActiveTab(index);
  //       } else setActiveTab(0);
  //     } else setActiveTab(0);
  //   }
  // }, [searchParams]);

  useEffect(() => {
    setIsOAuthFinished(!!socialAccounts[currentProvider]);
    let formikValues = {
      ...formik.values,
      socialMediaType: tabsList[activeTab].title.toLowerCase()
    }

    if (socialAccounts[currentProvider]) {
      formikValues.url = tabsList[activeTab].url(socialAccounts[currentProvider].accountId);
    } else {
      formikValues.url = ''
    }

    formik.setValues(formikValues);
  }, [currentProvider]);

  useEffect(() => {
    if (isOAuthFinished && session && (session as any)["user"] && (session as any)[currentProvider]) {
      const sessionData: any = session;
      formik.setValues({
        ...formik.values,
        url: sessionData[currentProvider] ? tabsList[activeTab].url(sessionData[currentProvider].accountId) : ''
      });

      setSocialAccounts(currentProvider, {
        name: sessionData.user.name,
        email: sessionData.user.email || '',
        image: sessionData.user.image || '',
        accessToken: sessionData[currentProvider].accessToken,
        accountId: sessionData[currentProvider].accountId,
        expiresAt: new Date(sessionData[currentProvider].expiresAt),
        refreshToken: sessionData[currentProvider].refreshToken
      });
    }
  }, [isOAuthFinished, session]);

  useEffect(() => {
    (async () => {
      if (selectedAdAccount) {
        const analytics = await axios.post(`/api/planning/${tabsList[activeTab].uri}/getAnalytics?ad_account_id=${(selectedAdAccount as any).id}`, {
          accessToken: socialAccounts[currentProvider].accessToken,
          refreshToken: socialAccounts[currentProvider].refreshToken,
          accountAccessToken: (selectedAdAccount as any)?.access_token || ''
        });
        setAnalytics(analytics.data as []);
      }
    })();
  }, [selectedAdAccount]);

  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div id="social-media-platforms-menu" className={`col-span-12 !mt-0 flex items-end relative`}>
          {tabsList.map((tab, i) => (
            <Button
              key={`tab_${i}`}
              isActivated={activeTab == i}
              onClick={() => {
                setActiveTab(i);
              }}
              className='w-full md:w-auto'
            >
              <Image
                src={tab.icon}
                alt={tab.title}
                width={24}
                height={24}
              />
              <span className="hidden truncate md:block">
                {tab.title}
              </span>
            </Button>
          ))}

          {
            isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OAUTH' && (
              <div className="absolute right-full flex flex-col items-end translate-x-[-10px] translate-y-[-10px]">
                <div className={`w-[200px] bg-primary-purple rounded-lg text-white p-3 text-md tutorial-element mr-10 mb-2`}>
                  Choose which accounts you’d like to connect to for social media
                </div>
                <TopToRightCurveLineArrow />
              </div>
            )
          }
        </div>
        <div id="social-oauth-section" className={`relative ${styles.div} col-span-12 !mt-0`}>
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
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg ${isCurrentSocialAuthenticated ? "bg-background-300" : "bg-primary-purple"} hover:brightness-110`}
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

                  {
                    isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OAUTH' && (
                      <div className="absolute top-full right-full flex items-center translate-x-[-10px] translate-y-[-10px] w-fit">
                        <div className={`w-[300px] bg-primary-purple rounded-lg text-white p-3 text-md tutorial-element mr-2`}>
                          Click on the “{tabsList[activeTab].title}” button to connect your account through 1 click authentication.
                        </div>
                        <BottomToLeftCurveLine />
                      </div>
                    )
                  }
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

          {
            isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OAUTH' && (
              <div className="absolute left-0 top-full w-full translate-y-[250px] flex tutorial-element">
                <NavigationButtons />
              </div>
            )
          }
        </div>
      </div>

      <div id="social-media-audience-section" className="grid grid-cols-12 gap-4 mt-8 relative">
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
                    socialMediaType: formik.values.socialMediaType,
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

        {
          isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'ADDITIONAL1' && (
            <Fragment>
              <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-200px] tutorial-element">
                <CloseButton />
              </div>
              <div className="absolute left-[-300px] bottom-full flex items-center tutorial-element w-fit">
                <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element mr-5 mb-10`}>
                  Upload any media assets that you’d like to optimize and watch as our AI generates targeted media based on what you upload
                </div>
                <MiddleToRightCurveLineArrow width={75} height={53} />
              </div>
              <div className="absolute right-[50px] bottom-full flex items-center tutorial-element">
                <TopToLeftCurveLineArrow width={100} height={84} />
                <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-10 mb-20`}>
                  Input additional information about your customers in order to refine recommendations 
                </div>
              </div>
              <div className="absolute left-[50px] top-full w-full translate-y-[100px] flex tutorial-element">
                <NavigationButtons />
              </div>
            </Fragment>
          )
        }
      </div>
      
      <div id="social-customer-schedule-section" className="relative grid grid-cols-12 gap-4 mt-8">
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
                socialMediaType: formik.values.socialMediaType,
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
                return company.schedule[key]?.map((time: number, _i: number) => (
                  <Chip key={_i} className='rounded-lg'>
                    {key + ' ' + formatTimeOfDay(time)}
                  </Chip>
                ))
              })
            }
          </div>
          <EmailScheduleModal isOpen={isOpen} onOpenChange={onOpenChange} title="Ad Schedule" description="Select the days & times you would like to schedule your ads" />
        </div>

        {
          isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'ADDITIONAL2' && (
            <Fragment>
              <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-200px] tutorial-element">
                <CloseButton />
              </div>
              <div className="absolute left-[-300px] bottom-full flex items-center tutorial-element w-fit">
                <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element mr-5 mb-10`}>
                  Enter any email marketing templates you would like to optimize
                </div>
                <MiddleToRightCurveLineArrow width={75} height={53} />
              </div>
              <div className="absolute right-[50px] bottom-full flex items-center tutorial-element">
                <TopToLeftCurveLineArrow width={100} height={84} />
                <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-10 mb-20`}>
                Click on “ad schedule” to enter preferred time and dates for sending out ads.<br/><br/>You can always edit this later.
                </div>
              </div>
              <div className="absolute left-[50px] top-full w-full translate-y-[100px] flex tutorial-element">
                <NavigationButtons />
              </div>
            </Fragment>
          )
        }
      </div>
      
      {(() => {
        const props = {
          formik: formik,
          isOpen: isAnalyticsModalOpen,
          onOpenChange: onOpenChangeAnalyticsModal,
          selectedAdAccount: selectedAdAccount,
          setSelectedAdAccount: setSelectedAdAccount,
          accounts: adAccounts as [],
          analyticsData: analytics as []
        };

        switch (tabsList[activeTab].uri) {
          case "meta":
            return <MetaAnalyticsModal { ...props } />
          case "pinterest":
            return <PinterestAnalyticsModal { ...props } />
        }
      })()}
    </>
  );
};

export default SocialMediaDetails;
