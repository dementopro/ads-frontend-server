'use client';
import {
  CompanyForm,
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import { FormikHelpers, useFormik } from 'formik';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Spin, message } from 'antd';
import AdminLayout from '@/layout/admin';
import BackButton from './Recommendations/BackButton';
import BusinessObjectives from './AdditionalDetails/Common/BusinessObjectives';
import { CompanyDetailForm } from '@/types/planning';
import { CompanyValidate } from '@/lib/validate';
import GmailRecommendation from './Recommendations/EmailMarketing/Gmail';
import HorizontalStepper from './HorizontalStepper';
import Image from 'next/image';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import OffPage from './Recommendations/Seo/OffPage';
import OnPage from './Recommendations/Seo/OnPage';
import ReactGATag from '@/components/ReactGATag';
import SubmitAndBackButton from './AdditionalDetails/SubmitAndBackButton';
import axios from '@/lib/axios';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from './AdditionalDetails/Common/TabButton';
import { useSeoAnalyzerContext } from '@/context/seo';
import BugReportModal from '@/components/contactUs/BugReportModal';
import { useDisclosure } from '@nextui-org/react';
import styles from './planning.module.css';

import SeoDetailPage from './AdditionalDetails/Seo/SeoDetailPage';
import EmailMarketingDetailPage from './AdditionalDetails/EmailMarketing/EmailMarketingDetailPage';
import SocialMediaDetailPage from './AdditionalDetails/SocialMedia/SocialMediaDetailPage';
import { seoTabsList } from './AdditionalDetails/Seo/SeoDetailPage';
import { socialMediaTabsList } from './AdditionalDetails/SocialMedia/SocialMediaDetailPage';
import { emailTabList } from './AdditionalDetails/EmailMarketing/EmailMarketingDetailPage';

const PlanningPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { company } = useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<IPlan | null>(null);
  const [planList, setPlanList] = useState<IPlanningObj[] | null>(null);
  const [planId, setPlanId] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);
  const [formData, setFormData] = useState<CompanyDetailForm>({
    name: '',
    website: '',
    description: '',
    product_description: '',
    target_audice: '',
    content_type: 'SEO',
    customer_profile: '',
    competitors: '',
    business_objectives: [],
    email: '',
    url: '',
    marketing_template: '',
    schedule: {},
    assets: []
  });

  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState<boolean>(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(1);
  const [activeSeoType, setActiveSeoType] = useState<number>(0);
  const { isOpen: isBugReportModalOpen, onOpen: onOpenBugReportModal, onOpenChange: onOpenBugReportModalChange, onClose: onCloseBugReportModal } = useDisclosure();

  const formik = useFormik<CompanyForm>({
    initialValues: {
      companyName: '',
      websiteURL: '',
      description: '',
      sellingDescription: '',
      idealCustomerProfile: '',
      targetAudience: '',
      competitors: '',
      email: '',
      url: '',
      marketing_template: '',
      schedule: {},
    },
    onSubmit,
    validate: CompanyValidate,
  });

  useEffect(() => {
    if (company) {
      // if (company.name === '' || company.website === '' || company.description === '') {
      //   router.push('/home');
      // }
      // if (company.name === '' || company.website === '' || company.description === '') {
      //   router.push('/home');
      // }

      formik.setValues({
        companyName: company.name,
        competitors: company.competitors,
        description: company.description,
        sellingDescription: company.product_description,
        email: company.email,
        idealCustomerProfile: company.customer_profile,
        marketing_template: company.marketing_template,
        schedule: company.schedule,
        targetAudience: company.target_audice,
        websiteURL: company.website,
        url: company.url
      })
      setFormData({
        ...company
      })
    }
  }, [company])

  useEffect(() => {
    if (searchParams) {
      const step = parseInt(searchParams.get('step') || '1');
      const type = parseInt(searchParams.get('type') || '0');
      setActiveButtonIndex(step);
      setActiveSeoType(type);
    }
  }, [searchParams]);

  async function onSubmit(
    values: CompanyForm,
    actions: FormikHelpers<CompanyForm>
  ) { }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value);
  }

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/planning',
          title: 'Planning - AdsGency AI',
        }}
      />
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />
      <Spin spinning={isGenerating} wrapperClassName="relative">
        <div className="w-full flex flex-col gap-[24px]">
          <div className="flex flex-col justify-center">
            {activeButtonIndex == 0 && (
              <div className="flex gap-[8px] justify-start text-[24px] font-medium text-white">
                <div> ✨ </div>
                <div> Get Started </div>
              </div>
            )}

            {activeButtonIndex == 1 && (
              <div className="flex flex-col gap-[16px] justify-start items-start">
                <div className="flex gap-[8px] justify-start text-[24px] font-medium text-white">
                  <div> 📋 </div>
                  <div> Let’s gather some more information </div>
                </div>
                <div className={`${styles.button}`}>
                  Content Type: {formData?.content_type}
                </div>
              </div>
            )}

            {activeButtonIndex == 2 && (
              <div className="flex flex-col gap-[16px] justify-start items-start">
                <div className="flex gap-[8px] justify-start text-[24px] font-medium text-white">
                  <div> 💡 </div>
                  <div> Recommendations </div>
                </div>
                <div className={`${styles.button}`}>
                  Content Type: {formData?.content_type}
                </div>
              </div>
            )}
          </div>

          <HorizontalStepper
            activeButtonIndex={activeButtonIndex}
            setActiveButtonIndex={setActiveButtonIndex}
            formik={formik}
            formData={formData}
          />

          {activeButtonIndex == 1 &&
            (formData.content_type.toLowerCase() == 'seo' && (
              <SeoDetailPage
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
                setFormData={setFormData}
              />
            ))}
          {activeButtonIndex == 1 &&
            (formData.content_type.toLowerCase() == 'social media' && (
              <SocialMediaDetailPage
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
                setFormData={setFormData}
                activeTab={activeSeoType}
                setActiveTab={setActiveSeoType}
              />
            ))}
          {activeButtonIndex == 1 &&
            (formData.content_type.toLowerCase() == 'email marketing' && (
              <EmailMarketingDetailPage
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
                setFormData={setFormData}
                activeTab={activeSeoType}
                setActiveTab={setActiveSeoType}
              />
            ))}
          {activeButtonIndex == 2 &&
            (formData.content_type.toLowerCase() == 'seo' ? (
              <>
                <div className="flex flex-row flex-wrap items-start gap-[20px] self-stretch border-b-1 border-[#27282F]">
                  {seoTabsList.map((tab, i) => (
                    <Button
                      key={`tab_${i}`}
                      isActivated={activeSeoType == i}
                      onClick={() => setActiveSeoType(i)}
                    >
                      <Image src={tab.icon} alt={tab.title} width={24} height={24} />
                      <span className='truncate' title='SEO (off-page)'>{tab.title}</span>
                    </Button>
                  ))}
                </div>
                {activeSeoType == 0 ? <OnPage /> : <OffPage />}
                <BackButton
                  activeButtonIndex={activeButtonIndex}
                  setActiveButtonIndex={setActiveButtonIndex}
                />
              </>
            ) : (formData.content_type.toLowerCase() == 'social media' ?
              <>
                <div className="flex flex-row flex-wrap items-start gap-[20px] self-stretch border-b-1 border-[#27282F]">
                  {socialMediaTabsList.map((tab, i) => (
                    <Button
                      key={`tab_${i}`}
                      isActivated={activeSeoType == i}
                      onClick={() => setActiveSeoType(i)}
                    >
                      <Image src={tab.icon} alt={tab.title} width={24} height={24} />
                      <span className='truncate' title='SEO (off-page)'>{tab.title}</span>
                    </Button>
                  ))}
                </div>
                {activeSeoType == 0 ? <OnPage /> : <OffPage />}
                <BackButton
                  activeButtonIndex={activeButtonIndex}
                  setActiveButtonIndex={setActiveButtonIndex}
                />
              </>
            :
              <>
                <div className="flex flex-row flex-wrap items-start gap-[20px] self-stretch border-b-1 border-[#27282F]">
                  {emailTabList.map((tab, i) => (
                    <Button
                      key={`tab_${i}`}
                      isActivated={activeSeoType == i}
                      onClick={() => setActiveSeoType(i)}
                    >
                      <Image src={tab.icon} alt={tab.title} width={24} height={24} />
                      <span className='truncate' title='SEO (off-page)'>{tab.title}</span>
                    </Button>
                  ))}
                </div>
                {activeSeoType == 0 ? <GmailRecommendation /> : <GmailRecommendation />}
                <BackButton
                  activeButtonIndex={activeButtonIndex}
                  setActiveButtonIndex={setActiveButtonIndex}
                />
              </>
            ))}
          <div className="flex justify-end items-center mt-[10px] gap-[5px] text-[14px] text-[#ABABAB] font-normal">
            <div className='text-right'>
              Find a bug or encountering an error? Submit an issue report with us &nbsp;
              <button className="font-medium underline"
                onClick={() => {
                  onOpenBugReportModal();
                }}>
                here
              </button>
              <BugReportModal isOpen={isBugReportModalOpen} onOpenChange={onOpenBugReportModalChange} onClose={onCloseBugReportModal} />
            </div>
            <Image
              width={28}
              height={28}
              src={'/images/admin/plan/info.svg'}
              alt="#"
            />
          </div>
        </div>
      </Spin>
    </AdminLayout >
  );
};

export default PlanningPage;
