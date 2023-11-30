import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC, useMemo } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { useFormik } from 'formik';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import { CompanyForm } from '@/types/planning';

interface GoogleAnalyticsModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  analyticsData: [];
}

const GoogleAnalyticsModal: FC<GoogleAnalyticsModalProps> = ({
  isOpen,
  onOpenChange,
  formik,
  analyticsData
}) => {
  const data = useMemo(() => ({
    labels: [],
    datasets: [
      {
        label: `Users per day`,
        fill: false,
        lineTension: 0.3,
        borderColor: "#35213d",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#375751",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: analyticsData,
      },
    ],
  }), [analyticsData]);

  const options = {
    scales: {
      yAxes:  {
            suggestedMin: 0,
          },
      xAxes:
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 7,
          },
        },
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        font: {
          size: 0,
        },
      },
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className='max-w-screen-2xl overflow-visible'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Google Analytics Dashboard for {formik.values.companyName}
              </div>
            </ModalHeader>
            <ModalBody>
              <div>
                <Line data={data} width={600} height={250} />
              </div>
            </ModalBody>
            <ModalFooter className="flex w-full gap-6">
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500"
                onClick={onClose}
              >
                Submit
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GoogleAnalyticsModal;
