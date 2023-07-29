'use client'
import { SUCCESS_CODE } from '@/data/constant';
import { Form, Input, Modal, message } from 'antd';
import Image from 'next/image'
import React, { useState } from 'react'

interface ContactUsFrom {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  title?: string;
}

type HeaderProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Header = ({ modalOpen, setModalOpen }: HeaderProps) => {

  const [form] = Form.useForm<ContactUsFrom>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  async function onFinish(values: ContactUsFrom) {
    try {
      setLoading(true);
      messageApi.loading('Sending message...');
      const res = await fetch(`/fapi/contacts_api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
      if (res.ok) {
        const data = await res.json() as IResponse
        if (data.status === SUCCESS_CODE) {
          setModalOpen(false);
          messageApi.success('Message sent successfully');
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('res', res)
        messageApi.error('Something went wrong');
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {contextHolder}
      <div className='w-full h-[64px] border-b border-[#3A3A3A] bg-[#1B1C21] px-4 sm:px-8 flex items-center justify-between'>
        <Image src={'/logo.svg'} width={131} height={28} alt='logo' />
        <div className='flex items-center sm:gap-4'>
          <button
            onClick={() => setModalOpen(true)}
            className='flex items-center justify-center h-[44px] rounded-lg bg-primary-purple text-white cursor-pointer hover:opacity-80 px-4 truncate'>
            Request Demo
          </button>
        </div>
      </div>
      <Modal
        title=""
        centered
        open={modalOpen}
        maskClosable={false}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[]}
        width={'90%'}
        style={{ maxWidth: '900px' }}
        destroyOnClose
      >
        <h2 className='text-3xl font-semibold'>Request Demo</h2>
        <p className='my-2 sm:mb-6 sm:text-xl'>Our friendly team would love to hear from you!</p>
        <Form
          form={form}
          layout="vertical"
          initialValues={{}}
          onFinish={onFinish}
          className='flex flex-wrap gap-x-5 w-full sm:flex-row flex-col'
          size='middle'
          preserve={false}
        >
          <div className='flex-1 flex sm:flex-col-reverse max-sm:flex flex-col gap-2'>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email is required' }]}>
              <Input type='email' placeholder='Your email address' />
            </Form.Item>
            <Form.Item name="first_name" label="First Name" rules={[{ required: true, message: 'First name is required' }]}>
              <Input placeholder='Your first name' />
            </Form.Item>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            <Form.Item name="last_name" label="Last Name" rules={[{ required: true, message: 'Last name is required' }]}>
              <Input placeholder='Your last name' />
            </Form.Item>
            <Form.Item name="company" label="Company" rules={[]}>
              <Input placeholder='Your company name' />
            </Form.Item>
          </div>
          <div className='w-full flex gap-2'>
            <div className='flex-1'>
              <Form.Item name="title" label="Title" rules={[]}>
                <Input placeholder='Your title' />
              </Form.Item>
            </div>
            <div className='max-sm:hidden flex-1'></div>
          </div>
          <div className='mx-auto flex gap-4'>
            <button type='submit' disabled={loading} className='w-[100px] justify-center h-[40px] flex items-center cursor-pointer hover:opacity-80 bg-primary-purple rounded-lg text-white text-base truncate'>
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button
              type='button'
              onClick={() => setModalOpen(false)} className='w-[100px] justify-center h-[40px] flex items-center cursor-pointer hover:opacity-80 bg-primary-gray/10 rounded-lg text-primary-purple text-base truncate'>
              Cancel
            </button>
          </div>
        </Form>
      </Modal>
    </>
  )
}

export default Header
