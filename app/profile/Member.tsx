'use client'
import MemberList from '@/app/profile/MemberList'
import { Icon } from '@iconify/react'
import React from 'react'

const Member = () => {
  return (
    <>
      {/* Container for the member section */}
      <div className='px-6 py-5 bg-[#1B1C21] border border-[#27282F] rounded-lg flex justify-between flex-col'>
        <div className='flex items-center justify-between'>
          {/* Title with an icon */}
          <h2 className='text-primary-gray text-base flex items-center gap-2'>
            <Icon width={24} height={24} icon='ri:group-line' /> {/* Group icon */}
            <span>3 members</span> {/* Number of members */}
          </h2>
          {/* Button to invite collaborators */}
          <button className='flex items-center justify-center gap-2 bg-primary-purple text-white rounded-lg px-4 py-2 hover:opacity-80 text-base'>
            <Icon icon='mdi:plus-circle-outline' /> {/* Plus icon */}
            <span>Invite Collaborators</span> {/* Invite button text */}
          </button>
        </div>
        {/* MemberList component displays a list of members */}
        <MemberList />
      </div>
    </>
  )
}

export default Member