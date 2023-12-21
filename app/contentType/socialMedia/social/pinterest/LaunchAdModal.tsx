import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import { BiInfoCircle } from 'react-icons/bi';
import StyledComponents from 'styled-components';
import axios from 'axios';

const StyledSelect = StyledComponents(Select)`
  & > label {
    color: white !important;
  },
  & svg {
    stroke: black !important;
  },
  & [data-slot='value'] {
    color: black !important;
  }
  & button {
    color: black !important;
  }
`;
interface LaunchAdModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  company: any;
  socialMedia: any;
}

export const SelectorIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M8 9l4 -4l4 4" />
    <path d="M16 15l-4 4l-4 -4" />
  </svg>
);

const LaunchAdModal: FC<LaunchAdModalProps> = ({
  isOpen,
  onOpenChange,
  company,
  socialMedia
}) => {
  const [adAccounts, setAdAccounts] = useState([]);
  const [adGroups, setAdGroups] = useState([]);
  const [selectedAdAccount, setSelectedAdAccount] = useState(null);
  const [selectedAdGroup, setSelectedAdGroup] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();

  const handleAdAccountsSelectionChange = (e: any) => {
    setSelectedAdAccount(e.target.value);
  };

  const handleAdGroupSelectionChange = (e: any) => {
    setSelectedAdGroup(e.target.value);
  };

  const handleLaunchAd = async () => {
    try {
      await axios.post("/api/planning/pinterest/launchAd", {
        accessToken: (session as any)["pinterest"].accessToken,
        adAccountId: selectedAdAccount,
        adGroupId: selectedAdGroup,
        link: company.website,
        title: socialMedia.content.title,
        description: socialMedia.content.caption,
        media_image_url: socialMedia.img_url
      });
      messageApi.success("Launched Ad on Pinterest Success")
    } catch (error) {
      console.log("error: ", error);
      messageApi.error("Something went wrong");
    }
  }

  const isValid: boolean = useMemo(() => {
    return !!selectedAdAccount && !!selectedAdGroup
  }, [selectedAdAccount, selectedAdGroup]);

  useEffect(() => {
    (async () => {
      if (isOpen) {
        const adAccounts = await axios.post("/api/planning/pinterest/getAdAccounts", {
          accessToken: (session as any)["pinterest"].accessToken,
        });

        setAdAccounts(adAccounts.data as []);
      }
    })();
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      if (selectedAdAccount) {
        const adGroups = await axios.post(`/api/planning/pinterest/getAdGroups?ad_account_id=${selectedAdAccount}`, {
          accessToken: (session as any)["pinterest"].accessToken
        });

        setAdGroups(adGroups.data as []);
      }
    })();
  }, [selectedAdAccount]);

  return (
    <>
      {contextHolder}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        className='max-w-2xl overflow-visible'
      >
        <ModalContent className="p-6 text-white bg-background-100">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-2xl">
                  <BiInfoCircle className="w-7 h-7" />
                  Launch Ad to Pinterest
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <StyledSelect
                    label="Ad Accounts"
                    color='default'
                    placeholder="Select an ad account"
                    labelPlacement="outside"
                    className="max-w-xs text-white"
                    disableSelectorIconRotation
                    selectedKeys={selectedAdAccount ? [selectedAdAccount] : []}
                    onChange={handleAdAccountsSelectionChange}
                    selectorIcon={<SelectorIcon />}
                  >
                    {adAccounts.map((adAccount) => (
                      <SelectItem key={(adAccount as any)['id']} value={adAccount}>
                        {(adAccount as any)['name']}
                      </SelectItem>
                    ))}
                  </StyledSelect>
                  <StyledSelect
                    label="Ad Groups"
                    color='default'
                    placeholder="Select an ad group"
                    labelPlacement="outside"
                    className="max-w-xs !text-white !mt-10"
                    disableSelectorIconRotation
                    selectedKeys={selectedAdGroup ? [selectedAdGroup] : []}
                    onChange={handleAdGroupSelectionChange}
                    selectorIcon={<SelectorIcon />}
                  >
                    {adGroups.map((adGroup) => (
                      <SelectItem key={(adGroup as any)['id']} value={adGroup}>
                        {(adGroup as any)['name']}
                      </SelectItem>
                    ))}
                  </StyledSelect>
                </div>
              </ModalBody>
              <ModalFooter className="flex w-full gap-6">
                <button
                  className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white ${isValid ? 'bg-primary-purple' : '!bg-background-300'} hover:brightness-110 border-background-500`}
                  disabled={!isValid}
                  onClick={handleLaunchAd}
                >
                  Launch
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LaunchAdModal;
