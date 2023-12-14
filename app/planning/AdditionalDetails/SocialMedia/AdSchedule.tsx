import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { CompanyForm , CompanyDetailForm} from '@/types/planning';
import { useFormik } from 'formik';
import { BiCalendar } from 'react-icons/bi';
import { Chip, useDisclosure } from '@nextui-org/react';
import { useSeoAnalyzerContext } from '@/context/seo';
import { formatTimeOfDay } from '@/utils';
import EmailScheduleModal from '../EmailMarketing/EmailScheduleModal';

type ScheduleProps = {
  index: number;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
};

const Schedule = ({ index, formik, formData }: ScheduleProps) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenAdSchedule, onOpenChange } = useDisclosure();
  const { isOpen: isPinterestAnalyticsModalOpen, onOpen: onOpenPinterestAnalyticsModal, onOpenChange: onOpenPinterestAnalyticsModalChange } = useDisclosure();

  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Provide your Ad scheduling
      </div>
      <button className={`${styles.button}`}
        onClick={() => {
          onOpenAdSchedule();
          setCompany({
            ...company,
            name: formik.values.companyName,
            business_objectives: formData.business_objectives,
            competitors: formik.values.competitors,
            content_type: formData.content_type,
            customer_profile: formik.values.idealCustomerProfile,
            description: formik.values.description,
            product_description: formik.values.sellingDescription,
            target_audice: formik.values.targetAudience,
            website: formik.values.websiteURL,
            email: formik.values.email,
            marketing_template: formik.values.marketing_template,
            schedule: formik.values.schedule,
            url: formik.values.url
          });
        }}
      >
        <BiCalendar className="w-[24px] h-[24px]" />
        Ad Schedule
      </button>
      <div className='flex flex-wrap w-full gap-[10px]'>
        {
          Object.keys(company.schedule).map((key, _) => {
            return company.schedule[key].map((time: number, _i: number) => (
              <Chip key={_i} className='rounded-lg'>
                {key + ' ' + formatTimeOfDay(time)}
              </Chip>
            ))
          })
        }
      </div>
      <EmailScheduleModal isOpen={isOpen} onOpenChange={onOpenChange} title='Email Schedule' description='Select the days & times you would like to schedule your emails' />
    </div>
  );
};

export default Schedule;