import React, { FC, useMemo } from 'react';
import './AddInfoButton.css';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';
import { message } from 'antd';

interface AddInfoButtonProps {
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddInfoButton: FC<AddInfoButtonProps> = ({
  setActiveButtonIndex,
  formik,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleButtonClick = (index: number) => {
    if (
      formik.errors.companyName === '' &&
      formik.errors.websiteURL === '' &&
      formik.errors.description === ''
    ) {
      setActiveButtonIndex(index);
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
