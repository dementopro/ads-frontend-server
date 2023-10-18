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
import { footerLinks } from '@/data/footerLinks';

type ColumnProps = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-semibold uppercase text-white">{title}</h4>
    <ul className="flex flex-col gap-3 text-sm font-regular text-primary-gray">
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
    <footer className='px-6 sm:px-20 pt-10 bg-black'>
      <div className='desktop:w-[1240px] ipad:w-full desktop:m-auto ipad:m-[0px] flex flex-wrap gap-8 justify-between'>
        <div className='flex flex-col gap-2 max-sm:items-center max-sm:w-full'>
          <Image src='/logo.svg' width={131} height={50} alt='AdsGency AI' />
          <span className='text-sm text-primary-gray'>
            One stop ads platform without limits
          </span>
          {/* icons */}
          <div className='flex items-center gap-3 text-primary-gray'>
            <Icon
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100090180429796', '_blank')}
              className='hover:text-[#4267B2] cursor-pointer' width={24} height={24} icon={facebookIcon} />
            <Icon onClick={
              () => window.open('https://twitter.com/AdsGency_AI', '_blank')
            } className='hover:text-[#1DA1F2] cursor-pointer' width={24} height={24} icon={twitterIcon} />
            <Icon onClick={
              () => window.open('mailto:contactus@adsgency.ai', '_blank')
            } className='hover:text-[#0F9D58] cursor-pointer' width={24} height={24} icon={gmailIcon} />
            <Icon onClick={
              () => window.open('https://www.youtube.com/@AdsGencyAI', '_blank')
            } className='hover:text-[#FF0000] cursor-pointer' width={24} height={24} icon={youtubeIcon} />
            <Icon onClick={
              () => window.open('https://www.linkedin.com/company/adsgency-ai', '_blank')
            } className='hover:text-[#0077b5] cursor-pointer' width={24} height={24} icon={linkedinIcon} />
          </div>
        </div>
        <div className="flex flex-wrap gap-20">
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
      <div className='desktop:w-[1240px] ipad:w-full desktop:m-auto ipad:m-[0px] border-t mt-10 text-primary-gray max-sm:text-center text-sm border-primary-gray/30 py-4'>
        <span>&copy; 2023 AdsGency AI. All rights reserved.</span>
      </div>
    </footer >
  )
}

export default Footer