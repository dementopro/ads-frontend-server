import React, { FC } from 'react';
import styles from './SubmitAndBackButton.module.css';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';

interface SubmitAndBackButtonProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const SubmitAndBackButton: FC<SubmitAndBackButtonProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik
}) => {
  const handleSubmit = (index: number) => {
    if(formik.errors.sellingDescription == "" && formik.errors.idealCustomerProfile == "" && formik.errors.targetAudience == ""&& formik.errors.competitors==""){      
      setActiveButtonIndex(index);
    }else{
      console.log('Please fill rerequired field');
    }
  };
  return (
    <div className="flex items-center gap-10 self-stretch mt-[32px]">
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
