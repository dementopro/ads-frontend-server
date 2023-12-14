import React, { FC, useMemo } from 'react';
import { useFormik } from 'formik';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';
import styles from '@/./app/planning/planning.module.css';

interface AddInfoButtonProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
}

const AddInfoButton: FC<AddInfoButtonProps> = ({
  formik,
  formData
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const { company, setCompany } = useSeoAnalyzerContext();

  const handleButtonClick = (index: number) => {
    if (
      formik.errors.companyName === '' &&
      formik.errors.websiteURL === '' &&
      formik.errors.description === ''
    ) {
      setCompany({
        ...company,
        name: formik.values.companyName,
        website: formik.values.websiteURL,
        description: formik.values.description,
        content_type: formData.content_type
      })
      router.push('/planning');
    } else {
      messageApi.error('Please fill required fields');
      console.log('Please fill rerequired field');
    }
  };

  const isValid = useMemo(() => {
    if (
      formik.errors.companyName === '' &&
      formik.errors.websiteURL === '' &&
      formik.errors.description === ''
    )
      return true;
    return false;
  }, [formik]);

  return (
    <div className="flex justify-end">
      {contextHolder}
      <button
        className={`${styles.mainButton} ${!isValid
          ? '!bg-background-300'
          : ' bg-[#844FFF]'
          }`}
        onClick={() => handleButtonClick(1)}
        disabled={!isValid}
      >
        Add more information
      </button>
    </div>
  );
};

export default AddInfoButton;
