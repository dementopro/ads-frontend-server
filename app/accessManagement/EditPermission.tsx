import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Checkbox from '../contentType/emailMarketing/Checkbox';
import axiosInstance from '@/lib/axios';
import { IInviteLists, IInviteObj } from '@/types/invite';
import { SUCCESS_CODE } from '@/data/constant';
import { message } from 'antd';

type Props = {
  show: boolean;
  inviteUser: IInviteObj | undefined;
  setShow: (show: boolean) => void;
  onUpdated: () => void;
};

const EditPermission = ({ show, setShow, inviteUser, onUpdated }: Props) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (inviteUser?.access_level != '') {
      const permissions = inviteUser?.access_level.split(',');
      if (permissions) setSelectedPermissions(permissions);
    } else {
      setSelectedPermissions([]);
    }
  }, [inviteUser?.access_level]);

  async function update() {
    setLoading(true);

    try {
      const response = await axiosInstance({
        url: '/fapi/invite_change_access',
        method: 'POST',
        data: JSON.stringify({
          invite_id: inviteUser?.id,
          access_level: selectedPermissions.join(','),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data: IResponse = response.data;
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Access level changed successfully');
          onUpdated();
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser() {
    setLoading(true);

    try {
      const response = await axiosInstance({
        url: '/fapi/invite_delete_user',
        method: 'POST',
        data: JSON.stringify({
          invite_id: inviteUser?.id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data: IResponse = response.data;
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Delete successfully');
          onUpdated();
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[1000px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-10">
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
            <div className="flex flex-col px-10 py-4">
              <div className="text-2xl">Edit Permssions and Access</div>
              <div className="flex flex-row justify-between items-center mt-8">
                <div className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
                  <div className="text-2xl text-black font-bold">
                    {inviteUser?.f_name.charAt(0).toUpperCase() +
                      '' +
                      inviteUser?.l_name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="text-gray-400">
                    {inviteUser?.f_name + ' ' + inviteUser?.l_name}
                  </div>
                  <div className="text-gray-400">{inviteUser?.email}</div>
                </div>
                <div className="flex-1" />
                <button className="flex flex-row gap-2" onClick={deleteUser}>
                  <Icon
                    icon="mdi:delete"
                    className="text-white"
                    width={24}
                    height={24}
                  />
                  <span>Remove User</span>
                </button>
              </div>
              <div className="w-full col-span-12 bg-background-200 rounded-xl mt-10">
                <div className="bg-[#1E1F24] rounded-t-xl">
                  <div className="px-[40px] py-[24px] flex flex-col justify-center">
                    <div className="text-lg">Administrative</div>
                  </div>
                </div>
                <div className="border-b-1 border-[#525252] justify-between items-center flex flex-row px-[40px] py-[16px]">
                  <div className="flex flex-col justify-center">
                    <div className="text-white text-lg">
                      Administration Permissions
                    </div>
                    <div className="text-gray-400">
                      Allow users to manage account settings, users rules and
                      reports
                    </div>
                  </div>
                  <Checkbox
                    checked={selectedPermissions.includes('0')}
                    onChange={() => {
                      if (selectedPermissions.includes('0')) {
                        setSelectedPermissions((prev) =>
                          prev.filter((val) => val != '0')
                        );
                      } else {
                        setSelectedPermissions((prev) => [...prev, '0']);
                      }
                    }}
                  />
                </div>
                <div className="border-b-1 border-[#525252] justify-between items-center flex flex-row px-[40px] py-[16px]">
                  <div className="flex flex-col justify-center">
                    <div className="text-white text-lg">Manage Permissions</div>
                    <div className="text-gray-400">
                      Allow user to manage other users&apos; permissions.
                    </div>
                  </div>
                  <Checkbox
                    checked={selectedPermissions.includes('1')}
                    onChange={() => {
                      if (selectedPermissions.includes('1')) {
                        setSelectedPermissions((prev) =>
                          prev.filter((val) => val != '1')
                        );
                      } else {
                        setSelectedPermissions((prev) => [...prev, '1']);
                      }
                    }}
                  />
                </div>
                <div className="justify-between items-center flex flex-row px-[40px] py-[16px]">
                  <div className="flex flex-col justify-center">
                    <div className="text-white text-lg">Manage profiles</div>
                    <div className="text-gray-400">
                      Allow user to add and reauthorize social profiles.
                    </div>
                  </div>
                  <Checkbox
                    checked={selectedPermissions.includes('2')}
                    onChange={() => {
                      if (selectedPermissions.includes('2')) {
                        setSelectedPermissions((prev) =>
                          prev.filter((val) => val != '2')
                        );
                      } else {
                        setSelectedPermissions((prev) => [...prev, '2']);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShow(false)}
                  className="mt-4 w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded border border-1 border-[#5F6368] text-white text-base font-medium truncate"
                >
                  Cancle
                </button>
                <button
                  onClick={() => {
                    update();
                  }}
                  className="mt-4  w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate"
                >
                  {loading && (
                    <Icon
                      icon="eos-icons:loading"
                      className="mr-2"
                      width={20}
                      height={20}
                    />
                  )}
                  {loading ? 'Saving...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPermission;
