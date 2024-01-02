import * as React from 'react';
import { Dialog } from '@headlessui/react';
import { MdOutlineConstruction } from 'react-icons/md';

interface ComingSoonPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const ComingSoonPopup: React.FunctionComponent<ComingSoonPopupProps> = ({
  isOpen,
  togglePopup,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => togglePopup()}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="flex flex-col gap-4 items-center justify-center bg-[#23252B] text-white rounded-[12px] p-8">
          <MdOutlineConstruction className="w-12 h-12" />
          <Dialog.Title>
            <h1 className="font-bold text-xl">This feature is coming soon!</h1>
          </Dialog.Title>
          <button
            className="flex items-center justify-center py-2 px-8 rounded-[12px] bg-background-300"
            onClick={() => togglePopup()}
          >
            Done
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ComingSoonPopup;
