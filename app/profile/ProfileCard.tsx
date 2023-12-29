'use client';
import EditProfile from '@/app/profile/EditProfile';
import { SUCCESS_CODE } from '@/data/constant';
import { IUserProfileResp, UserProfile } from '@/types/account';
import { Icon } from '@iconify/react';
import { Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import axios from '@/lib/axios';

const ProfileCard = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  async function getUserProfile() {
    try {
      setLoading(true);
      const response = await axios({
        url: '/fapi/user_profile_api',
        method: 'GET',
      });
      if (response.status === 200) {
        const data: IUserProfileResp = response.data;
        console.log(data);
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

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <EditProfile
        username={userProfile?.username}
        email={userProfile?.email}
        avatar={userProfile?.avatar}
        company_name={userProfile?.company_name}
        job_title={userProfile?.job_title}
        show={showEditProfile}
        setShow={setShowEditProfile}
        onUpdated={getUserProfile}
      />
      <Spin spinning={loading}>
        <div className="h-full px-6 py-8 bg-[#1B1C21] border border-[#27282F] rounded-xl flex justify-between">
          <div className="flex gap-10">
            {/* avatar */}
            <div className="flex-shrink-0 rounded-full w-[100px] h-[100px] relative overflow-hidden border border-primary-purple">
              <Image
                src={
                  userProfile?.avatar
                    ? process.env.NEXT_PUBLIC_API_URL + userProfile?.avatar
                    : '/images/avatar.svg'
                }
                fill
                alt="avatar"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>{userProfile?.username}</span>
                {!!userProfile?.subscription_plan_id ? (
                  <Image
                    src="/images/admin/vip-one.svg"
                    width={24}
                    height={24}
                    alt="vip"
                  />
                ) : (
                  <Image
                    src="/images/admin/vip3.png"
                    width={24}
                    height={24}
                    alt="no vip"
                  />
                )}
              </h1>
              <div className="flex flex-col gap-3 mt-6 text-white text-base ml-2">
                {/* <div className='flex items-center gap-2'>
                <Icon className='text-primary-gray' icon='uil:user-location' width={20} height={20} />
                <span>Maketing manager</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icon className='text-primary-gray' icon='carbon:location-company' width={20} height={20} />
                <span>Linkedin</span>
              </div> */}
                <div className="flex items-center gap-2">
                  <Icon
                    className="text-primary-gray"
                    icon="uil:user-location"
                    width={20}
                    height={20}
                  />
                  <span>{userProfile?.job_title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icon
                    className="text-primary-gray"
                    icon="carbon:location-company"
                    width={20}
                    height={20}
                  />
                  <span>{userProfile?.company_name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icon
                    className="text-primary-gray"
                    icon="mdi:email-outline"
                    width={20}
                    height={20}
                  />
                  <span>{userProfile?.email}</span>
                </div>

                {/* <div className='flex items-center gap-2'>
                  <Icon className='text-primary-gray' icon='mdi:credit-card' width={20} height={20} />
                  <span>{userProfile?.credit || 0} Credits</span>
                </div> */}
              </div>
              {/* {userProfile?.subscription_start && (
                <p className="mt-3 text-primary-gray text-xs">
                  {' '}
                  Subscription started on {userProfile?.subscription_start}
                </p>
              )} */}
              {/* <p className='mt-3 text-primary-gray text-xs'>Opted in on {userProfile?.timestamp}</p> */}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button
              onClick={() => setShowEditProfile(true)}
              className="hover:opacity-90 h-[40px] px-4 text-primary-purple flex items-center justify-center gap-2"
            >
              <Icon icon="akar-icons:edit" width={16} height={16} />
              <span className="text-base">Edit profile</span>
            </button>
            <Link
              target="_self"
              href="/auth/payment"
              className="hover:opacity-90 h-[40px] px-4 text-primary-purple flex items-center justify-center gap-2"
            >
              <Icon icon="akar-icons:edit" width={16} height={16} />
              <span className="text-base">Update Payment Info</span>
            </Link>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default ProfileCard;
