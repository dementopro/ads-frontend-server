'use client'
import MemberList from '@/app/profile/MemberList'
import { Icon } from '@iconify/react'
import React from 'react'

const Member = () => {
  return (
    <>
      <div className='px-6 py-5 bg-[#1B1C21] border border-[#27282F] rounded-lg flex justify-between flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-primary-gray text-base flex items-center gap-2'>
            <Icon width={24} height={24} icon='ri:group-line' />
            <span>3 members</span>
          </h2>
          <button className='flex items-center justify-center gap-2 bg-primary-purple text-white rounded-lg px-4 py-2 hover:opacity-80 text-base'>
            <Icon icon='mdi:plus-circle-outline' />
            <span>Invite Collaborators</span>
          </button>
        </div>
        <MemberList />
      </div>
    </>
  )
}

export default Member
