import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC, useRef, useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import Papa from 'papaparse';
import axios from 'axios';

import { useSeoAnalyzerContext } from "@/context/seo";

interface LaunchToGmailProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  selects: number[];
  messageApi: any;
};

const LaunchToGmailModal: FC<LaunchToGmailProps> = ({
  isOpen,
  onOpenChange,
  onClose,
  selects,
  messageApi
}) => {
  const [csvData, setCSVData] = useState([]);
  const { emailInstruction } = useSeoAnalyzerContext();
  const csvFileRef = useRef(null);

  const handleCSVFileChange = () => {
    const input: any = csvFileRef?.current as any;
    const reader = new FileReader();
    if (input) {
      const [file] = (input as any).files;

      reader.onloadend = async ({ target }) => {
        const csv = Papa.parse((target as any).result, { header: true });
        const recipientEmails = csv.data.map((row: any) => [row["Email Address"], row["Name"]]).filter((row: any) => row[0] && row[1]);
        setCSVData(recipientEmails as []);
      };

      reader.readAsText(file);
    }
  };

  const handleLaunchEmail = async () => {
    const selectedEmailTemplate = emailInstruction.email_options[selects[0]];

    try {
      const { data } = await axios({
        url: "/fapi/sender_email",
        method: 'POST',
        data: {
          from_email: "delta.beret@gmail.com",
          to_emails: csvData,
          subject: selectedEmailTemplate.template_subject_line,
          html_content: selectedEmailTemplate.email_template
        }
      });

      if (data.status) {
        messageApi.success('Sent emails successful!');
        onClose();
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      messageApi.error((err as Error).message);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className='overflow-visible max-w-lg h-1/3'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Upload audiences email in CSV file
              </div>
            </ModalHeader>
            <ModalBody>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload CSV file</label>
              <input ref={csvFileRef} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept='*.csv' onChange={handleCSVFileChange} />
            </ModalBody>
            <ModalFooter className="flex w-full gap-6">
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white ${ csvData.length === 0 ? "!bg-background-300" : "bg-primary-purple"} hover:brightness-110 border-background-500`}
                disabled={csvData.length === 0}
                onClick={handleLaunchEmail}
              >
                Launch
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LaunchToGmailModal;
