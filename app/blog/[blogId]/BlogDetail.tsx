'use client'
import { IBlog } from '@/types/blog'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/blog/blog.module.css'
import Image from 'next/image'

type Props = {
  blog: IBlog
}

const BlogDetail = ({ blog }: Props) => {
  return (
    <div className='my-8 flex flex-col w-full mx-auto container selection:bg-primary-purple'>
      <div className='mx-auto sm:max-w-[1000px] px-8 flex flex-col items-center justify-center gap-2 w-full relative my-8'>
        <Link target="_blank"  href='/blog' title='Go back to blogs'>
          <Icon icon='mdi:arrow-left' width={24} height={24} className='text-white hover:opacity-80 sm:absolute left-3 top-[50%] translate-y-[-50%]' />
        </Link>
        <div className='text-white/80'>
          <time>{blog.publishDate}</time> - Release
        </div>
        <h1 className={`${styles['landing-txt']} select-none max-w-[800px] leading-loose text-4xl font-semibold text-center`}>{blog.title}</h1>
        <span className='text-primary-gray text-sm'>@{blog.publisher}</span>
      </div>
      <div className='text-base mx-auto max-w-[1000px] relative'>
        {blog.content.map((paragraph, index) => {
          if (paragraph.startsWith('img:')) {
            const image = paragraph.replace('img:', '')
            return (
              <div key={index} className='relative w-full sm:w-[600px] mx-auto my-4 sm:my-12'>
                <Image src={image} alt={blog.title} width={600} height={600} className='sm:rounded-md max-w-full h-auto' />
              </div>
            )
          } else {
            return (
              <p key={index} className='p-4 text-white/80'>
                {paragraph}
              </p>
            )
          }
        })}
        <p className='max-sm:mt-8 text-primary-gray/80 text-center'>
          - End -
        </p>
      </div>
    </div>
  )
}

export default BlogDetail
