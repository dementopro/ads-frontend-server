'use client'
import { SUCCESS_CODE } from '@/data/constant';
import { Form, Input, message } from 'antd'
import React, { useState } from 'react'
import styles from './RequestDemo.module.css'
import { useRouter } from 'next/navigation';

interface ContactUsFrom {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
}

const RequestDemoForm = () => {

  const [form] = Form.useForm<ContactUsFrom>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  function toContactUs() {
    router.push('/contactUs');
  }

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
          messageApi.success('Message sent successfully');
          router.push('/bookMeeting')
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
      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
        onFinish={onFinish}
        className={styles.form}
        style={{
          boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.28)'
        }}
        size='middle'
        preserve={false}
      >
        <h3 className='text-white text-center text-3xl font-bold mb-7'>
          Enterprise Inquiry
        </h3>
        <div className='flex-1 flex gap-2 justify-between max-sm:flex-col'>
          <Form.Item
            name="first_name"
            rules={[{ required: true, message: 'First name is required' }]}
            label={
              <span className='text-white/80 text-sm'>First Name</span>
            }
          >
            <Input placeholder='Your first name'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            name="last_name"
            label={
              <span className='text-white/80 text-sm'>Last Name</span>
            }
            rules={[{ required: true, message: 'Last name is required' }]}
          >
            <Input placeholder='Your last name'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className='flex-1'>
          <Form.Item
            name="email"
            label={
              <span className='text-white/80 text-sm'>Email</span>
            }
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input type='email' placeholder='Your email address'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className='flex-1 flex gap-2 justify-between max-sm:flex-col'>
          <Form.Item
            name="title"
            label={
              <span className='text-white/80 text-sm'>Job Title</span>
            }
            rules={[{ required: true, message: 'Your title is required' }]}
          >
            <Input placeholder='Your title'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            name="company"
            label={
              <span className='text-white/80 text-sm'>Company Name</span>
            }
            rules={[{ required: true, message: 'Your company name is required' }]}
          >
            <Input placeholder='Your company name'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <button type='submit' disabled={loading} className='mt-4 w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate'>
          {loading ? 'Sending...' : 'Enterprise Inquiry'}
        </button>
        <div className='mt-10 flex flex-col justify-center items-center'>
          <p className='text-primary-gray text-base'>For technical issues and general inquires, please</p>
          <button type='button' onClick={toContactUs} className='text-primary-purple underline text-base'>
            contact us
          </button>
        </div>
      </Form>
    </>
  )
}

export default RequestDemoForm
