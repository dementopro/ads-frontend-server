import React, { FC, useState } from 'react';
import styles from './SubmitAndBackButton.module.css';
import { useFormik } from 'formik';
import { CompanyForm, CompanyDetailForm } from '@/types/planning';
import axios from 'axios';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { Spin, message } from 'antd';
import { formValidUrl } from '@/utils';

interface SubmitAndBackButtonProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
}

const SubmitAndBackButton: FC<SubmitAndBackButtonProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData,
}) => {
  const { setOnpage, setOffpage, setCompany, company, setEmailInstruction } =
    useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (index: number) => {
    if (
      formData.content_type.toLowerCase() == 'seo' &&
      formik.errors.idealCustomerProfile == '' &&
      formik.errors.targetAudience == '' &&
      formik.errors.competitors == ''
    ) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        business_objectives: formData.business_objectives,
        competitors: formik.values.companyName,
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
          if (res.data.status == true) {
            setOnpage(res.data.issues);
            const offpages = JSON.parse(res.data.strategies);
            let temp: Array<SeoAnalysis> = [];
            offpages.map((pg: any) => {
              Object.keys(pg).map((key) => {
                temp.push({
                  url: key,
                  warnings: pg[key],
                });
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
      formData.content_type.toLowerCase() == 'email marketing' &&
      formik.errors.idealCustomerProfile == '' &&
      formik.errors.targetAudience == '' &&
      formik.errors.email == '' &&
      formik.errors.marketing_template == ''
    ) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        business_objectives: formData.business_objectives,
        competitors: formik.values.companyName,
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
          if (res.data.status == true) {
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
    <div className="flex items-center gap-10 self-stretch mt-[32px]">
      {contextHolder}
      {isLoading && (
        <div className="fixed flex items-center justify-center w-screen h-screen bg-black/40 z-[99999] top-0 left-0">
          <Spin />
        </div>
      )}
      <p className="w-[619px] text-[color:var(--primary-50,#F7F7FF)] h-[18px] text-[15px] not-italic font-medium leading-[normal]">
        Submit related helpful information to help us improve your
        recommendations!
      </p>
      <button
        className="flex h-11 justify-center items-center gap-4 flex-[1_0_0] border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
        onClick={() => {
          setActiveButtonIndex(activeButtonIndex - 1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleSubmit(activeButtonIndex + 1);
        }}
        className={`${styles.submit}`}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitAndBackButton;
