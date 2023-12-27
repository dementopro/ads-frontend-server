import Image from 'next/image';
import MicrosoftLogin from 'react-microsoft-login';
import React, { FC, Fragment, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { BiCalendar } from 'react-icons/bi';
import { Chip, useDisclosure } from '@nextui-org/react';
import { useFormik } from 'formik';
import axios from 'axios';

import Button from '../TabButton';
import styles from '../planning.module.css';
import EmailScheduleModal from './EmailScheduleModal';
import { DETAIL_LIMIT } from '@/data/constant';
import EmailEditModal from './EmailEditModal';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import CloseButton from '@/components/tutorial/CloseButton';
import { TopToLeftCurveLineArrow, BottomToRightCuveLine, MiddleToRightCurveLineArrow, BottomToLeftCurveLine, TopToRightCurveLineArrow, LongTopToRightCurveLineArrow } from '@/components/tutorial/Arrows';
import { useSeoAnalyzerContext } from '@/context/seo';
import { useTutorialsContext } from '@/context/tutorials';
import { formatTimeOfDay } from '@/utils';
import type { CompanyDetailForm, CompanyForm } from '@/types/planning';

interface EmailMarketingDetailsProps {
  formData: CompanyDetailForm;
  activeTab: number;
  setActiveTab: (value: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

export const tabsList = [
  {
    title: 'Gmail',
    icon: '/images/planning/gmail.svg',
  },
  {
    title: 'Outlook',
    icon: '/images/planning/outlook.svg',
  },
  {
    title: 'Mailchimp',
    icon: '/images/planning/mailchimp.svg',
  },
  {
    title: 'Yahoo',
    icon: '/images/planning/yahoo.svg',
  },
  {
    title: 'Proton Mail',
    icon: '/images/planning/proton.svg',
  },
];

const EmailMarketingDetails: FC<EmailMarketingDetailsProps> = ({
  formData,
  formik,
  activeTab,
  setActiveTab,
}) => {
  const { isOpen, onOpen: onOpenEmailSchedule, onOpenChange } = useDisclosure();
  const [isOpenEmailEditModal, setIsOpenEmailEditModal] = useState<boolean>(false);
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState<boolean>(false);
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();
  const { company, setCompany } = useSeoAnalyzerContext();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          formik.setValues({
            ...formik.values,
            email: res.data.email,
          });
          setIsEmailAuthenticated(true);
        })
        .catch((err) => console.log(err));
    },
    onError: (err) => {
      console.log('fail:', err);
    },
  });

  const microsoftRedirectURL: string | undefined = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : process.env.NEXT_PUBLIC_PRODUCTION_URL;
  console.log("redirect url: ", microsoftRedirectURL, process.env.NODE_ENV, process.env.NEXT_PUBLIC_PRODUCTION_URL);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div id="mail-platforms-menu" className={`col-span-12 !mt-0 flex items-end`}>
          {tabsList.map((tab, i) => (
            <Button
              key={`tab_${i}`}
              isActivated={activeTab == i}
              onClick={() => {
                setIsEmailAuthenticated(false);
                setActiveTab(i);
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

          {
            isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OAUTH' && (
              <div className="absolute right-full flex flex-col items-end translate-x-[-10px] translate-y-[-10px]">
                <div className={`w-[200px] bg-primary-purple rounded-lg text-white p-3 text-md tutorial-element mr-10 mb-2`}>
                  Choose which accounts you’d like to connect to for email
                </div>
                <TopToRightCurveLineArrow />
              </div>
            )
          }
        </div>
        <div id="mail-oauth-section" className={`relative ${styles.div} col-span-12 !mt-0`}>
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <h6 className="text-[15px] text-white not-italic font-medium leading-[normal]">
                3.&nbsp;Connect your {tabsList[activeTab].title} account*
              </h6>
              <p className="mt-1 text-sm text-primary-gray">
                Select for 1 click authentication
              </p>
              <div className="relative">
                {activeTab === 0 ? (
                  <button
                    className={`flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 ${isEmailAuthenticated === false ? 'hover:brightness-110' : 'grayscale'}`}
                    onClick={() => {
                      login();
                    }}
                    disabled={isEmailAuthenticated}
                  >
                    <Image
                      src={tabsList[activeTab].icon}
                      alt={tabsList[activeTab].title}
                      width={24}
                      height={24}
                    />
                    <p className="text-primary-gray text-[15px]">
                      {tabsList[activeTab].title}
                    </p>
                  </button>
                ) : activeTab === 1 ? (
                  <div className='max-w-fit'>
                    <MicrosoftLogin
                      clientId="4302711c-32c9-4fab-8cdb-5926cac2b5c9"
                      withUserData={true}
                      redirectUri={microsoftRedirectURL}
                      authCallback={(err, data) => {
                        console.log(err, data);
                        if (!err) {
                          formik.setValues({
                            ...formik.values,
                            email: data.mail,
                          });
                          setIsEmailAuthenticated(true);
                        } else {
                          console.log('fail:', err);
                        }
                      }}
                    >
                      <button
                        className={`flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 ${isEmailAuthenticated === false ? 'hover:brightness-110' : 'grayscale'}`}
                        disabled={isEmailAuthenticated}
                      >
                        <Image
                          src={tabsList[activeTab].icon}
                          alt={tabsList[activeTab].title}
                          width={24}
                          height={24}
                        />
                        <p className="text-primary-gray text-[15px]">
                          {tabsList[activeTab].title}
                        </p>
                      </button>
                    </MicrosoftLogin>
                  </div>
                ) : (
                  <button
                    className="flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 hover:brightness-110"
                    onClick={() => {}}
                  >
                    <Image
                      src={tabsList[activeTab].icon}
                      alt={tabsList[activeTab].title}
                      width={24}
                      height={24}
                    />
                    <p className="text-primary-gray text-[15px]">
                      {tabsList[activeTab].title}
                    </p>
                  </button>
                )}

                {
                    isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OAUTH' && (
                      <div className="absolute top-full right-full flex items-center translate-x-[-10px] translate-y-[-10px] w-fit">
                        <div className={`w-[300px] bg-primary-purple rounded-lg text-white p-3 text-md tutorial-element mr-2`}>
                          Click on the “{tabsList[activeTab].title}” button to connect your account through 1 click authentication.
                        </div>
                        <BottomToLeftCurveLine />
                      </div>
                    )
                  }
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="mt-1 text-sm text-primary-gray">
                OR Enter your email
              </p>
              <input
                className={`border bg-[#1b1c21] text-white pl-[24px] py-[18px] rounded-lg mt-2 ${
                  formik.errors.email && formik.touched.email
                    ? 'border-rose-600'
                    : isEmailAuthenticated
                    ? 'border-green-600'
                    : 'border-none'
                } w-full `}
                placeholder="Enter email address"
                {...formik.getFieldProps('email')}
                disabled={isEmailAuthenticated}
              />
              {formik.errors.email && formik.touched.email && (
                <label className="mt-2 text-xs text-rose-600">
                  {formik.errors.email}
                </label>
              )}
            </div>
          </div>

          {
            isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OAUTH' && (
              <div className="absolute left-0 top-full w-full translate-y-[250px] flex tutorial-element">
                <NavigationButtons />
              </div>
            )
          }
        </div>
      </div>
      
      <div id="email-templates-schedule-section" className="relative grid grid-cols-12 gap-4 mt-8">
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            4.&nbsp;Enter your email marketing templates*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.marketing_template &&
                formik.touched.marketing_template
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Copy and paste your email marketing templates"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('marketing_template')}
            />
            <label className={`text-xs text-right mt-2 ${(formik.errors.marketing_template && formik.touched.marketing_template) ? 'text-rose-600' : 'text-primary-gray'}`}>
              {formik.values.marketing_template.length} / {DETAIL_LIMIT}
            </label>
          </div>

          <button className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline" onClick={() => setIsOpenEmailEditModal(true)}>
            Edit Email Template
          </button>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            5.&nbsp;Provide your email scheduling
          </p>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-300 hover:brightness-110 text-primary-gray"
            onClick={() => {
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
              });
              onOpenEmailSchedule();
            }}
          >
            <BiCalendar className="w-6 h-6" />
            <p className="text-primary-gray text-[15px]">Email Schedule</p>
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
          <EmailScheduleModal isOpen={isOpen} onOpenChange={onOpenChange} title='Email Schedule' description='Select the days & times you would like to schedule your emails' />
        </div>

        {
          isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'ADDITIONAL1' && (
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
                  Click on “email schedule” to enter preferred time and dates for sending out emails.<br/><br/>You can always edit this later.
                </div>
              </div>
              <div className="absolute left-[50px] top-full w-full translate-y-[100px] flex tutorial-element">
                <NavigationButtons />
              </div>
            </Fragment>
          )
        }
      </div>
      
      <div id="email-audience-customer-section" className="relative grid grid-cols-12 gap-4 mt-8">
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            6.&nbsp;Add your target audience*
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
            7.&nbsp;Add ideal customer profile*
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
              placeholder="Ex: industry, geography, pain points"
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

        {
          isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'ADDITIONAL2' && (
            <Fragment>
              <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-200px] tutorial-element">
                <CloseButton />
              </div>
              <div className="absolute left-[-150px] bottom-full translate-y-[50px] flex items-center tutorial-element w-fit">
                <div className="flex flex-col">
                  <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element mb-5`}>
                    Input additional information about your customers in order to refine recommendations
                  </div>
                  <div className="ml-16">
                    <BottomToRightCuveLine />
                  </div>
                </div>
                <div className="mb-[200px] ml-10 w-[600px] h-[60px]">
                  <LongTopToRightCurveLineArrow />
                </div>
              </div>
              <div className="absolute left-[50px] top-full w-full translate-y-[100px] flex tutorial-element">
                <NavigationButtons />
              </div>
            </Fragment>
          )
        }
      </div>

      <EmailEditModal isOpen={isOpenEmailEditModal} onOpenChange={() => setIsOpenEmailEditModal(false)} />
    </>
  );
};

export default EmailMarketingDetails;
