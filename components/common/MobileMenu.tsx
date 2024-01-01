'use client'
import React from 'react'
import Link from 'next/link'
import { headerLinks } from '@/data/Links/headerLinks'
import Dropdown from '@/components/common/Dropdown'

interface MobileMenuProps {
  translate: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ translate }) => {
  return (
    <div className={`w-full android:block ipad:hidden h-auto absolute ${translate} z-30 transition ease-in-out !duration-500`}>
      <div className="px-[32px] py-[40px] w-full relative bg-[#15161A]">
        <div className="w-full relative justify-center items-start gap-[32px] inline-flex flex-col">
          {headerLinks.map((item, index) => (
            !item.section ? (
              <Link key={index} href={item.href} className="w-full hover:text-[#9D93FF]">
                {item.title}
              </Link>
            ) : (
              <Dropdown key={index} heading={item.title} section={item.section} />
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu