import React, { FC, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import { message } from 'antd';

import { TopToLeftCurveLineArrow } from '@/components/tutorial/Arrows';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { useTutorialsContext } from '@/context/tutorials';
import axios from '@/lib/axios';
import { CompanyValidate } from '@/lib/validate';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { formValidUrl } from '@/utils';
import LoadingSpin from './LoadingSpin';

interface HorizontalStepperProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
}

const HorizontalStepper: FC<HorizontalStepperProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { company, setCompany, setOnpage, setOffpage, setEmailInstruction } = useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();

  const handleButtonClick = (index: number) => {
    setSelectedComponentIndex(index);
    setActiveButtonIndex(index);
  };

  const handleSubmit = (index: number) => {
    if (
      formData.content_type.toLowerCase() === 'seo' &&
      formik.errors.idealCustomerProfile === '' &&
      formik.errors.targetAudience === '' &&
      formik.errors.competitors === ''
    ) {
      setIsLoading(true);
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
      });
      axios
        .post('/fapi/seo_onpage_analyze_api', {
          company_name: formik.values.companyName,
          company_description: formik.values.description,
          target_audience: formik.values.targetAudience,
          customer_profile: formik.values.idealCustomerProfile,
          competitor: formik.values.competitors,
          business_objectives: formData.business_objectives.join(','),
          website_url: formValidUrl(formik.values.websiteURL),
        })
        .then((res) => {
          if (res.data.status) {
            setOnpage(res.data.issues);
            const offpages = JSON.parse(res.data.strategies);
            let temp: Array<SeoAnalysis> = [];
            Object.keys(offpages).map((key) => {
              temp.push({
                url: key,
                warnings: offpages[key],
              });
            });
            setOffpage(temp);
            setActiveButtonIndex(index);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /seo_onpage_analyze_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (
      formData.content_type.toLowerCase() === 'email marketing' &&
      formik.errors.idealCustomerProfile === '' &&
      formik.errors.targetAudience === '' &&
      formik.errors.email === '' &&
      formik.errors.marketing_template === ''
    ) {
      setIsLoading(true);
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
        schedule: formik.values.schedule
      });
      axios
        .post('/fapi/email_marketing_instruction_api', {
          company_name: formik.values.companyName,
          company_description: formik.values.description,
          target_audience: formik.values.targetAudience,
          customer_profile: formik.values.idealCustomerProfile,
          business_objectives: formData.business_objectives.join(','),
          website_url: formValidUrl(formik.values.websiteURL),
          email_address: formik.values.email,
          email_template: formik.values.marketing_template
        })
        .then((res) => {
          if (res.data.status) {
            const instruction = JSON.parse(res.data.instruction);
            setEmailInstruction(instruction);
            setActiveButtonIndex(index);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /email_marketing_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log('Please fill rerequired field', formik.errors);
    }
  };

  return (
    <div id='stepper-menu' className="flex w-full flex-wrap font-poppins items-center gap-[32px] relative">
      {contextHolder}
      {isLoading && <LoadingSpin />}
      <div className="w-full ipad:h-[57px] p-[6px] bg-[#23252B] rounded-[12px] justify-between items-center android:gap-[8px] ipad:gap-[8px] android:flex-col ipadmini:flex-row inline-flex">
        <button
          className={`flex-1 h-full px-[10px] py-[8px] border ${
            activeButtonIndex === 0 ? 'border-primary-purple' : 'border-none'
          } rounded-lg justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
          onClick={() => {
            router.push('/home');
          }}
        >
          <div
            className={`w-[26px] h-[25px] border ${
              activeButtonIndex === 0 ? 'border-primary-purple' : 'border-primary-gray'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 0 ? 'text-primary-purple' : 'text-primary-gray'
              } android:text-[12px] ipad:text-[12px]`}
            >
              1
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins  ${
              activeButtonIndex === 0
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Information
          </div>
        </button>

        <button
          className={`flex-1 h-full px-[10px] py-[8px] border ${
            activeButtonIndex === 1 ? 'border-primary-purple' : 'border-none'
          } rounded-lg justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
          onClick={() => {
            formik.validateForm().then((errors: FormikErrors<CompanyForm>) => {
              console.log('Errors:', errors)
              if (errors && (errors.companyName !== '' || errors.websiteURL !== '' || errors.description !== '')) {
                messageApi.error('Please fill up all required information in get started page before proceed to additional details');
              } else {
                setCompany({
                  ...company,
                  name: formik.values.companyName,
                  website: formik.values.websiteURL,
                  description: formik.values.description,
                  content_type: formData.content_type,
                });
                router.push('/planning');
              }
            }).catch((err) => {
              messageApi.error('Please fill up all required information in get started page before proceed to additional details');
            })
          }}
        >
          <div
            className={`w-[26px] h-[25px] border ${
              activeButtonIndex === 1 ? 'border-primary-purple' : 'border-primary-gray'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 1 ? 'text-primary-purple' : 'text-primary-gray'
              } android:text-[12px] ipad:text-[12px]`}
            >
              2
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins ${
              activeButtonIndex === 1
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Additional Details
          </div>
        </button>

        <button
          className={`flex-1 h-full px-[10px] py-[8px] border ${
            activeButtonIndex === 2 ? 'border-primary-purple' : 'border-none'
          } rounded-lg justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
          onClick={() => {
            formik.validateForm().then((errors) => {
              if (company.content_type.toLowerCase() === 'seo' && errors && (errors.targetAudience !== '' || errors.idealCustomerProfile !== '' || errors.competitors !== '')) {
                messageApi.error('Please fill up all required information in get started page before proceed to additional recommendations');
              } else if (company.content_type.toLowerCase() === 'email marketing' && errors && (errors.targetAudience !== '' || errors.idealCustomerProfile !== '' || errors.marketing_template !== '')) {
                messageApi.error('Please fill up all required information in planning page before proceed to additional recommendations');
              } else {
                setCompany({
                  ...company,
                  business_objectives: formData.business_objectives,
                  competitors: formik.values.competitors,
                  customer_profile: formik.values.idealCustomerProfile,
                  product_description: formik.values.sellingDescription,
                  target_audice: formik.values.targetAudience,
                });
                handleSubmit(2);
                // router.push('/planning?step=2');
              }
            }).catch((err) => {
              messageApi.error('Please fill up all required information in planning page before proceed to additional recommendations');
            })
          }}
        >
          <div
            className={`w-[26px] h-[25px] border ${
              activeButtonIndex === 2 ? 'border-primary-purple' : 'border-primary-gray'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 2 ? 'text-primary-purple' : 'text-primary-gray'
              } android:text-[12px] ipad:text-[12px]`}
            >
              3
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins ${
              activeButtonIndex === 2
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Recommendations
          </div>
        </button>
      </div>
      {
        isInTutorialMode && tutorialCampaign === 'HOME' && currentGuideMode.mode === 'GENERAL' && (
          <div className="absolute left-[200px] bottom-1/2 flex items-center z-[999]">
            <TopToLeftCurveLineArrow width={100} height={84} className="tutorial-element" />
            <div className={`w-[310px] bg-primary-purple rounded-md text-white p-2 text-md tutorial-element ml-5 mb-20`}>
              Add your brand details and our AI will create personalized recommendations for you.
            </div>
          </div>
        )
      }
    </div>
  );
};

export default HorizontalStepper;
