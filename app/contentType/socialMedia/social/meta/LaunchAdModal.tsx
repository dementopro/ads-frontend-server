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

import LoadingSpin from "@/app/planning/LoadingSpin";

const StyledSelect = StyledComponents(Select)`
  & > label {
    color: white !important;
  },
  & svg {
    stroke: black !important;
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
  const [pages, setPages] = useState<any[]>([]);
  const [adAccounts, setAdAccounts] = useState<any[]>([]);
  const [adSets, setAdSets] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedAdAccount, setSelectedAdAccount] = useState(null);
  const [selectedAdSet, setSelectedAdSet] = useState(null);
  const [isLaunchingAd, setIsLaunchingAd] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();

  const handlePageSelectionChange = (e: any) => {
    setSelectedPage(e.target.value);
  };

  const handleAdAccountsSelectionChange = (e: any) => {
    setSelectedAdAccount(e.target.value);
  };

  const handleAdSetsSelectionChange = (e: any) => {
    setSelectedAdSet(e.target.value);
  };

  const handleLaunchAd = async () => {
    try {
      setIsLaunchingAd(true);
      await axios.post("/api/planning/meta/launchAd", {
        pageId: selectedPage,
        accessToken: (session as any)["facebook"].accessToken,
        adAccountId: selectedAdAccount,
        adSetId: selectedAdSet,
        link: company.website,
        title: socialMedia.content.image,
        description: socialMedia.content.caption,
        media_image_url: socialMedia.img_url
      });
      messageApi.success("Launched Ad on Pinterest Success")
    } catch (error) {
      console.log("error: ", error);
      messageApi.error("Something went wrong");
    } finally {
      setIsLaunchingAd(false);
    };
  }

  const isValid: boolean = useMemo(() => {
    return !!selectedPage && !!selectedAdAccount && !!selectedAdSet;
  }, [selectedPage, selectedAdAccount, selectedAdSet]);

  useEffect(() => {
    (async () => {
      if (isOpen) {
        const body = {
          accountId: (session as any)["facebook"].accountId,
          accessToken: (session as any)["facebook"].accessToken,
        };

        const pagesResponse = await axios.post("/api/planning/meta/getPages", body);
        const pages: any[] = pagesResponse.data;
        pages.length > 0 ? setSelectedPage(pages[0].id) : setSelectedPage(null);
        setPages(pages);

        const accountsResponse = await axios.post("/api/planning/meta/getAdAccounts", body);
        const accounts: any[] = accountsResponse.data;
        accounts.length > 0 ? setSelectedAdAccount(accounts[0].id) : setSelectedAdAccount(null);
        setAdAccounts(accounts);
      }
    })();
  }, [isOpen]);

  useEffect(() => {
    (async () => {
      if (selectedAdAccount) {
        const adSetsResponse = await axios.post("/api/planning/meta/getAdSets", {
          adAccountId: selectedAdAccount,
          accessToken: (session as any)["facebook"].accessToken
        });

        const adSets: any[] = adSetsResponse.data;
        adSets.length > 0 ? setSelectedAdSet(adSets[0].id) : setSelectedAdSet(null);
        setAdSets(adSets);
      } else setSelectedAdSet(null);
    })();
  }, [selectedAdAccount]);

  return (
    <>
      {contextHolder}
      {isLaunchingAd && <LoadingSpin />}
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
                  Launch Ad to Facebook
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <StyledSelect
                    label="Pages"
                    color='default'
                    placeholder="Select a page"
                    labelPlacement="outside"
                    className="max-w-lg text-white"
                    disableSelectorIconRotation
                    selectedKeys={selectedPage ? [selectedPage] : []}
                    onChange={handlePageSelectionChange}
                    selectorIcon={<SelectorIcon />}
                  >
                    {pages.map((page) => (
                      <SelectItem key={(page as any)['id']} value={page}>
                        {(page as any)['name']}
                      </SelectItem>
                    ))}
                  </StyledSelect>
                </div>
                <div className="mt-4">
                  <StyledSelect
                    label="Ad Accounts"
                    color='default'
                    placeholder="Select an ad account"
                    labelPlacement="outside"
                    className="max-w-lg text-white"
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
                </div>
                
                <div className="mt-4">
                  <StyledSelect
                    label="Ad Sets"
                    color='default'
                    placeholder="Select an ad set"
                    labelPlacement="outside"
                    className="max-w-lg text-white mt-3"
                    disableSelectorIconRotation
                    selectedKeys={selectedAdSet ? [selectedAdSet] : []}
                    onChange={handleAdSetsSelectionChange}
                    selectorIcon={<SelectorIcon />}
                  >
                    {adSets.map((adSet) => (
                      <SelectItem key={(adSet as any)['id']} value={adSet}>
                        {(adSet as any)['name']}
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
                  className={`flex items-center justify-center flex-1 h-[44px] rounded-lg text-white ${isValid || !isLaunchingAd ? 'bg-primary-purple' : '!bg-background-300'} hover:brightness-110 border-background-500`}
                  disabled={!isValid || isLaunchingAd}
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
