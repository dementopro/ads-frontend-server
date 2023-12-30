import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC, useState } from 'react';
import { BiLink, BiCheck } from 'react-icons/bi';

import styles from '../planning.module.css';

interface LandingPageShareModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  link: string;
};

const EmailEditModal: FC<LandingPageShareModalProps> = ({
  isOpen,
  onOpenChange,
  link,
}) => {
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);

  const handleCopyLink = () => {
    setIsLinkCopied(true);
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className='overflow-visible max-w-screen-sm h-fit'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-2xl">
                All Set! Your page is live
              </div>
              <p className="text-sm text-primary-gray">You can now access your page online and share it to others</p>
            </ModalHeader>
            <ModalBody>
              <div className={`${styles.div} !flex-row justify-center !gap-0`}>
                <p className="mr-3">{link}</p>
                {
                  isLinkCopied ? <BiCheck className="text-primary-purple w-5 h-5" /> : <BiLink className="w-5 h-5 cursor-pointer" onClick={handleCopyLink} />
                }
              </div>
            </ModalBody>
            <ModalFooter className="flex w-full gap-6 justify-center">
              <button
                className="flex items-center justify-center w-[150px] h-[44px] rounded-lg text-white bg-primary-purple hover:bg-background-200/20 border border-background-500"
                onClick={onClose}
              >
                OK, Close
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailEditModal;
