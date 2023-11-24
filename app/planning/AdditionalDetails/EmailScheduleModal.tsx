import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import React, { FC } from 'react';

interface EmailScheduleModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const EmailScheduleModal: FC<EmailScheduleModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='text-white bg-background-100'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Email Schedule</ModalHeader>
              <ModalBody>
                {/* Email Schedule Modal Body */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="default" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
};

export default EmailScheduleModal;
