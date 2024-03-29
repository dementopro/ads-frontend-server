import React, { FC, useMemo } from 'react';
import './AddInfoButton.css';
import { useFormik } from 'formik';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

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
    <div className="main-div">
      {contextHolder}
      <button
        className={`text-white text-center text-[15px] !px-6 not-italic font-semibold leading-5 button-dev whitespace-nowrap ${
          !isValid && '!bg-background-300'
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
