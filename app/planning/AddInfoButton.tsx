import React, { FC } from 'react';
import './AddInfoButton.css';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';

interface AddInfoButtonProps {
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddInfoButton: FC<AddInfoButtonProps> = ({ setActiveButtonIndex ,formik}) => {
  const handleButtonClick = (index: number) => {
    if(formik.errors.companyName == "" && formik.errors.websiteURL == ""&& formik.errors.description==""){      
      setActiveButtonIndex(index);
    }else{
      console.log('Please fill rerequired field');
    }
  };
  return (
    <div className="main-div">
      <div className="button-dev">
        <button
          className="w-[174px] text-white text-center text-[15px] not-italic font-semibold leading-5 "
          onClick={() => handleButtonClick(1)}
        >
          Add more information
        </button>
      </div>
    </div>
  );
};

export default AddInfoButton;
