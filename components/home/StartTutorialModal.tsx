import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import React, { FC, useEffect, useRef } from 'react';

import { useTutorialsContext } from '@/context/tutorials';

interface StartTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartTutorialModal: FC<StartTutorialModalProps> = ({
  isOpen,
  onClose
}) => {
  const tutorialVideoRef = useRef<HTMLVideoElement>(null);
  const { startTutorial } = useTutorialsContext();

  const handleStartTutorials = () => {
    startTutorial('NAVIGATION');
    onClose();
  };

  useEffect(() => {
    if (tutorialVideoRef.current)
      tutorialVideoRef.current.play();
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        hideCloseButton
        className='max-w-3xl overflow-visible'
      >
        <ModalContent className="p-6 text-white bg-background-100">
          <ModalHeader className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-2xl">
              Start Tutorial?
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="border border-solid border-background-500 p-2 rounded-lg">
              <video ref={tutorialVideoRef} autoPlay={true} muted loop><source type="video/mp4" src="/videos/tutorial.mp4" /></video>
            </div>
            <div className="pr-3 mt-3">
              <p className="text-white text-lg">
                Welcome to AdsGency AI, your go-to B2B AI platform for supercharging advertising and marketing performance!
              </p>
              <p className="text-white text-lg mt-10">
                To help you kickstart your experience, we invite you to take a guided tour with our comprehensive tutorial.
              </p>
            </div>
          </ModalBody>
          <ModalFooter className="flex w-full gap-6">
            <button
              className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
              onClick={onClose}
            >
              No thanks
            </button>
            <button
              className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500`}
              onClick={handleStartTutorials}
            >
              Start Tutorial
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StartTutorialModal;
