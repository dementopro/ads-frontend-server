import React, { FC, useMemo, useState } from 'react';
import styles from './SubmitAndBackButton.module.css';
import { useFormik } from 'formik';
import { CompanyForm, CompanyDetailForm } from '@/types/planning';
import axios from 'axios';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { Spin, message } from 'antd';
import { formValidUrl } from '@/utils';
import { useRouter } from 'next/navigation';
import LoadingSpin from '../LoadingSpin';

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
  const { setOnpage, setOffpage, setCompany, company, setEmailInstruction, setSocialMedia, socialMedia } =
    useSeoAnalyzerContext();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isValidSeo = (content_type: string, errors: any) =>
    content_type.toLowerCase() == 'seo' &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.competitors == ''

  const isValidEmailMarketing = (content_type: string, errors: any) =>
    content_type.toLowerCase() == 'email marketing' &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.email == '' &&
    errors.marketing_template == ''

  const isValidSocialMedia = (content_type: string, values: any, errors: any) =>
    content_type.toLowerCase() == 'social media' &&
    Object.keys(values.schedule).length > 0 &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.url == ''

  const isValid = useMemo(() => {
    return isValidSeo(formData.content_type, formik.errors) || isValidEmailMarketing(formData.content_type, formik.errors) || isValidSocialMedia(formData.content_type, formik.values, formik.errors);
  }, [formData, formik.values, formik.errors])

  const handleSubmit = (index: number) => {
    if (isValidSeo(formData.content_type, formik.errors)) {
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
          if (res.data.status == true) {
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
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /seo_onpage_analyze_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidEmailMarketing(formData.content_type, formik.errors)) {
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
        schedule: formik.values.schedule,
        url: formik.values.url
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
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /email_marketing_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidSocialMedia(formData.content_type, formik.values, formik.errors)) {
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
        schedule: formik.values.schedule,
        url: formik.values.url
      });

      const bodyData = new FormData()
      bodyData.append('company_name', formik.values.companyName);
      bodyData.append('company_description', formik.values.description);
      bodyData.append('target_audience', formik.values.targetAudience);
      bodyData.append('customer_profile', formik.values.idealCustomerProfile);
      bodyData.append('business_objectives', formData.business_objectives.join(','));
      bodyData.append('website_url', formValidUrl(formik.values.websiteURL));
      bodyData.append('email_address', formik.values.email);
      bodyData.append('email_template', formik.values.marketing_template);
      company.assets.forEach((asset) => {
        bodyData.append('media', asset);
      });

      axios
        .post('/fapi/pinterest_get_instructions_api', bodyData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          if (res.data.status == true) {
            setSocialMedia(res.data.recommendations.map((rec: any) => ({
              content: JSON.parse(rec.content),
              img_url: process.env.NEXT_PUBLIC_API_URL + rec.img_url
            })));
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /social_media_instruction_api', err);
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
      {isLoading && <LoadingSpin />}
      <p className="w-[619px] text-[color:var(--primary-50,#F7F7FF)] h-[18px] text-[15px] not-italic font-medium leading-[normal]">
        Submit related helpful information to help us improve your
        recommendations!
      </p>
      <button
        className="flex h-11 justify-center items-center gap-4 flex-[1_0_0] border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
        onClick={() => {
          router.push('/home');
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleSubmit(activeButtonIndex + 1);
        }}
        className={`${styles.submit} ${!isValid ? '!bg-background-300' : '!bg-primary-purple'}`}
        disabled={!isValid}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitAndBackButton;
