'use client'
import Image from 'next/image'
import React from 'react'
import twitterIcon from '@iconify/icons-mdi/twitter';
import { Icon } from '@iconify/react'
import facebookIcon from '@iconify/icons-mdi/facebook';
import gmailIcon from '@iconify/icons-mdi/gmail';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import Link from 'next/link';
import { footerLinks } from '@/data/links/footerLinks';

type ColumnProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex flex-col gap-[8px]">
    <h4 className="font-semibold uppercase text-white">{title}</h4>
    <ul className="flex flex-col gap-[4px] text-[16px] font-regular text-[#C1BECA]">
      {links.map((link) => (
        <Link  href={link.href} key={link.label} className="hover:text-[#9D93FF]">
          {link.label}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-[32px] android:p-[32px] ipad:p-[60px] bg-black font-open-sans'>
      <div className='desktop:w-[1240px] ipad:w-full desktop:mx-auto flex flex-wrap gap-[32px] justify-between'>
        <div className='flex flex-col gap-[5px] items-start'>
          <Image src='/logo.svg' width={131} height={50} alt='AdsGency AI' />
          <span className='text-[16px] text-[#C1BECA]'>
            One stop ads platform without limits
          </span>
        </div>
        <div className="flex flex-wrap gap-[32px]">
          {
            footerLinks.map(item => (
              <FooterColumn
                key={item.title}
                title={item.title}
                links={item.links}
              />
            ))
          }
        </div>
      </div>
      <div className='desktop:w-[1240px] ipad:w-full desktop:mx-auto text-[#C1BECA] text-[16px] text-left border-t border-[#A09BAE] py-[12px]'>
        <span>&copy; 2023 AdsGency AI. All rights reserved.</span>
      </div>
    </footer >
  )
}

export default Footer