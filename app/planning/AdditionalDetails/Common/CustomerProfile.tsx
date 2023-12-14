import React, { FC } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';
import { CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import { DETAIL_LIMIT } from '@/data/constant';

type CustomerProfileProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
};

const CustomerProfile: FC<CustomerProfileProps> = ({ formik, index }) => {
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
       {index}. Add ideal customer profile
      </div>
      <Input.TextArea
        maxLength={DETAIL_LIMIT}
        placeholder={`Ex: industry, geography, pain points`}
        className={`${styles['textarea']} ${formik.errors.idealCustomerProfile && formik.touched.idealCustomerProfile
          ? 'border-rose-600'
          : 'border-[#3A3A3A]'
          }`}
        {...formik.getFieldProps('idealCustomerProfile')}
      />
      <label className={`w-full text-[12px] text-right ${
        formik.errors.idealCustomerProfile &&
        formik.touched.idealCustomerProfile
        ? 'text-rose-600'
        : 'text-[#ABABAB]'
        }`}>
        {formik.values.idealCustomerProfile.length} / {DETAIL_LIMIT}
      </label>
    </div>
  );
};

export default CustomerProfile;
