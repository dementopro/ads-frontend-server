import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import React, { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { type TutorialCampaign, useTutorialsContext } from '@/context/tutorials';

interface TutorialFinishModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorialCampaign: TutorialCampaign;
}

const TutorialFinishModal: FC<TutorialFinishModalProps> = ({
  isOpen,
  onClose,
  tutorialCampaign
}) => {
  const tutorialVideoRef = useRef<HTMLVideoElement>(null);
  const { startTutorial, closeTutorial } = useTutorialsContext();
  const router = useRouter();

  const handleFinishTutorial = () => {
    closeTutorial();
    onClose();
  };

  const handleRedoTutorial = () => {
    onClose();
    router.push('/home');
    setTimeout(() => {
      startTutorial('HOME');
    }, 300);
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
              Tutorial Completed
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="border border-solid border-background-500 p-2 rounded-lg">
              <video ref={tutorialVideoRef} autoPlay={true} muted loop><source type="video/mp4" src="/videos/tutorial.mp4" /></video>
            </div>
            <div className="pr-3 mt-3">
              <p className="text-white text-lg">
                🎉Congratulations!🎉 You’ve completed the SEO tutorial.
              </p>
            </div>
          </ModalBody>
          <ModalFooter className="flex w-full gap-6">
            <button
              className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
              onClick={handleRedoTutorial}
            >
              Redo Tutorial
            </button>
            <button
              className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500`}
              onClick={handleFinishTutorial}
            >
              Finish
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TutorialFinishModal;
