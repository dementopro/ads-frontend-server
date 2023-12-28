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
                    {headerLinks.map((link, index) => (
                        link.links.length === 0 ? ( // Check if links array is not empty
                            <Link key={index} href={link.url} className="w-full hover:text-[#9D93FF]">
                                {link.title}
                            </Link>
                        ) : (
                            <Dropdown key={index} heading={link.title} links={link.links} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileMenu