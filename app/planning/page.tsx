'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';
import { Spin, message } from 'antd';
import Image from 'next/image';
import { FormikHelpers, useFormik } from 'formik';
import axios from '@/lib/axios';

import { useSeoAnalyzerContext } from '@/context/seo';
import { useTutorialsContext } from '@/context/tutorials';
import BugReportModal from '@/components/contactUs/BugReportModal';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import ReactGATag from '@/components/ReactGATag';
import CloseButton from '@/components/tutorial/CloseButton';
import AdminLayout from '@/layout/admin';
import { CompanyValidate } from '@/lib/validate';
import SocialMediaDetails from './AdditionalDetails/SocialMediaDetails';
import SubmitAndBackButton from './AdditionalDetails/SubmitAndBackButton';
import SocialMediaRecommendation from './Recommendations/SocialMedia';
import OnPage from './Recommendations/OnPage';
import BusinessObjectives from './AdditionalDetails/BusinessObjectives';
import EmailMarketingDetails, {
  tabsList,
} from './AdditionalDetails/EmailMarketingDetails';
import InfoGraphicsDetails from './AdditionalDetails/InfographicsDetails';
import LandingPageDetails from './AdditionalDetails/LandingPageDetails';
import { tabsList as SocialMediaTabs } from './AdditionalDetails/SocialMediaDetails';
import BackButton from './Recommendations/BackButton';
import GmailRecommendation from './Recommendations/Gmail';
import InfographicsRecommendation from './Recommendations/Infographics';
import LandingPageRecommendation from './Recommendations/LandingPage';
import OffPage from './Recommendations/OffPage';
import AddCompanyDetails from './AddCompanyDetails';
import HorizontalStepper from './HorizontalStepper';
import Button from './TabButton';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import type {
  CompanyForm,
  CompanyDetailForm,
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import VideoDetails from './AdditionalDetails/VideoDetails';
import VideoRecommendations from './Recommendations/Video';
import ComingSoonPopup from '@/components/comingSoonPopup/ComingSoonPopup';
import SaveProject from '@/components/saveProject/SaveProject';
import SuccessPopup from '@/components/successPopup/SuccessPopup';
import { useProjectContext } from '@/context/project';
import { useAccountContext } from '@/context/account';

async function getHistory(): Promise<IPlanningObj[]>;
async function getHistory(id: number): Promise<IPlanningObj>;
async function getHistory(id?: number) {
  try {
    const res = await axios({
      url: `/api/planning/history?id=${id}`,
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    const data: IPlanningHistory = res.data;
    if (data.status === SUCCESS_CODE) {
      if (id) {
        return data.planning;
      }
      return data.planning_list;
    } else {
      return [];
    }
  } catch (err) {
    console.log('error: ', err);
    return [];
  }
}

const PlanningPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { company, onpage, offpage, emailInstruction, infographics } =
    useSeoAnalyzerContext();
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
    infographics_styles: [],
    email: '',
    url: '',
    marketing_template: '',
    schedule: {},
    assets: [],
    file_type: '',
  });
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } =
    useTutorialsContext();
  const { projectData, setProjectData } = useProjectContext();
  const { account } = useAccountContext();

  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(1);
  const [activeSeoType, setActiveSeoType] = useState<number>(0);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);
  const {
    isOpen: isBugReportModalOpen,
    onOpen: onOpenBugReportModal,
    onOpenChange: onOpenBugReportModalChange,
    onClose: onCloseBugReportModal,
  } = useDisclosure();

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
      if (
        company.name === '' ||
        company.website === '' ||
        company.description === ''
      ) {
        router.push('/home');
      }

      formik.setValues({
        companyName: company.name,
        competitors: company.competitors,
        description: company.description,
        email: company.email,
        idealCustomerProfile: company.customer_profile,
        marketing_template: company.marketing_template,
        schedule: company.schedule,
        sellingDescription: company.product_description,
        socialMediaType: company.socialMediaType,
        targetAudience: company.target_audice,
        websiteURL: company.website,
        url: company.url,
      });
      setFormData({
        ...company,
      });
    }
  }, [company]);

  useEffect(() => {
    if (searchParams) {
      const step = parseInt(searchParams.get('step') || '1');
      const type = parseInt(searchParams.get('type') || '0');
      setActiveButtonIndex(step);
      setActiveSeoType(type);
    }
  }, [searchParams]);

  useEffect(() => {
    if (projectData && Object.keys(projectData).length > 0) {
      console.log(projectData, 'Project Data');
    }
  }, [projectData]);

  async function onSubmit(
    values: CompanyForm,
    actions: FormikHelpers<CompanyForm>
  ) {}

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value);
  }

  const toggleSuccessPopup = () => {
    setIsSuccessPopupOpen(!isSuccessPopupOpen);
  };

  const handleSaveProject = () => {
    const newProjectData = {
      email: account?.email,
      project_name: `Project ${formik.values.companyName}`,
      content_type: formData.content_type.toLowerCase(),
      data: {},
      created_at: new Date(),
    };

    if (formData.content_type.toLowerCase() == 'seo') {
      newProjectData.data = {
        on_page: onpage,
        off_page: offpage,
      };
    } else if (formData.content_type.toLowerCase() == 'email marketing') {
      newProjectData.data = {
        email_instruction: emailInstruction,
      };
    } else if (formData.content_type.toLowerCase() === 'infographics') {
      newProjectData.data = {
        infographics,
      };
    }

    let updatedProjectData = [];

    if (projectData.length > 0) {
      updatedProjectData = [...projectData, newProjectData];
    } else {
      updatedProjectData = [newProjectData];
    }

    setProjectData(updatedProjectData);
    toggleSuccessPopup();
  };

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

      <Spin
        spinning={isGenerating}
        wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]"
      >
        <section className="flex flex-col justify-center">
          {activeButtonIndex == 1 && (
            <div
              id="company-additional-details"
              className={`flex flex-col mb-[16px] gap-[16px] text-2xl font-medium text-white`}
            >
              <div className="flex gap-x-[8px]">
                <p className="w-[24px] h-[24px] text-black text-2xl not-italic font-medium leading-[normal]">
                  📋
                </p>
                <h1 className="text-2xl w-full h-[29px] font-medium text-white">
                  Let’s gather some more information
                </h1>
              </div>
              <div
                className="h-[44px] text-white text-center text-[15px] not-italic font-semibold leading-5"
                id="content-type"
              >
                <button
                  className={`flex justify-center min-w-[169px] h-[44px] text-[15px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]
                  `}
                  disabled={true}
                >
                  <span className="h-[20px] text-[#ABABAB] text-[15px] not-italic font-medium leading-5">
                    Content&nbsp;Type: {formData?.content_type}
                  </span>
                </button>
              </div>

              {isInTutorialMode &&
                ((tutorialCampaign === 'SEO' &&
                  currentGuideMode.mode === 'ADDITIONAL1') ||
                  (tutorialCampaign === 'EMAIL' &&
                    currentGuideMode.mode === 'OAUTH') ||
                  (tutorialCampaign === 'SOCIAL' &&
                    currentGuideMode.mode === 'OAUTH')) && (
                  <div className="absolute left-0 top-0 translate-x-[-80px] translate-y-[-20px]">
                    <CloseButton />
                  </div>
                )}
            </div>
          )}
          {activeButtonIndex == 2 && (
            <div
              id="recommendations-menu"
              className="flex flex-col mb-[16px] gap-[16px] text-2xl font-medium text-white"
            >
              <div className="flex">
                <p className="w-[24px] h-[24px]">💡</p>
                <h1 className="text-2xl font-medium text-white">
                  &nbsp;Recommendations
                </h1>
              </div>
              <div className="h-[44px] text-white text-center text-[15px] not-italic font-semibold leading-5 ">
                <button
                  className={`flex justify-center min-w-[169px] h-[44px] text-[15px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]
                  `}
                  disabled={true}
                >
                  Content type: {formData?.content_type}
                </button>
              </div>
            </div>
          )}
          <HorizontalStepper
            activeButtonIndex={activeButtonIndex}
            setActiveButtonIndex={setActiveButtonIndex}
            formik={formik}
            formData={formData}
          />
        </section>
        {activeButtonIndex == 1 &&
          (formData.content_type.toLowerCase() == 'seo' ? (
            <div className="flex flex-col">
              <AddCompanyDetails formik={formik} />
              <BusinessObjectives
                title="7. Choose your business objectives"
                options={[
                  'Organic Traffic',
                  'Bounce Rate',
                  'Brand Visibility',
                  'Expand SEO Footprint',
                  'Improve Domain authority',
                  'Rankings',
                  'Competitive positioning',
                ]}
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
          ) : formData.content_type.toLowerCase() === 'email marketing' ? (
            <>
              <EmailMarketingDetails
                activeTab={activeSeoType}
                setActiveTab={setActiveSeoType}
                formData={formData}
                formik={formik}
              />
              <BusinessObjectives
                title="8. Choose your business objectives"
                options={[
                  'Lead Generation',
                  'Customer Acquisition',
                  'Customer Retention',
                  'Brand Awareness',
                  'Product Launches',
                  'Event Promotions',
                  'Sales Promotions',
                  'Feedback & Surveys',
                ]}
                formData={formData}
                setFormData={setFormData}
              />
              <SubmitAndBackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'social media' ? (
            <>
              <SocialMediaDetails
                activeTab={activeSeoType}
                setActiveTab={setActiveSeoType}
                formData={formData}
                formik={formik}
              />
              <BusinessObjectives
                title="8. Choose your business objectives"
                options={[
                  'Increase Sales',
                  'Brand Awareness',
                  'Website Traffic',
                  'Engagement',
                ]}
                formData={formData}
                setFormData={setFormData}
              />
              <SubmitAndBackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'infographics' ? (
            <>
              <InfoGraphicsDetails
                formData={formData}
                formik={formik}
                setFormData={setFormData}
              />
              <BusinessObjectives
                title="7. Choose your business objectives"
                options={[
                  'Product Features',
                  'Brand Awareness',
                  'Educate Customers',
                  'Engagement',
                  'Event Promotion',
                  'Visualize Data',
                ]}
                formData={formData}
                setFormData={setFormData}
              />
              <SubmitAndBackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'landing page' ? (
            <>
              <LandingPageDetails
                formData={formData}
                formik={formik}
                setFormData={setFormData}
              />
              <BusinessObjectives
                title="7. Choose your business objectives"
                options={[
                  'Lead Generation',
                  'Brand Awareness',
                  'Sales Converstion',
                  'Engagement',
                  'Educate Customers',
                ]}
                formData={formData}
                setFormData={setFormData}
              />
              <SubmitAndBackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
              />
            </>
          ) : (
            <>
              <VideoDetails
                formData={formData}
                formik={formik}
                setFormData={setFormData}
              />
              <BusinessObjectives
                title="7. Choose your business objectives"
                options={[
                  'Product Features',
                  'Brand Awareness',
                  'Educate Customers',
                  'Engagement',
                  'Event Promotion',
                  'Visualize Data',
                ]}
                formData={formData}
                setFormData={setFormData}
              />
              <SubmitAndBackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
                formik={formik}
                formData={formData}
              />
            </>
          ))}
        {activeButtonIndex == 2 &&
          (formData.content_type.toLowerCase() == 'seo' ? (
            <>
              <SaveProject saveProject={handleSaveProject} />
              <div
                id="seo-page-tab"
                className="flex items-center mt-8 relative"
              >
                <Button
                  isActivated={activeSeoType == 0}
                  onClick={() => setActiveSeoType(0)}
                >
                  <Image
                    src="/images/seo/on-page.svg"
                    alt={'SEO (on-page)'}
                    width={24}
                    height={24}
                  />
                  <span className="truncate" title="SEO (on-page)">
                    SEO (on-page)
                  </span>
                </Button>
                <Button
                  isActivated={activeSeoType == 1}
                  onClick={() => setActiveSeoType(1)}
                >
                  <Image
                    src="/images/seo/off-page.svg"
                    alt={'SEO (off-page)'}
                    width={24}
                    height={24}
                  />
                  <span className="truncate" title="SEO (off-page)">
                    SEO (off-page)
                  </span>
                </Button>
              </div>
              {activeSeoType == 0 ? <OnPage /> : <OffPage />}
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'email marketing' ? (
            <>
              <SaveProject saveProject={handleSaveProject} />
              <div className="flex items-center mt-8">
                {tabsList.map((tab, i) => (
                  <Button
                    key={`tab_${i}`}
                    isActivated={activeSeoType == i}
                    onClick={() => setActiveSeoType(i)}
                  >
                    <Image
                      src={tab.icon}
                      alt={tab.title}
                      width={24}
                      height={24}
                    />
                    <span className="truncate" title="SEO (off-page)">
                      {tab.title}
                    </span>
                  </Button>
                ))}
              </div>
              {activeSeoType == 0 ? (
                <GmailRecommendation />
              ) : (
                <GmailRecommendation />
              )}
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'social media' ? (
            <>
              <div className="flex items-center mt-8">
                {SocialMediaTabs.map((tab, i) => (
                  <Button
                    key={`tab_${i}`}
                    isActivated={activeSeoType == i}
                    onClick={() => setActiveSeoType(i)}
                  >
                    <Image
                      src={tab.icon}
                      alt={tab.title}
                      width={24}
                      height={24}
                    />
                    <span className="truncate" title="SEO (off-page)">
                      {tab.title}
                    </span>
                  </Button>
                ))}
              </div>
              <SocialMediaRecommendation type={activeSeoType} />
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'infographics' ? (
            <>
              <SaveProject saveProject={handleSaveProject} />
              <InfographicsRecommendation />
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ) : formData.content_type.toLowerCase() === 'landing page' ? (
            <>
              <LandingPageRecommendation />
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ) : (
            <>
              <VideoRecommendations router={router} />
              <BackButton
                activeButtonIndex={activeButtonIndex}
                setActiveButtonIndex={setActiveButtonIndex}
              />
            </>
          ))}
        <div className="flex float-right mt-[32px] gap-[10px]">
          <p className="text-white text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            Find a bug or encountering an error? Submit an issue report with
            us&nbsp;
            <button
              className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline"
              onClick={() => {
                onOpenBugReportModal();
              }}
            >
              here
            </button>
            <BugReportModal
              isOpen={isBugReportModalOpen}
              onOpenChange={onOpenBugReportModalChange}
              onClose={onCloseBugReportModal}
            />
          </p>
          <Image
            width={28}
            height={28}
            src={'/images/admin/plan/info.svg'}
            alt="#"
          />
        </div>
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          togglePopup={toggleSuccessPopup}
          goToProjects={() => router.push('/projects')}
        />
      </Spin>
    </AdminLayout>
  );
};

export default PlanningPage;
