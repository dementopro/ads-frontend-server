import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { formValidUrl } from '@/utils';
import { message } from 'antd';
import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import LoadingSpin from './LoadingSpin';
import styles from '@/./app/planning/planning.module.css';

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
    <div className={`${styles.stepperDiv} text-[13px] font-poppins`}>
      {contextHolder}
      {isLoading && <LoadingSpin />}
      <button
        className={`w-full px-[10px] py-[8px] rounded-[4px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex border-1
          ${activeButtonIndex === 0 ? 'border-[#844FFF] bg-[#35363A]' : 'border-[#1B1C21]'} `}
      >
        <div
          className={`${activeButtonIndex === 0 ? 'border-[#844FFF] bg-[#844FFF] text-white' : 'bg-[#1B1C21] border-[#ABABAB] text-[#ABABAB]'
            } border-1 w-[24px] h-[24px] rounded-full justify-center items-center flex`}
        >
          <div> 1 </div>
        </div>
        <div
          className={`${activeButtonIndex === 0 ? 'text-white font-medium' : 'text-[#ABABAB]'}`}
        >
          Information
        </div>
      </button>
      <button
        className={`w-full px-[10px] py-[8px] rounded-[4px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex border-1
          ${activeButtonIndex === 1 ? 'border-[#844FFF] bg-[#35363A]' : 'border-[#1B1C21]'} `}
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
          className={`${activeButtonIndex === 1 ? 'border-[#844FFF] bg-[#844FFF] text-white' : 'bg-[#1B1C21] border-[#ABABAB] text-[#ABABAB]'
            } border-1 w-[24px] h-[24px] rounded-full justify-center items-center flex`}
        >
          <div> 2 </div>
        </div>
        <div
          className={`${activeButtonIndex === 1 ? 'text-white font-medium' : 'text-[#ABABAB]'}`}
        >
          Additional Details
        </div>
      </button>
      <button
        className={`w-full px-[10px] py-[8px] rounded-[4px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex border-1
          ${activeButtonIndex === 2 ? 'border-[#844FFF] bg-[#35363A]' : 'border-[#1B1C21]'} `}
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
          className={`${activeButtonIndex === 2 ? 'border-[#844FFF] bg-[#844FFF] text-white' : 'bg-[#1B1C21] border-[#ABABAB] text-[#ABABAB]'
            } border-1 w-[24px] h-[24px] rounded-full justify-center items-center flex`}
        >
          <div> 3 </div>
        </div>
        <div
          className={`${activeButtonIndex === 2 ? 'text-white font-medium' : 'text-[#ABABAB]'}`}
        >
          Recommendations
        </div>
      </button>
    </div>

  );
};

export default HorizontalStepper;
