import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import styles from './dropdown.module.css'
import Image from 'next/image'
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon } from '@iconify/react';


const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

const DropDown = () => {
  return (
    <Menu as={'div'} className={'relative'}>
      {({ open }) => (
        <>
          <Menu.Button className={`bg-white text-[#484848] border border-[#D2D2D2] h-[46px] px-4 flex items-center justify-between ${styles.dropDownBtn}`}>
            <Image src="/images/avatar.png" width={30} height={30} alt="avatar" className="rounded-full inline-block" />
            <span className="text-sm mx-2">John Doe</span>
            <Icon icon={chevronDown} inline />
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items static as='div' className={'absolute bg-red p-2 border right-0 mt-2 z-2 shadow bg-white flex flex-col gap-1 rounded'}>
              {links.map((link) => (
                <Menu.Item
                  as="a"
                  key={link.href}
                  href={link.href}
                  className="text-[#000] hover:bg-[#d634ff] hover:text-white px-2 py-1 w-[160px] truncate text-center rounded"
                >
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default DropDown
