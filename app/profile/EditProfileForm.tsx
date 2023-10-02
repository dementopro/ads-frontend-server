'use client'
import { ProfileForm } from '@/types/auth';
import { Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './EditProfileForm.module.css';
import { Icon } from '@iconify/react';
import { SUCCESS_CODE } from '@/data/constant';

const EditProfileForm = ({ username, onUpdated }: {
  username?: string, // Optional username
  onUpdated: () => void // Function to handle profile updates
}) => {
  const [form] = Form.useForm<Partial<ProfileForm>>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  async function onFinish(values: Partial<ProfileForm>) {
    setLoading(true);
    const { username } = values;
    try {
      // Send a request to update the user's profile
      const response = await fetch('/fapi/update_user_profile_api', {
        method: 'POST',
        body: JSON.stringify({ username }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        const data: IResponse = await response.json();
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Profile updated successfully');
          // Call the onUpdated callback function to handle the update
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
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          username
        }}
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
            <Input
              type='text'
              placeholder='Your username'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className='flex-1 hidden'>
          <Form.Item
            name="email"
            label={
              <span className='text-white/80 text-sm'>Email</span>
            }
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input
              type='email'
              placeholder='Your email address'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className='hidden flex-1 gap-2 justify-between max-sm:flex-col'>
          <Form.Item
            name="title"
            label={
              <span className='text-white/80 text-sm'>Job Title</span>
            }
            rules={[{ required: true, message: 'Your job title is required' }]}
          >
            <Input
              placeholder='Your Job Title'
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
            <Input
              placeholder='Your Company Name'
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <button
          onClick={() => onFinish(form.getFieldsValue())}
          disabled={loading}
          className='mt-4 w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate'
        >
          {loading && <Icon icon='eos-icons:loading' className="mr-2" width={20} height={20} />}
          {loading ? 'Saving...' : 'Change'}
        </button>
      </Form>
    </>
  )
}

export default EditProfileForm
