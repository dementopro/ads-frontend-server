'use client';
import MemberList from '@/app/profile/MemberList';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import InviteCollaborator from './InviteCollaborator';
import axios from '@/lib/axios';
import { SUCCESS_CODE } from '@/data/constant';
import { Table } from 'antd';
import Image from 'next/image';
interface IInviteObj {
  id: number;
  email: string;
  l_name: string;
  f_name: string;
  created_at: string;
  status: number;
  role: string;
  job_title: string;
}

interface IInviteLists extends IResponse {
  invite_list?: IInviteObj[];
}

const Member = () => {
  const [showInviteCollaborator, setShowInviteCollaborator] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IInviteObj[]>([]);
  async function load() {
    setLoading(true);

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
          if (data.invite_list) setData(data.invite_list);
        } else {
        }
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
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

      <div className="px-6 py-5 bg-[#1B1C21] border border-[#27282F] rounded-lg flex justify-between flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-primary-gray text-base flex items-center gap-2">
            <Icon width={24} height={24} icon="ri:group-line" />
            <span>{data.length} members</span>
          </h2>
          <button
            className="flex items-center justify-center gap-2 bg-primary-purple text-white rounded-lg px-4 py-2 hover:opacity-80 text-base"
            onClick={() => {
              setShowInviteCollaborator(true);
            }}
          >
            <Icon icon="mdi:plus-circle-outline" />
            <span>Invite Collaborators</span>
          </button>
        </div>
        {data.length > 0 && (
          <Table
            dataSource={data}
            pagination={false}
            className={`mt-5 table`}
            rowClassName={`table-row`}
          >
            <Table.Column
              title="Members"
              dataIndex="email"
              key="email"
              render={(_, data: IInviteObj) => (
                <>
                  <div className="flex gap-3">
                    <div className="flex flex-col w-full">
                      <p className="font-medium text-left">{data.email}</p>
                    </div>
                  </div>
                </>
              )}
            />
            <Table.Column
              title="Role"
              dataIndex="role"
              key="role"
              render={(_, data: IInviteObj) => (
                <>
                  <p className="font-medium text-left">{data.role}</p>
                </>
              )}
            />
            <Table.Column
              title="Job Title"
              dataIndex="job_title"
              key="job_title"
              render={(_, data: IInviteObj) => (
                <>
                  <p className="font-medium text-left">{data.job_title}</p>
                </>
              )}
            />
            <Table.Column
              title="Date Added"
              dataIndex="date"
              key="date"
              render={(_, data: IInviteObj) => (
                <>
                  <p className="font-medium text-left">{data.created_at}</p>
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
