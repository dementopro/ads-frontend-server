import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC, Fragment, useState } from 'react';
import { BiCalendarEvent, BiCheck, BiInfoCircle } from 'react-icons/bi';
import { Listbox, Transition } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { useSeoAnalyzerContext } from '@/context/seo';
import { FormikHelpers, useFormik } from 'formik';
import { CompanyValidate } from '@/lib/validate';
import { DETAIL_LIMIT } from '@/data/constant';

interface BugReportModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

type FormData = {
  email: string;
  title: string;
  description: string;
}

const FormValidate = (values: FormData) => {
  const errors = {} as FormData;

  errors.title = values?.title ? (values.title.length < 50) ? '' : 'Title should be less than 50 characters' : 'Title is required';
  errors.description = values?.description ? (values.description.length >= 50 && values.description.length <= DETAIL_LIMIT) ? '' : `Description should be 50 - ${DETAIL_LIMIT} characters` : 'Description is required';
  errors.email = values?.email ? /^\w+([\.-]?\w+)*@gmail\.com$/.test(values?.email) ? '' : 'Email is not valid gmail!' : 'Email is required';

  return errors;
}

const BugReportModal: FC<BugReportModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const formik = useFormik<FormData>({
    initialValues: {
      email: '',
      title: '',
      description: '',
    },
    onSubmit,
    validate: FormValidate
  })

  async function onSubmit(
    values: FormData,
    actions: FormikHelpers<FormData>
  ) {}

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      size="4xl"
      className='overflow-visible'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Issue Report
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="w-full">
                <p className="mt-1 text-sm text-primary-gray">
                  *Email Address
                </p>
                <input
                  className={`border bg-[#1b1c21] text-white pl-[24px] py-[18px] rounded-lg mt-2 ${
                    formik.errors.email && formik.touched.email
                      ? 'border-rose-600'
                      : 'border-white/20'
                  } w-full `}
                  placeholder="Enter email address"
                  {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email && (
                  <label className="mt-2 text-xs text-rose-600">
                    {formik.errors.email}
                  </label>
                )}
              </div>
              <div className="w-full mt-4">
                <p className="mt-1 text-sm text-primary-gray">
                  *Title of issue
                </p>
                <input
                  className={`border bg-[#1b1c21] text-white pl-[24px] py-[18px] rounded-lg mt-2 ${
                    formik.errors.title && formik.touched.title
                      ? 'border-rose-600'
                      : 'border-white/20'
                  } w-full `}
                  placeholder="Enter concise title that summarizes the issue"
                  {...formik.getFieldProps('title')}
                />
                {formik.errors.title && formik.touched.title && (
                  <label className="mt-2 text-xs text-rose-600">
                    {formik.errors.title}
                  </label>
                )}
              </div>
              <div className="w-full mt-4">
                <p className="mt-1 text-sm text-primary-gray">
                  *Description
                </p>
                <div
                  className={` ${
                    true ? `max-h-[241px]` : `max-h-[141px]`
                  } flex flex-col w-full mt-2`}
                >
                  <textarea
                    className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                      formik.errors.description &&
                      formik.touched.description
                        ? '!border-rose-600'
                        : 'border-white/20'
                    } w-full `}
                    placeholder="Copy and paste your email marketing templates"
                    style={{
                      height: '220px',
                    }}
                    {...formik.getFieldProps('description')}
                  />
                  {formik.errors.description && formik.touched.description && (
                    <label className="mt-2 text-xs text-rose-600">
                      {formik.errors.description}
                    </label>
                  )}
                </div>
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

export default BugReportModal;
