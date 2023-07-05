'use client'
import { Disclosure } from '@headlessui/react'
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon, IconifyIcon } from '@iconify/react';
import { usePathname, useRouter } from 'next/navigation'
import castEducation from '@iconify/icons-mdi/cast-education';
import chartBar from '@iconify/icons-mdi/chart-bar';
import folderCogOutline from '@iconify/icons-mdi/folder-cog-outline';
import creationOutline from '@iconify/icons-mdi/creation-outline';
import panoramaVariantOutline from '@iconify/icons-mdi/panorama-variant-outline';

const menuItems = [
  {
    text: 'Home',
    href: '/home',
    icon: castEducation
  },
  {
    text: 'Your Projects',
    href: '/projects',
    icon: panoramaVariantOutline
  },
  {
    text: 'Planning',
    icon: castEducation
  },
  {
    text: 'Generate',
    icon: castEducation,
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
    icon: chartBar,
  },
  {
    text: 'Ads Management',
    icon: folderCogOutline,
  },
  {
    text: 'Optimization Tools',
    icon: creationOutline,
  }
]

type MenuSigleBtnProps = {
  text: string,
  isActive: boolean,
  icon?: IconifyIcon,
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
      className={`flex w-full items-center rounded-lg bg-transparent hover:bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-white py-2 px-4 ${isActive ? 'bg-gradient-to-r' : ''}`}
    >
      {icon && <Icon icon={icon} className="mr-2" />}
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
              <Disclosure as="div" className="mt-2" key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`flex w-full items-center justify-between rounded-lg bg-transparent text-white py-2 px-4 hover:bg-gradient-to-r from-[#D634FF] to-[#4663FF]`}>
                      <div className='flex items-center'>
                        {item.icon && <Icon icon={item.icon} className="mr-2" />}
                        <span>{item.text}</span>
                      </div>
                      <Icon icon={chevronDown}
                        className={`${open ? 'rotate-180 transform' : ''}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
              <Disclosure as="div" className="mt-2" key={index}>
                <MenuSigleBtn text={item.text} icon={item.icon} isActive={pathname === item.href} href={item.href} />
              </Disclosure>
          )
        })
      }
    </div>
  )
}
