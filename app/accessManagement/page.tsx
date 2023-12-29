'use client';
import ReactGATag from '@/components/ReactGATag';
import AdminLayout from '@/layout/admin';
import React from 'react';
import Member from './Member';
import Image from 'next/image';
import { useDisclosure } from '@nextui-org/react';
import BugReportModal from '@/components/contactUs/BugReportModal';

const metadata = {
  title: 'Access Management - AdsGency AI',
};

const AccessManagementPage = () => {
  const {
    isOpen: isBugReportModalOpen,
    onOpen: onOpenBugReportModal,
    onOpenChange: onOpenBugReportModalChange,
    onClose: onCloseBugReportModal,
  } = useDisclosure();
  return (
    <AdminLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/accessManagement',
          title: metadata.title,
        }}
      />
      <section className="w-full">
        <Member />
      </section>

      <div className="flex float-right mt-[32px] gap-[10px]">
        <p className="text-white text-[15px] text-[color:var(--primary-300,#ABABAB)]">
          Find a bug or encountering an error? Submit an issue report with
          us&nbsp;
          <button
            className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline"
            onClick={() => {
              onOpenBugReportModal();
            }}
          >
            here
          </button>
          <BugReportModal
            isOpen={isBugReportModalOpen}
            onOpenChange={onOpenBugReportModalChange}
            onClose={onCloseBugReportModal}
          />
        </p>
        <Image
          width={28}
          height={28}
          src={'/images/admin/plan/info.svg'}
          alt="#"
        />
      </div>
    </AdminLayout>
  );
};

export default AccessManagementPage;
