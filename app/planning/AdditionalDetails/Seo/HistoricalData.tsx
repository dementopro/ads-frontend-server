import { CompanyForm } from '@/types/planning';
import styles from '@/./app/planning/planning.module.css';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import Image from 'next/image';
import { DETAIL_LIMIT } from '@/data/constant';

type CompetitorsProps = {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
};

const HistoricalData: FC<CompetitorsProps> = ({ formik, index }) => {
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Connect your historical data (optional)
      </div>
      <div className={`${styles.subHead}`}>
        Select for 1 click Authentication
      </div>

      <div className="flex flex-row gap-[24px]">
        <button className={`${styles.button}`}>
          <Image
            width={18}
            height={18}
            src={'/images/admin/plan/google-analytics-svgrepo-com.svg'}
            alt="#"
          />
          <label>
            Google Analytics
          </label>
        </button>
        <button className={`${styles.button}`}>
          <Image
            width={18}
            height={18}
            src={'/images/admin/plan/Vector.svg'}
            alt="#"
          />
          <label>
            Semrush
          </label>
        </button>
      </div>
    </div>
  );
};

export default HistoricalData;
