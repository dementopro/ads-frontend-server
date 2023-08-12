'use client'
import { ProfileForm } from '@/types/auth';
import { Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './EditProfileForm.module.css';
import { Icon } from '@iconify/react';

const EditProfileForm = () => {

  const [form] = Form.useForm<ProfileForm>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  function onFinish() {
    setLoading(true);
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
        size='small'
        preserve={false}
      >
        <div className='flex-1'>
          <Form.Item
            name="username"
            label={
              <span className='text-white/80 text-sm'>Username</span>
            }
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input type='text' placeholder='Your username'
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
            rules={[{ required: true, message: 'Your job title is required' }]}
          >
            <Input placeholder='Your Job Title'
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
            <Input placeholder='Your Company Name'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <button
          type='submit'
          disabled={loading}
          className='mt-4 w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate'>
          {loading && <Icon icon='eos-icons:loading' className="mr-2" width={20} height={20} />}
          {loading ? 'Saving...' : 'Change'}
        </button>
      </Form>
    </>
  )
}

export default EditProfileForm
