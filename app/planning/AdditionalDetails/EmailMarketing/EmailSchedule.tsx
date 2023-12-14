import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { CompanyForm } from '@/types/planning';
import { useFormik } from 'formik';
import { BiCalendar } from 'react-icons/bi';
import { Chip, useDisclosure } from '@nextui-org/react';
import EmailScheduleModal from './EmailScheduleModal';
import { useSeoAnalyzerContext } from '@/context/seo';
import { formatTimeOfDay } from '@/utils';

type ScheduleProps = {
  index: number;
  content_type: string;
};

const Schedule = ({ index, content_type }: ScheduleProps) => {
  const { company } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenEmailSchedule, onOpenChange } = useDisclosure();

  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Provide your {content_type} schedule
      </div>
      <button className={`${styles.button}`}
        onClick={() => {
          onOpenEmailSchedule();
        }}
      >
        <BiCalendar className="w-[24px] h-[24px]" />
        {content_type} Schedule
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