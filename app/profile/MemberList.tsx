import { Table } from 'antd';
import Image from 'next/image';
import React from 'react';

interface DataType {
  avatar: string;
  key: React.Key;
  username: string;
  email: string;
  role: string;
  company: string;
  date: string;
}

const MemberList = () => {
  // Sample data for the member list
  const data: DataType[] = [
    {
      key: '1',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul 31, 2023',
    },
    {
      key: '2',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul 31, 2023',
    },
    {
      key: '3',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul 31, 2023',
    },
  ];

  return (
    <>
      {/* Table component to display the member list */}
      <Table
        dataSource={data}
        pagination={false}
        className={`mt-5 table`}
        rowClassName={`table-row`}
      >
        {/* Column for displaying member information */}
        <Table.Column
          title="Members"
          dataIndex="email"
          key="email"
          render={(_, data: DataType) => (
            <>
              {/* Display member avatar, username, and email */}
              <div className='flex gap-3'>
                <Image src={data.avatar} alt={data.username} width={38} height={38} />
                <div className='flex flex-col'>
                  <p className='text-base font-medium'>{data.username}</p>
                  <p className='text-sm text-primary-gray'>{data.email}</p>
                </div>
              </div>
            </>
          )}
        />
        {/* Column for displaying member roles */}
        <Table.Column title="Role" dataIndex="role" key="role" />
        {/* Column for displaying member companies */}
        <Table.Column title="Company" dataIndex="company" key="company" />
        {/* Column for displaying the date when the member was added */}
        <Table.Column title="Date Added" dataIndex="date" key="date" />
      </Table>
    </>
  );
};

export default MemberList;