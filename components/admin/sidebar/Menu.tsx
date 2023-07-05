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
    icon: '/images/sidebar/home.svg'
  },
  {
    text: 'Your Projects',
    href: '/projects',
    icon: '/images/sidebar/projects.svg'
  },
  {
    text: 'Planning',
    icon: '/images/sidebar/planning.svg',
  },
  {
    text: 'Generate',
    icon: '/images/sidebar/generate.svg',
    children: [
      {
        text: 'Text To Image',
      },
      {
        text: 'Product Description',
      },
      {
        text: 'Product Email',
      },
    ]
  },
  {
    text: 'Social Insights',
    icon: '/images/sidebar/social.svg',
  },
  {
    text: 'Ads Management',
    icon: '/images/sidebar/manage.svg',
  },
  {
    text: 'Optimization Tools',
    icon: '/images/sidebar/opti.svg',
  }
]

type MenuSigleBtnProps = {
  text: string,
  isActive: boolean,
  icon?: string,
  href?: string
}

function MenuSigleBtn({ text, isActive, icon, href }: MenuSigleBtnProps) {
  const router = useRouter()

  function handleClick() {
    if (href) {
      router.push(href)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`flex h-[50px] w-full items-center hover:text-white hover:bg-[#23252B] px-4 transition-all ${isActive ? 'bg-[#23252B] border-r-[#844FFF] text-white font-semibold border-r-[2px]' : 'bg-transparent text-[#ABABAB]'}`}
    >
      {icon && <Image src={icon} alt={text} width={20} height={20} className="mr-5" />}
      {text}
    </button>
  )
}

export default function Menu() {

  const pathname = usePathname()

  return (
    <div className="mx-auto w-full rounded-2x">
      {
        menuItems.map((item, index) => {
          return (
            item.children?.length ?
              <Disclosure as="div" key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`flex h-[50px] w-full items-center justify-between bg-transparent text-[#ABABAB] px-4 hover:bg-[#23252B]`}>
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
                            <MenuSigleBtn isActive={pathname === item.href} text={child.text} key={index} />
                          )
                        })
                      }
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              :
              <Disclosure as="div" key={index}>
                <MenuSigleBtn text={item.text} icon={item.icon} isActive={pathname === item.href} href={item.href} />
              </Disclosure>
          )
        })
      }
    </div>
  )
}
