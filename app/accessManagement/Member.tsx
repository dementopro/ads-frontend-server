'use client';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import InviteCollaborator from './InviteCollaborator';
import axios from '@/lib/axios';
import { SUCCESS_CODE } from '@/data/constant';
import { Table } from 'antd';
import EditPermission from './EditPermission';
import { IInviteLists, IInviteObj } from '@/types/invite';

const Member = () => {
  const [showInviteCollaborator, setShowInviteCollaborator] = useState(false);
  const [showEditPermission, setShowEditPermission] = useState(false);
  const [data, setData] = useState<IInviteObj[]>([]);
  const [currentInvite, setCurrentInvite] = useState<IInviteObj>();

  async function load() {
    try {
      const response = await axios({
        url: '/fapi/get_all_invites_api',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data: IInviteLists = response.data;
        if (data.status === SUCCESS_CODE) {
          console.log('data.invite_list ==> ', data.invite_list);
          if (data.invite_list) setData(data.invite_list);
        } else {
        }
      }
    } catch (error) {
      console.log('error', error);
    } finally {
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <InviteCollaborator
        show={showInviteCollaborator}
        setShow={setShowInviteCollaborator}
        onUpdated={() => {
          load();
        }}
      />

      <EditPermission
        show={showEditPermission}
        setShow={setShowEditPermission}
        inviteUser={currentInvite}
        onUpdated={() => {
          load();
          setShowEditPermission(false);
        }}
      />

      <div className="px-6 py-5 bg-[#1B1C21] border border-[#27282F] rounded-lg flex justify-between flex-col">
        <div className="flex flex-row items-center mb-2">
          <Icon
            icon="mdi:account-multiple"
            className="text-white"
            width={24}
            height={24}
          />
          <h1 className="text-white font-medium text-2xl ml-2">
            Access Management
          </h1>
        </div>
        <div className="flex items-center justify-between ml-10 mr-10 mt-8">
          <div className="flex flex-col gap-2">
            <span className="text-xl text-white">
              Collaborators ({data.length})
            </span>
            <div className="text-primary-gray">
              Add, delete and manage collaborators
            </div>
          </div>
          <button
            className="flex items-center justify-center gap-2 text-white px-4 py-2 hover:opacity-80 text-base"
            onClick={() => {
              setShowInviteCollaborator(true);
            }}
          >
            <Icon icon="mdi:account-multiple" />
            <span className="underline">Invite Collaborators</span>
          </button>
        </div>
        {data.length > 0 && (
          <Table
            dataSource={data}
            pagination={false}
            className={`mt-5 table ml-10 mr-10`}
            rowClassName={`table-row`}
          >
            <Table.Column
              title="Users"
              dataIndex="name"
              key="name"
              render={(_, data: IInviteObj) => (
                <>
                  <div className="flex gap-3">
                    <div className="flex flex-col w-full">
                      <p className="font-medium text-left">
                        {data.f_name + ' ' + data.l_name}
                      </p>
                    </div>
                  </div>
                </>
              )}
            />

            <Table.Column
              title="Action"
              dataIndex="date"
              width="140px"
              key="date"
              render={(_, data: IInviteObj) => (
                <>
                  <button
                    className="text-white hover:opacity-80 text-xl"
                    onClick={() => {
                      console.log(data, 3232323);
                      setCurrentInvite(data);
                      setShowEditPermission(true);
                    }}
                  >
                    <Icon icon="mdi:square-edit-outline" />
                  </button>
                </>
              )}
            />
          </Table>
        )}
      </div>
    </>
  );
};

export default Member;
