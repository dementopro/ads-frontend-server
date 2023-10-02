import EditProfileForm from '@/app/profile/EditProfileForm'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  show: boolean // Boolean indicating whether the component should be displayed
  username?: string // Optional username
  setShow: (show: boolean) => void // Function to control the visibility of the component
  onUpdated: () => void // Function to handle profile updates
}

const EditProfile = ({ show, setShow, username, onUpdated }: Props) => {
  return (
    <>
      {show && ( // Conditionally render the component based on the "show" prop
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[526px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-10">
            <div className="absolute top-6 right-6 cursor-pointer hover:opacity-80" onClick={() => setShow(false)}>
              {/* Close button */}
              <Icon icon="mdi:close-circle-outline" className="text-[#5F6368]" width={24} height={24} />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center font-bold text-3xl pb-6">
                User profile
              </div>
              {/* Avatar */}
              <div className='hidden mt-8 mb-6 flex-shrink-0 rounded-full w-[100px] h-[100px] relative overflow-hidden border border-primary-purple'>
                <Image
                  src='/images/avatar.svg'
                  fill
                  alt='avatar'
                />
              </div>
              {/* EditProfileForm component */}
              <EditProfileForm
                username={username}
                onUpdated={() => {
                  // Handle profile update and hide the component after a delay
                  onUpdated()
                  setTimeout(() => {
                    setShow(false)
                  }, 1000)
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProfile