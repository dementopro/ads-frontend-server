import React from 'react';
import { Icon } from '@iconify/react';

import InviteCollaboratorForm from './InviteCollaboratorForm';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  onUpdated: () => void;
};

const InviteCollaborator = ({ show, setShow, onUpdated }: Props) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[1000px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-10">
            <div
              className="absolute top-6 right-6 cursor-pointer hover:opacity-80"
              onClick={() => setShow(false)}
            >
              <Icon
                icon="mdi:close-circle-outline"
                className="text-[#5F6368]"
                width={24}
                height={24}
              />
            </div>

            <div className="flex flex-col items-center">
              <InviteCollaboratorForm
                setShow={setShow}
                onUpdated={() => {
                  onUpdated();
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InviteCollaborator;
