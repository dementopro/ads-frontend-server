import { Table } from 'antd'
import Image from 'next/image';
import React from 'react'


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

  const data: DataType[] = [
    {
      key: '1',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul31, 2023',
    },
    {
      key: '2',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul31, 2023',
    },
    {
      key: '3',
      avatar: '/images/avatar.svg',
      username: 'CyberMaster89',
      email: 'CyberMaster89@example.com',
      role: 'Admin',
      company: 'Linkedin',
      date: 'Jul31, 2023',
    },
  ]

  return (
    <>
      <Table dataSource={data} pagination={false} className={`mt-5 table`}
        rowClassName={`table-row`}
      >
        <Table.Column
          title="Members"
          dataIndex="email"
          key="email"
          render={(_, data: DataType) => (
            <>
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
        <Table.Column title="Role" dataIndex="role" key="role" />
        <Table.Column title="Company" dataIndex="company" key="company" />
        <Table.Column title="Date Added" dataIndex="date" key="date" />
      </Table>
    </>
  )
}

export default MemberList
