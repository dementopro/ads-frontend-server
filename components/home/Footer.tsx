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
import { footerLinks } from '@/data/footerLink';

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex flex-col gap-6">
    <h4 className="font-semibold uppercase">{title}</h4>
    <ul className="flex flex-col gap-3 text-sm font-normal text-primary-gray">
      {links.map((link) => (
        <Link href="/" key={link} className='hover:text-white'>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='px-20 pt-10 bg-[black]'>
      <div className='flex flex-wrap gap-8 justify-between'>
        <div className='flex flex-col gap-2'>
          <Image src='/logo.svg' width={131} height={50} alt='AdsGency AI' />
          <span className='text-sm text-primary-gray'>
            One stop ads platform without limits
          </span>
          {/* icons */}
          <div className='flex items-center gap-3 text-primary-gray'>
            <Icon
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100090180429796', '_blank')}
              className='hover:text-white cursor-pointer' width={24} height={24} icon={facebookIcon} />
            <Icon onClick={
              () => window.open('https://twitter.com/AdsGency_AI', '_blank')
            } className='hover:text-white cursor-pointer' width={24} height={24} icon={twitterIcon} />
            <Icon onClick={
              () => window.open('mailto:xinrliu@adsgency.ai', '_blank')
            } className='hover:text-white cursor-pointer' width={24} height={24} icon={gmailIcon} />
            <Icon onClick={
              () => window.open('https://www.youtube.com/@AdsGencyAI', '_blank')
            } className='hover:text-white cursor-pointer' width={24} height={24} icon={youtubeIcon} />
            <Icon onClick={
              () => window.open('https://www.linkedin.com/company/adsgency-ai', '_blank')
            } className='hover:text-white cursor-pointer' width={24} height={24} icon={linkedinIcon} />
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
      <div className='border-t mt-10 text-primary-gray text-sm border-primary-gray/50 py-4'>
        <span>&copy; 2023 AdsGency AI. All rights reserved.</span>
      </div>
    </footer >
  )
}

export default Footer
