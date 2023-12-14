'use client';
import React, { FC, useState } from 'react';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import TargetAudience from '../Common/TargetAudience';
import CustomerProfile from '../Common/CustomerProfile';
import BusinessObjectives from '../Common/BusinessObjectives';
import SubmitAndBackButton from '../SubmitAndBackButton';
import PlatformSelection from '../Common/PlatformSelection';
import EmailConnect from './EmailConnect';
import MarketingTemplate from '../EmailMarketing/MarketingTemplate';
import Schedule from './EmailSchedule';

import { useSeoAnalyzerContext } from '@/context/seo';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import MicrosoftLogin from 'react-microsoft-login';
import { Chip, useDisclosure } from '@nextui-org/react';

export const emailObjectives = [
  'Lead Generation',
  'Customer Acquisition',
  'Customer Retention',
  'Brand Awareness',
  'Product Launches',
  'Event Promotions',
  'Sales Promotions',
  'Feedback & Surveys',
];

export const emailTabList = [
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

type EmailMarketingDetailPageProps = {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
  activeTab: number;
  setActiveTab: (value: number) => void;
};

const EmailMarketingDetailPage: FC<EmailMarketingDetailPageProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData,
  setFormData,
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
    <div className="flex flex-col gap-[14px]">
      <PlatformSelection
        formik={formik}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        platforms={emailTabList}
        setIsEmailAuthenticated={setIsEmailAuthenticated}
        content_type='email marketing'
      />
      <EmailConnect platforms={emailTabList} formik={formik} index={3} activeTab={activeTab} />
      <div className='flex android:flex-col desktop:flex-row gap-[15px]'>
        <MarketingTemplate formik={formik} index={4} />
        <Schedule index={5} content_type='Email' />
      </div>
      <div className='flex android:flex-col desktop:flex-row gap-[15px]'>
        <TargetAudience formik={formik} index={6} />
        <CustomerProfile formik={formik} index={7} />
      </div>

      <BusinessObjectives
        index={8}
        objectives={emailObjectives}
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

export default EmailMarketingDetailPage;
