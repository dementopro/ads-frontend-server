import { Dropdown, MenuProps, message } from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useDisclosure } from '@nextui-org/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { signOut } from 'next-auth/react';
import { Icon } from '@iconify/react';

// Import necessary dependencies and components
import StartTutorialModal from '@/components/home/StartTutorialModal';
import { SUCCESS_CODE } from '@/data/constant';
import { onLogout } from '@/lib/auth';
import {
  type TutorialCampaign,
  useTutorialsContext,
} from '@/context/tutorials';
import { useAccountContext } from '@/context/account';
import { useSeoAnalyzerContext } from '@/context/seo';

// Define the DropDown component
const DropDown = () => {
  // Access the router for navigation
  const router = useRouter();
  // Use the message API from Ant Design for displaying messages
  const {
    isOpen: isStartTutorialModalOpen,
    onOpen: onStartTutorialModalOpen,
    onClose: onStartTutorialModalClose,
  } = useDisclosure();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    tutorialCampaign,
    guideModeIndex,
    setIsInTutorialMode,
    setTutorialCampaign,
    setGuideModeIndex,
    startTutorial,
    getGuideModes,
  } = useTutorialsContext();
  const { company } = useSeoAnalyzerContext();
  const { setAccount } = useAccountContext();
  const pathname = usePathname();

  // Define menu items for the dropdown
  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: (
        <button
          onClick={toProfilePage}
          className="text-center flex items-center justify-between gap-2 w-full"
        >
          <Icon
            icon="mdi:account"
            width={18}
            height={18}
            inline
            className="text-primary-gray"
          />
          <span className="flex-1 text-left">User profile</span>
        </button>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'access-management',
      label: (
        <button
          onClick={toAccessManagementPage}
          className="text-center flex items-center justify-between gap-2 w-full"
        >
          <Icon
            icon="mdi:account"
            width={18}
            height={18}
            inline
            className="text-primary-gray"
          />
          <span className="flex-1 text-left">Access Management</span>
        </button>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'signOut',
      label: (
        <button
          onClick={handleLogout}
          className="text-center flex items-center justify-between gap-2 w-full"
        >
          <Icon
            icon="mdi:logout-variant"
            width={18}
            height={18}
            inline
            className="text-primary-gray"
          />
          <span className="flex-1 text-left">Sign out</span>
        </button>
      ),
    },
  ];

  // Function to navigate to the user profile page
  function toProfilePage() {
    router.push('/profile');
  }

  // Function to navigate to the access management page
  function toAccessManagementPage() {
    router.push('/accessManagement');
  }

  const handleOpenTutorial = () => {
    if (tutorialCampaign === 'NONE' && guideModeIndex === -1) {
      onStartTutorialModalOpen();
    } else if (pathname?.includes('/home') && tutorialCampaign !== 'HOME') {
      startTutorial('HOME');
    } else if (
      pathname?.includes('/planning') &&
      company.content_type.toLowerCase() === 'seo'
    ) {
      // Additional SEO details
      if (tutorialCampaign !== 'SEO') startTutorial('SEO');
      else {
        const currentGuideModes = getGuideModes(
          tutorialCampaign as TutorialCampaign
        );
        const index: number = currentGuideModes.findIndex(
          (guideMode) => guideMode.mode === 'RECOMMENDATION'
        );
        if (index > -1) {
          setGuideModeIndex(index);
          setIsInTutorialMode(true);
        }
      }
    } else if (
      pathname?.includes('/contentType') &&
      pathname?.includes('/seo')
    ) {
      // SEO recommendations
      const seoGuideModes = getGuideModes('SEO');
      const index: number = seoGuideModes.findIndex(
        (guideMode) => guideMode.mode === 'DETAIL'
      );
      if (index > -1) {
        setTutorialCampaign('SEO');
        setGuideModeIndex(index);
        setIsInTutorialMode(true);
      }
    } else if (
      pathname?.includes('/planning') &&
      company.content_type.toLowerCase() === 'social media'
    ) {
      // Additional Social details
      if (tutorialCampaign !== 'SOCIAL') startTutorial('SOCIAL');
      else {
        const currentGuideModes = getGuideModes(
          tutorialCampaign as TutorialCampaign
        );
        const index: number = currentGuideModes.findIndex(
          (guideMode) => guideMode.mode === 'OAUTH'
        );
        if (index > -1) {
          setGuideModeIndex(index);
          // setTutorialCampaign('SEO');
          setIsInTutorialMode(true);
        }
      }
    } else if (
      pathname?.includes('/planning') &&
      company.content_type.toLowerCase() === 'email marketing'
    ) {
      // Additional mail details
      if (tutorialCampaign !== 'EMAIL') startTutorial('EMAIL');
      else {
        const currentGuideModes = getGuideModes(
          tutorialCampaign as TutorialCampaign
        );
        const index: number = currentGuideModes.findIndex(
          (guideMode) => guideMode.mode === 'OAUTH'
        );
        if (index > -1) {
          setGuideModeIndex(index);
          // setTutorialCampaign('EMAIL');
          setIsInTutorialMode(true);
        }
      }
    } else setIsInTutorialMode(true);
  };

  // Async function to handle user logout
  async function handleLogout() {
    try {
      // Display a loading message
      messageApi.loading('Logout...');
      onLogout();
      setAccount(null);
      signOut();
      router.push('/login');
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="flex items-center">
        <span className="relative inline-flex mr-10">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-primary-purple transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20"
            onClick={handleOpenTutorial}
          >
            Tutorial
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </span>
        {/* Create a dropdown menu with specified items */}
        <Dropdown menu={{ items }} arrow>
          {/* Render the dropdown trigger */}
          <a
            className="h-[46px] flex items-center justify-center gap-0 android:gap-4 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <Image
              src={'/images/admin/avatar.svg'}
              width={30}
              height={30}
              alt="avatar"
              className="rounded-full inline-block"
            />
            <Icon icon={chevronDown} inline className="text-primary-gray" />
          </a>
        </Dropdown>
      </div>

      <StartTutorialModal
        isOpen={isStartTutorialModalOpen}
        onClose={onStartTutorialModalClose}
      />
    </>
  );
};

// Export the DropDown component
export default DropDown;
