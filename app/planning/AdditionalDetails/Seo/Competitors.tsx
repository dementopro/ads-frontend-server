import React, { FC } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';
import { CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import { DETAIL_LIMIT } from '@/data/constant';

type CompetitorsProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
};

const Competitors: FC<CompetitorsProps> = ({ formik, index }) => {
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Add your target competitors
      </div>
      <Input.TextArea
        maxLength={DETAIL_LIMIT}
        placeholder={`Who is currently ranking in your niche?`}
        id="competitors"
        className={`${styles['textarea']} ${formik.errors.competitors && formik.touched.competitors
          ? 'border-rose-600'
          : 'border-[#3A3A3A]'
          }`}
        {...formik.getFieldProps('competitors')}
      />
      <label className={`w-full text-[12px] text-right ${
        formik.errors.competitors &&
        formik.touched.competitors
        ? 'text-rose-600'
        : 'text-[#ABABAB]'
        }`}>
        {formik.values.competitors.length} / {DETAIL_LIMIT}
      </label>
    </div>
  );
};

export default Competitors;