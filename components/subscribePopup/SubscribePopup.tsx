import * as React from 'react';
import { Dialog } from '@headlessui/react';
import { BiSolidBadgeDollar } from 'react-icons/bi';

interface SubscribePopupProps {
  isOpen: boolean;
  togglePopup: () => void;
  router: any;
}

const SubscribePopup: React.FunctionComponent<SubscribePopupProps> = ({
  isOpen,
  togglePopup,
  router,
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
          <BiSolidBadgeDollar className="w-12 h-12" />
          <Dialog.Title>
            <h1 className="font-bold text-xl">Do you like what you see?</h1>
          </Dialog.Title>
          <Dialog.Description className="w-[460px] text-center">
            <p className="font-semibold text-md">
              It seems you are still on the free plan. If you want access to
              this feature and many more, please consider upgrading your
              subscription.
            </p>
          </Dialog.Description>
          <button
            className="flex items-center justify-center py-2 px-8 rounded-[12px] bg-primary-gradient"
            onClick={() => router.push('/pricing')}
          >
            Upgrade
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SubscribePopup;
