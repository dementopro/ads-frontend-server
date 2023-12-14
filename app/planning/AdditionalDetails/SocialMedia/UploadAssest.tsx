import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { BiFileBlank } from 'react-icons/bi';
import { useSeoAnalyzerContext } from '@/context/seo';
import { useFormik } from 'formik';

type platformsProps = {
  title: string;
  icon: string;
  page?: string;
  provider?: string;
}

type UploadAssetProps = {
  formData: CompanyDetailForm;
  platforms: platformsProps[];
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
  activeTab: number;
};

const UploadAssest = ({ formData, platforms, formik, index, activeTab }: UploadAssetProps) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Upload media assests for {platforms[activeTab].title}
      </div>
      <div className='flex flex-wrap items-center gap-[12px]'>
        {
          company.assets && company.assets.map((img, i) => (
            <span key={i} className='text-[12px] text-[#ABABAB]'>
              {img.name}
            </span>
          ))
        }
      </div>
      <label className={`${styles.upload}`} htmlFor='upload_image'>
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
              url: formik.values.url,
              assets
            });
          }
        }} hidden />
      </label>
    </div>
  );
};

export default UploadAssest;