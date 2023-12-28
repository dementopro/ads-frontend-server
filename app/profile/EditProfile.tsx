import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { message } from 'antd';

import EditProfileForm from '@/app/profile/EditProfileForm';
import axios from '@/lib/axios';

type Props = {
  show: boolean;
  username?: string;
  email?: string;
  avatar?: string;
  company_name?: string;
  job_title?: string;
  setShow: (show: boolean) => void;
  onUpdated: () => void;
};

const EditProfile = ({
  show,
  setShow,
  username,
  email,
  avatar,
  company_name,
  job_title,
  onUpdated,
}: Props) => {
  const [avatarPath, setAvatarPath] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  const avatarRef = useRef(null);

  const handleClickAvatar = () => {
    if (avatarRef.current) (avatarRef.current as any).click();
  };

  const handleUploadAvatar: ChangeEventHandler<HTMLInputElement> = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) {
      messageApi.error('Select an image file');
      return;
    }
    try {
      const uploadResponse = await axios.post(
        '/fapi/upload_avatar_api',
        { avatar: e.target.files[0] },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setAvatarPath(uploadResponse.data.avatar_path);
    } catch (error: any) {
      messageApi.error(error.message);
    }
  };

  useEffect(() => {
    setAvatarPath((avatar as string) || '');
  }, [avatar]);

  return (
    <>
      {contextHolder}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[526px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-10">
            <div
              className="absolute top-6 right-6 cursor-pointer hover:opacity-80"
              onClick={() => setShow(false)}
            >
              <Icon
                icon="mdi:close-circle-outline"
                className="text-[#5F6368]"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center font-bold text-3xl pb-6">
                User profile
              </div>
              {/* avatar */}
              <div
                className="relative mt-8 mb-6 flex-shrink-0 rounded-full w-[100px] h-[100px] overflow-hidden border border-primary-purple group/item cursor-pointer"
                onClick={handleClickAvatar}
              >
                <div className="transition duration-50 w-full h-full blur-none group-hover/item:blur-sm">
                  <Image
                    src={
                      avatarPath
                        ? process.env.NEXT_PUBLIC_API_URL + avatarPath
                        : '/images/avatar.svg'
                    }
                    fill
                    alt="avatar"
                  />
                  <input
                    ref={avatarRef}
                    type="file"
                    accept="image/*"
                    onChange={handleUploadAvatar}
                  />
                </div>
                <div className="transition duration-150 absolute z-[999] w-full h-full flex justify-center items-center text-center text-white text-lg font-bold left-0 top-0 invisible group-hover/item:visible">
                  Change Avatar
                </div>
              </div>
              <EditProfileForm
                username={username}
                email={email}
                avatar={avatarPath}
                company_name={company_name}
                job_title={job_title}
                onUpdated={() => {
                  onUpdated();
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
