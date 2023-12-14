import React, { FC } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';
import { CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import { DETAIL_LIMIT } from '@/data/constant';

type TargetAudienceProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
};

const TargetAudience: FC<TargetAudienceProps> = ({ formik, index }) => {
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Add your target audience
      </div>
      <Input.TextArea
        maxLength={DETAIL_LIMIT}
        placeholder={`Ex: Women, 18+,  Mexican, Interested in Cats & Dogs`}
        className={`${styles['textarea']} ${formik.errors.targetAudience && formik.touched.targetAudience
          ? 'border-rose-600'
          : 'border-[#3A3A3A]'
          }`}
        {...formik.getFieldProps('targetAudience')}
      />
      <label className={`w-full text-[12px] text-right ${
        formik.errors.targetAudience &&
        formik.touched.targetAudience
        ? 'text-rose-600'
        : 'text-[#ABABAB]'
        }`}>
        {formik.values.targetAudience.length} / {DETAIL_LIMIT}
      </label>
    </div>
  );
};

export default TargetAudience;