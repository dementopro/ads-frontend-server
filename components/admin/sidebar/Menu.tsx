'use client'
import { Disclosure } from '@headlessui/react'
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

const menuItems = [
  {
    text: 'Home',
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
    text: 'Generate',
    icon: '/images/sidebar/generate.svg',
    activeIcon: '/images/sidebar/active/generate.svg',
    children: [
      {
        text: 'Text to Image',
        href: '/generate/textToImage',
      },
      {
        text: 'Image to Image',
        href: '/generate/imageToImage',
      },
      {
        text: 'Text to Copies',
        href: '/generate/productDescription?mode=description',
      },
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

type MenuSigleBtnProps = {
  text: string,
  isActive: boolean,
  icon?: string,
  activeIcon?: string,
  href?: string
}

function MenuSigleBtn({ text, isActive, icon, activeIcon, href }: MenuSigleBtnProps) {
  const router = useRouter()
  const pathname = usePathname()

  function handleClick() {
    if (pathname === href) {
      window.location.reload()
    } else {
      router.push(href!)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex h-[44px] text-[15px] w-full items-center hover:text-white hover:bg-[#383454] px-8 transition-all ${isActive ? 'bg-[#35363A] border-r-primary-purple text-white border-r-[3px]' : 'bg-transparent text-primary-gray'}`}
    >
      {
        icon
          ? <Image src={isActive ? activeIcon! : icon} alt={text} width={20} height={20} className="mr-5" />
          : <span className='ml-6' />
      }
      {text}
    </button>
  )
}

export default function Menu() {

  const pathname = usePathname()

  return (
    <div className="mx-auto w-full rounded-2x flex flex-col gap-[18px]">
      {
        menuItems.map((item, index) => {
          return (
            item.children?.length ?
              <Disclosure defaultOpen={item.children.map(child => child.href).includes(pathname)} key={index}>
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
  )
}
