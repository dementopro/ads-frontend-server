'use client'
import EditProfile from '@/app/profile/EditProfile';
import { SUCCESS_CODE } from '@/data/constant';
import { IUserProfileResp, UserProfile } from '@/types/account';
import { Icon } from '@iconify/react';
import { Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProfileCard = () => {

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch user profile information
  async function getUserProfile() {
    try {
      setLoading(true);
      const response = await fetch('/fapi/user_profile_api', {
        method: 'GET',
      });
      if (response.ok) {
        const data: IUserProfileResp = await response.json();
        if (data.status === SUCCESS_CODE) {
          setUserProfile(data.data);
        } else {
          console.log('error', data.message);
        }
      } else {
        console.log('error', response.statusText);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  // Fetch user profile data when the component mounts
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {/* Component to edit the user's profile */}
      <EditProfile
        username={userProfile?.username}
        show={showEditProfile}
        setShow={setShowEditProfile}
        onUpdated={getUserProfile}
      />
      <Spin spinning={loading}>
        {/* User profile card */}
        <div className='h-full px-6 py-8 bg-[#1B1C21] border border-[#27282F] rounded-xl flex justify-between'>
          <div className='flex gap-10'>
            {/* User avatar */}
            <div className='flex-shrink-0 rounded-full w-[100px] h-[100px] relative overflow-hidden border border-primary-purple'>
              <Image
                src='/images/avatar.svg'
                fill
                alt='avatar'
              />
            </div>
            <div>
              {/* User's username and VIP status */}
              <h1 className='text-xl font-semibold text-white flex items-center gap-2'>
                <span>{userProfile?.username}</span>
                {
                  !!userProfile?.subscription_plan_id
                    ? <Image src='/images/admin/vip-one.svg' width={24} height={24} alt='vip' />
                    : <Image src='/images/admin/vip3.png' width={24} height={24} alt='no vip' />
                }
              </h1>
              <div className='flex flex-col gap-3 mt-6 text-white text-base'>
                {/* User's email and credit balance */}
                <div className='flex items-center gap-2'>
                  <Icon className='text-primary-gray' icon='mdi:email-outline' width={20} height={20} />
                  <span>{userProfile?.email}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Icon className='text-primary-gray' icon='mdi:credit-card' width={20} height={20} />
                  <span>{userProfile?.credit || 0} Credits</span>
                </div>
              </div>
              {/* Display subscription start date if available */}
              {
                userProfile?.subscription_start &&
                <p className='mt-3 text-primary-gray text-xs'> Subscription starts on {userProfile?.subscription_start}</p>
              }
            </div>
          </div>
          <div className='flex flex-col items-end'>
            {/* Button to edit user profile */}
            <button
              onClick={() => setShowEditProfile(true)}
              className='hover:opacity-90 h-[40px] px-4 text-primary-purple flex items-center justify-center gap-2'>
              <Icon icon='akar-icons:edit' width={16} height={16} />
              <span className='text-base'>Edit profile</span>
            </button>
            {/* Link to update payment information */}
            <Link
              href='/auth/payment'
              className='hover:opacity-90 h-[40px] px-4 text-primary-purple flex items-center justify-center gap-2'>
              <Icon icon='akar-icons:edit' width={16} height={16} />
              <span className='text-base'>Update Payment Info</span>
            </Link>
          </div>
        </div>
      </Spin>
    </>
  );
}

export default ProfileCard;