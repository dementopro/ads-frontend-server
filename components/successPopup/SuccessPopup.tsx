import * as React from 'react';
import { Dialog } from '@headlessui/react';
import { BiSolidBadgeDollar } from 'react-icons/bi';

interface SuccessPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
  goToProjects: () => void;
}

const SuccessPopup: React.FunctionComponent<SuccessPopupProps> = ({
  isOpen,
  togglePopup,
  goToProjects,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => togglePopup()}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="flex flex-col gap-4 items-center justify-center bg-[#15151c] text-white rounded-[12px]">
          <Dialog.Title className="flex items-end justify-center w-full h-60 bg-[url(/images/success-popup.png)] bg-cover rounded-[12px]">
            <h1 className="font-semibold text-xl">
              Congrats! You&apos;ve just saved your project.
            </h1>
          </Dialog.Title>
          <Dialog.Description className="w-[460px] text-center px-8">
            <p className="font-normal text-sm text-[#ABABAB]">
              See your saved projects in the projects tab.
            </p>
          </Dialog.Description>
          <div className="flex items-center gap-8 w-full pb-20 px-8">
            <button
              className="flex items-center justify-center w-1/2 py-2 px-8 rounded-[12px] border border-[#5F6368] text-sm"
              onClick={togglePopup}
            >
              Back
            </button>
            <button
              className="flex items-center justify-center w-1/2 py-2 px-8 rounded-[12px] bg-primary-gradient text-sm"
              onClick={goToProjects}
            >
              Go to Projects
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SuccessPopup;
