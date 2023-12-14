import React, { FC } from 'react';
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import TargetAudience from '../Common/TargetAudience';
import CustomerProfile from '../Common/CustomerProfile';
import Competitors from './Competitors';
import HistoricalData from './HistoricalData';
import BusinessObjectives from '../Common/BusinessObjectives';
import SubmitAndBackButton from '../SubmitAndBackButton';

export const seoTabsList = [
  {
    title: 'SEO (on-page)',
    icon: '/images/seo/on-page.svg',
  },
  {
    title: 'SEO (off-page)',
    icon: '/images/seo/off-page.svg',
  },
];

export const seoObjectives = [
  'Organic Traffic',
  'Bounce Rate',
  'Brand Visibility',
  'Content Enagagement',
  'Expand SEO Footprint',
  'Improve Domain authority',
  'Rankings',
  'Competitive positioning',
];

type SeoDetailPageProps = {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
};

const SeoDetailPage: FC<SeoDetailPageProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData,
  setFormData,
}) => {

  return (
    <div className="w-full flex flex-col gap-[14px]">
      <div className='w-full flex android:flex-col desktop:flex-row gap-[15px]'>
        <TargetAudience formik={formik} index={3} />
        <CustomerProfile formik={formik} index={4} />
      </div>
      <div className='w-full flex android:flex-col desktop:flex-row gap-[15px]'>
        <Competitors formik={formik} index={5} />
        <HistoricalData formik={formik} index={6} />
      </div>

      <BusinessObjectives
        index={7}
        objectives={seoObjectives}
        formData={formData}
        setFormData={setFormData}
      />

      <SubmitAndBackButton
        activeButtonIndex={activeButtonIndex}
        setActiveButtonIndex={setActiveButtonIndex}
        formik={formik}
        formData={formData}
      />
    </div>
  );
};

export default SeoDetailPage;
