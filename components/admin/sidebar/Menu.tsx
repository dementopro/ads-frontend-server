'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon } from '@iconify/react';
import { message } from 'antd';

import { useSeoAnalyzerContext } from '@/context/seo';
import { CompanyValidate } from '@/lib/validate';
// Import necessary modules and components
import { useTutorialsContext } from '@/context/tutorials';
import { LeftStraightLineArrow } from '@/components/tutorial/Arrows';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import CloseButton from '@/components/tutorial/CloseButton';

// Define an array of menu items with their properties
const menuItems = [
  {
    text: 'Get Started',
    href: '/home',
    icon: '/images/sidebar/home.svg',
    activeIcon: '/images/sidebar/active/home.svg',
    tutorial: {
      width: 310,
      description:
        'Get Started is your starting point. Here you will create a new project & input your brand.',
    },
  },
  // {
  //   text: 'Your Projects',
  //   href: '/projects',
  //   icon: '/images/sidebar/projects.svg',
  //   activeIcon: '/images/sidebar/active/projects.svg'
  // },
  {
    text: 'Planning',
    href: '/planning',
    icon: '/images/sidebar/planning.svg',
    activeIcon: '/images/sidebar/active/planning.svg',
    tutorial: {
      width: 350,
      description:
        'Once you’ve added your brand details and chosen which type of content you’d like to optimize then you will plan your content specific strategy for the optimizations.',
    },
  },
  {
    text: 'Channels',
    icon: '/images/sidebar/generate.svg',
    activeIcon: '/images/sidebar/active/generate.svg',
    children: [
      {
        text: 'SEO',
        href: '/contentType/seo',
      },
      {
        text: 'Social Media',
        href: '/contentType/socialMedia',
      },
      {
        text: 'Email Marketing',
        href: '/contentType/emailMarketing',
      },
      {
        text: 'Infographics',
        href: '/contentType/infographics',
      },
      {
        text: 'Landing Page',
        href: '/contentType/landingpage',
      },
      {
        text: 'Video',
        href: '/contentType/video',
      },
    ],
    tutorial: {
      width: 310,
      description:
        'In the content tab, you will find your optimized recommendations and you’ll also be able to edit, download or implement your recommendations',
    },
  },
  {
    text: 'Social Insights',
    icon: '/images/sidebar/social-joomla.svg',
    activeIcon: '/images/sidebar/active/social-joomla.svg',
    href: '/socialInsights',
    tutorial: {
      width: 310,
      description:
        'View your ad performance, historical data, and receive optimized recommendations for each of you social accounts.',
    },
  },
  // {
  //   text: 'Ads Management',
  //   icon: '/images/sidebar/manage.svg',
  //   activeIcon: '/images/sidebar/active/manage.svg',
  // },
  // {
  //   text: 'Optimization Tools',
  //   icon: '/images/sidebar/opti.svg',
  //   activeIcon: '/images/sidebar/active/opti.svg',
  // }
];

// Define the MenuSigleBtnProps type
type MenuSigleBtnProps = {
  text: string;
  isActive: boolean;
  icon?: string;
  activeIcon?: string;
  href?: string;
};

