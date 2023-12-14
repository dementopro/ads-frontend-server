import React, { FC } from 'react';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import { useFormik } from 'formik';
import Button from './TabButton';
import Image from 'next/image';

type platformsProps = {
  title: string;
  icon: string;
  page?: string;
  provider?: string;
}

type PlatformTypeProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  activeTab: number;
  setActiveTab: (value: number) => void;
  platforms: platformsProps[];
  setIsEmailAuthenticated: (value: boolean) => void;
  content_type: string;
};

const PlatformSelection: FC<PlatformTypeProps> = ({
  formik,
  activeTab,
  setActiveTab,
  platforms,
  setIsEmailAuthenticated,
  content_type,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-start gap-[20px] self-stretch border-b-1 border-[#27282F]">
      {platforms.map((item, index) => (
        <Button
          key={index}
          isActivated={activeTab == index}
          onClick={() => {
            {
              if (content_type != 'seo') {
                setIsEmailAuthenticated(false);
              }
            }
            setActiveTab(index)
            {
              if (content_type == 'social media') {
                formik.setValues({
                  ...formik.values,
                  socialMediaType: item.title.toLowerCase()
                });
              }
            }
          }}
        >
          {/* Assuming you have an icon component or image for each type */}
          <Image
            src={item.icon}
            alt={item.title}
            width={24}
            height={24}
          />
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default PlatformSelection;