'use client';
import React, { useState } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';
import { CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import { DETAIL_LIMIT } from '@/data/constant';
import EmailEditModal from './EmailEditModal';

type MarketingTemplateProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
};

const MarketingTemplate = ({ formik, index }: MarketingTemplateProps) => {
  const [isOpenEmailEditModal, setIsOpenEmailEditModal] = useState<boolean>(false);
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Enter your email marketing templates
      </div>
      <Input.TextArea
        placeholder={`Copy and paste your email marketing templates`}
        id="marketingTemplate"
        className={`${styles['textarea']} ${formik.errors.marketing_template && formik.touched.marketing_template
          ? 'border-rose-600'
          : 'border-[#3A3A3A]'
          }`}
        {...formik.getFieldProps('marketing_template')}
      />
      <label className={`w-full text-[12px] text-right ${
        (formik.errors.marketing_template &&
        formik.touched.marketing_template)
        ? 'text-rose-600'
        : 'text-[#ABABAB]'
      }`}>
        {formik.values.marketing_template.length} / {DETAIL_LIMIT}
      </label>
      <button className={`${styles.button}`} onClick={() => setIsOpenEmailEditModal(true)}>
        Edit Email Template
      </button>
      <EmailEditModal isOpen={isOpenEmailEditModal} onOpenChange={() => setIsOpenEmailEditModal(false)} />
    </div>
  );
};

export default MarketingTemplate;