import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import React, { FC, useState } from 'react';

import Button from '../TabButton';
import Image from 'next/image';
import styles from '../planning.module.css';
import { useFormik } from 'formik';
import { BiCalendar } from 'react-icons/bi';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import MicrosoftLogin from 'react-microsoft-login';
import { Chip, useDisclosure } from '@nextui-org/react';
import EmailScheduleModal from './EmailScheduleModal';
import { DETAIL_LIMIT } from '@/data/constant';
import EmailEditModal from './EmailEditModal';
import { useSeoAnalyzerContext } from '@/context/seo';
import { formatTimeOfDay } from '@/utils';

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
  const { company } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenEmailSchedule, onOpenChange } = useDisclosure();
  const [isOpenEmailEditModal, setIsOpenEmailEditModal] = useState<boolean>(false);
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState<boolean>(false);

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
        <div className={`col-span-12 !mt-0 flex items-end`}>
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
        </div>

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
      </div>

      <EmailEditModal isOpen={isOpenEmailEditModal} onOpenChange={() => setIsOpenEmailEditModal(false)} />
    </>
  );
};

export default EmailMarketingDetails;
