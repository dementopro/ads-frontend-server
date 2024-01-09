import React, { useEffect } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

interface EmailMarketingProps {
  emailInstruction: any;
}

const EmailMarketing: React.FC<EmailMarketingProps> = ({
  emailInstruction,
}) => {
  const router = useRouter();

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      <div className={`${styles.mainDiv} gap-y-[24px] w-full`}>
        <div className="flex flex-row gap-x-[8px]">
          <p className="w-[16px] h-[16px]">⭐</p>
          <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
            Recommendations
          </p>
        </div>
        <h3 className="font-medium text-white text-normal">
          {emailInstruction.email_template_type}
        </h3>
        <p className="text-[15px] text-[color:var(--primary-300,#ABABAB)]">
          {`Based on the email marketing templates input, we've identified your input as ${emailInstruction.email_template_type.toLowerCase()}. Based on your target audience and business objectives we recommend the following:`}
        </p>
        <div className="block w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex-none block">
                {emailInstruction.email_options.map((option: any, i: any) => (
                  <p
                    key={i}
                    className="text-[15px] text-[color:var(--primary-300,#ABABAB)] whitespace-pre-wrap"
                    style={{ wordWrap: 'break-word', overflowWrap: 'anywhere' }}
                  >
                    -{' '}
                    {`${option.option_name} email option ${i + 1}: ${
                      option.characteristic
                    }`}
                  </p>
                ))}
              </div>
            </div>
            <button
              className="px-5 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple"
              onClick={() => {
                router.push(`/contentType/emailMarketing?type=0`);
              }}
            >
              <span className="text-[13.5px]">View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
