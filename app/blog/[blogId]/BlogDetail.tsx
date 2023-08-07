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
      <div className='mx-auto max-w-[1000px] px-8 flex flex-col items-center justify-center gap-2 w-full relative my-8'>
        <Link href='/blog' title='Go back to blogs'>
          <Icon icon='mdi:arrow-left' width={24} height={24} className='text-white hover:opacity-80 absolute left-3 top-[50%] translate-y-[-50%]' />
        </Link>
        <div className='text-white/80'>
          <time>{blog.publishDate}</time> - Release
        </div>
        <h1 className={`${styles['landing-txt']} select-none max-w-[800px] leading-loose text-4xl font-semibold text-center`}>{blog.title}</h1>
        <span className='text-primary-gray text-sm'>@{blog.publisher}</span>
      </div>
      <div className='text-base mx-auto max-w-[1000px] relative'>
        <div className='relative w-[600px] mx-auto my-8'>
          <Image src={blog.images[0]} alt={blog.title} width={600} height={600} className='rounded-md max-w-full h-auto' />
        </div>
        {blog.content.map((paragraph, index) => (
          <p key={index} className='my-4 text-white/80'>
            {paragraph}
          </p>
        ))}
        <div className='flex flex-col gap-8 my-12'>
          {
            blog.images.slice(1).map((image, index) => (
              <div key={index} className='relative w-[600px] mx-auto'>
                <Image src={image} alt={blog.title} width={600} height={600} className='rounded-md max-w-full h-auto' />
              </div>
            ))
          }
        </div>
        <p className='text-primary-gray/80 text-center'>
          - End -
        </p>
      </div>
    </div>
  )
}

export default BlogDetail
