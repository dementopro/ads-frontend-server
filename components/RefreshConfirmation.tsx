import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC, useRef, useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';

interface RefreshConfirmationModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

const RefreshConfirmationModal: FC<RefreshConfirmationModalProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className="overflow-visible max-w-lg"
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Are you sure you want to refresh?
              </div>
            </ModalHeader>
            <ModalBody>
              <p className="text-white">
                Refreshing will create new optimizations for all media assets.
                <br />
                <br />
                You won’t be able to see old optimizations anymore.
              </p>
            </ModalBody>
            <ModalFooter className="flex w-full gap-6">
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500`}
                onClick={onConfirm}
              >
                Refresh
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RefreshConfirmationModal;
