'use client'
import { useSeoAnalyzerContext } from '@/context/seo';
import { CompanyValidate } from '@/lib/validate';
// Import necessary modules and components
import { Disclosure } from '@headlessui/react'
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon } from '@iconify/react';
import { message } from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

// Define an array of menu items with their properties
const menuItems = [
  {
    text: 'Get Started',
    href: '/home',
    icon: '/images/sidebar/home.svg',
    activeIcon: '/images/sidebar/active/home.svg'
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
      }
    ]
  },
  {
    text: 'Social Insights',
    icon: '/images/sidebar/social-joomla.svg',
    activeIcon: '/images/sidebar/active/social-joomla.svg',
    href: '/socialInsights'
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
]

// Define the MenuSigleBtnProps type
type MenuSigleBtnProps = {
  text: string,
  isActive: boolean,
  icon?: string,
  activeIcon?: string,
  href?: string
};

// Define the MenuSigleBtn component
function MenuSigleBtn({ text, isActive, icon, activeIcon, href }: MenuSigleBtnProps) {
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
        url: company.url
      });

      if (href === '/planning' && (errors.companyName !== '' || errors.websiteURL !== '' || errors.description !== '')) {
        messageApi.error('Please fill required fields on Get Started page and Save').then((value) => {
          if (pathname !== '/home') {
            router.push('/home');
          }
        });
        return;
      } else if (href?.startsWith('/contentType')) {
        if (errors.companyName !== '' || errors.websiteURL !== '' || errors.description !== '') {
          messageApi.error('Please fill required fields on Get Started page and Save').then((value) => {
            router.push('/home');
          });
          return;
        } else {
          if (
            (href?.includes('seo') && (errors.idealCustomerProfile !== '' || errors.targetAudience !== '' || errors.competitors !== '')) ||
            (href?.includes('emailMarketing') && (errors.idealCustomerProfile !== '' || errors.targetAudience !== '' || errors.email !== '' || errors.marketing_template !== ''))
          ) {
            messageApi.error('Please fill additional details on Planning page and Save').then((value) => {
              if (pathname !== '/planning') {
                router.push('/planning');
              }
            });
            return;
          } else {
            messageApi.error('Please choose recommendation on Planning page').then((value) => {
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
      className={`flex h-[44px] text-[15px] w-full items-center hover:text-white hover:bg-[#383454] px-8 transition ease-in-out ${isActive ? 'bg-[#35363A] border-r-purple text-white border-r-[3px]' : 'bg-transparent text-primary-gray'}`}
    >
      {contextHolder}
      {
        icon
          ? <Image src={isActive ? activeIcon! : icon} alt={text} width={20} height={20} className="mr-5" />
          : <span className='ml-6' />
      }
      {text}
    </button>
  );
}

// Define the Menu component
export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="mx-auto w-full rounded-2x flex flex-col gap-[18px]">
      {
        menuItems.map((item, index) => {
          return (
            item.children?.length ?
              <Disclosure defaultOpen={item.children.map(child => child.href).includes(pathname as string)} key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`flex text-[15px] h-[44px] w-full items-center justify-between bg-transparent text-primary-gray px-8 hover:bg-[#383454] hover:text-white`}>
                      <div className='flex items-center'>
                        {item.icon && <Image src={item.icon} alt={item.text} width={20} height={20} className="mr-5" />}
                        <span>{item.text}</span>
                      </div>
                      <Icon icon={chevronDown} width={20} height={20}
                        className={`${open ? 'rotate-180 transform' : ''}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="">
                      {
                        item.children?.map((child, index) => {
                          return (
                            <MenuSigleBtn href={child.href} isActive={pathname === child.href} text={child.text} key={index} />
                          )
                        })
                      }
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              :
              <Disclosure as="div" key={index}>
                <MenuSigleBtn text={item.text} icon={item.icon} activeIcon={item.activeIcon} isActive={pathname === item.href} href={item.href} />
              </Disclosure>
          )
        })
      }
    </div>
  );
}