// Define the MenuSigleBtn component
function MenuSigleBtn({
  text,
  isActive,
  icon,
  activeIcon,
  href,
}: MenuSigleBtnProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { company, setCompany } = useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();

  // Handle button click
  function handleClick() {
    if (pathname === href) {
      window.location.reload();
    } else {
      const errors = CompanyValidate({
        companyName: company.name,
        websiteURL: company.website,
        description: company.description,
        competitors: company.competitors,
        email: company.email,
        idealCustomerProfile: company.customer_profile,
        marketing_template: company.marketing_template,
        schedule: company.schedule,
        sellingDescription: company.product_description,
        targetAudience: company.target_audice,
        url: company.url,
      });

      if (
        href === '/planning' &&
        (errors.companyName !== '' ||
          errors.websiteURL !== '' ||
          errors.description !== '')
      ) {
        messageApi
          .error('Please fill required fields on Get Started page and Save')
          .then((value) => {
            if (pathname !== '/home') {
              router.push('/home');
            }
          });
        return;
      } else if (href?.startsWith('/contentType')) {
        if (
          errors.companyName !== '' ||
          errors.websiteURL !== '' ||
          errors.description !== ''
        ) {
          messageApi
            .error('Please fill required fields on Get Started page and Save')
            .then((value) => {
              router.push('/home');
            });
          return;
        } else {
          if (
            (href?.includes('seo') &&
              (errors.idealCustomerProfile !== '' ||
                errors.targetAudience !== '' ||
                errors.competitors !== '')) ||
            (href?.includes('emailMarketing') &&
              (errors.idealCustomerProfile !== '' ||
                errors.targetAudience !== '' ||
                errors.email !== '' ||
                errors.marketing_template !== ''))
          ) {
            messageApi
              .error('Please fill additional details on Planning page and Save')
              .then((value) => {
                if (pathname !== '/planning') {
                  router.push('/planning');
                }
              });
            return;
          } else {
            messageApi
              .error('Please choose recommendation on Planning page')
              .then((value) => {
                if (pathname !== '/planning') {
                  router.push('/planning?step=2');
                }
              });
            return;
          }
        }
      }

      router.push(href!);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex h-[44px] text-[15px] w-full items-center hover:text-white hover:bg-[#383454] px-8 transition ease-in-out ${
        isActive
          ? 'bg-[#35363A] border-r-purple text-white border-r-[3px]'
          : 'bg-transparent text-primary-gray'
      }`}
    >
      {contextHolder}
      {icon ? (
        <Image
          src={isActive ? activeIcon! : icon}
          alt={text}
          width={20}
          height={20}
          className="mr-5"
        />
      ) : (
        <span className="ml-6" />
      )}
      {text}
    </button>
  );
}

// Define the Menu component
export default function Menu() {
  const { isInTutorialMode, tutorialCampaign, guideModeIndex } =
    useTutorialsContext();
  const pathname = usePathname();

  return (
    <div className="mx-auto w-full rounded-2x flex flex-col gap-[18px] relative">
      {menuItems.map((item, index) => {
        return (
          <div className="relative" key={item.text}>
            {item.children?.length ? (
              <Disclosure
                defaultOpen={item.children
                  .map((child) => child.href)
                  .includes(pathname as string)}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`relative flex text-[15px] h-[44px] w-full items-center justify-between bg-transparent text-primary-gray px-8 hover:bg-[#383454] hover:text-white`}
                    >
                      <div className="flex items-center">
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.text}
                            width={20}
                            height={20}
                            className="mr-5"
                          />
                        )}
                        <span>{item.text}</span>
                      </div>
                      <Icon
                        icon={chevronDown}
                        width={20}
                        height={20}
                        className={`${
                          !isInTutorialMode && open
                            ? 'rotate-180 transform'
                            : ''
                        }`}
                      />
                    </Disclosure.Button>
                    {!isInTutorialMode && (
                      <Disclosure.Panel className="">
                        {item.children?.map((child, index) => {
                          return (
                            <MenuSigleBtn
                              href={child.href}
                              isActive={pathname === child.href}
                              text={child.text}
                              key={index}
                            />
                          );
                        })}
                      </Disclosure.Panel>
                    )}
                  </>
                )}
              </Disclosure>
            ) : (
              <Disclosure as="div">
                <MenuSigleBtn
                  text={item.text}
                  icon={item.icon}
                  activeIcon={item.activeIcon}
                  isActive={
                    isInTutorialMode
                      ? tutorialCampaign === 'NAVIGATION' &&
                        index === guideModeIndex
                      : pathname === item.href
                  }
                  href={item.href}
                />
              </Disclosure>
            )}
            {isInTutorialMode === true &&
              tutorialCampaign === 'NAVIGATION' &&
              guideModeIndex === index && (
                <Fragment>
                  <LeftStraightLineArrow
                    width={77}
                    height={12}
                    className="absolute left-[100%] top-[50%] translate-x-[5px] translate-y-[-50%] tutorial-element"
                  />
                  <div
                    className={`absolute !w-[310px] left-[100%] top-[50%] bg-primary-purple rounded-md text-white p-2 text-md translate-x-[90px] translate-y-[-50%] tutorial-element`}
                  >
                    {item.tutorial.description}
                  </div>
                </Fragment>
              )}
          </div>
        );
      })}
      {isInTutorialMode && tutorialCampaign === 'NAVIGATION' && (
        <Fragment>
          <div className="w-screen h-screen left-0 top-0 fixed">
            <div className="absolute left-1/2 bottom-40">
              <NavigationButtons />
            </div>
          </div>
          <div className="absolute top-0 right-0 translate-x-[150%] translate-y-[-15px]">
            <CloseButton />
          </div>
        </Fragment>
      )}
    </div>
  );
}
