'use client';
import { ProfileForm } from '@/types/auth';
import { Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './EditProfileForm.module.css';
import { Icon } from '@iconify/react';
import { SUCCESS_CODE } from '@/data/constant';
import axios from '@/lib/axios';

const EditProfileForm = ({
  username,
  email,
  avatar,
  company_name,
  job_title,
  onUpdated,
}: {
  email?: string;
  username?: string;
  avatar?: string;
  company_name?: string;
  job_title?: string;
  onUpdated: () => void;
}) => {
  const [form] = Form.useForm<Partial<ProfileForm>>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  async function onFinish(values: Partial<ProfileForm>) {
    setLoading(true);
    console.log('values ==> ', values);
    const { username, email, company_name, job_title } = values;
    try {
      const response = await axios({
        url: '/fapi/update_user_profile_api',
        method: 'POST',
        data: JSON.stringify({
          username,
          avatar,
          email,
          job_title,
          company_name,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data: IResponse = response.data;
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Profile updated successfully');
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
          username,
          email,
          company_name,
          job_title,
        }}
        onFinish={onFinish}
        className={styles.form}
        size="middle"
        preserve={false}
      >
        <div className="flex-1">
          <Form.Item
            name="username"
            label={<span className="text-white/80 text-sm">Username</span>}
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input
              type="text"
              placeholder="Your username"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className="flex-1">
          <Form.Item
            name="email"
            label={<span className="text-white/80 text-sm">Email</span>}
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input
              type="email"
              placeholder="Your email address"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <div className="flex gap-4 flex-row">
          <Form.Item
            name="job_title"
            label={<span className="text-white/80 text-sm">Job Title</span>}
            rules={[{ required: true, message: 'Your job title is required' }]}
          >
            <Input
              placeholder="Your Job Title"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            name="company_name"
            label={<span className="text-white/80 text-sm">Company Name</span>}
            rules={[
              { required: true, message: 'Your company name is required' },
            ]}
          >
            <Input
              placeholder="Your Company Name"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>
        <button
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                onFinish(values);
              })
              .catch((e) => console.log(e));
          }}
          disabled={loading}
          className="mt-4 w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate"
        >
          {loading && (
            <Icon
              icon="eos-icons:loading"
              className="mr-2"
              width={20}
              height={20}
            />
          )}
          {loading ? 'Saving...' : 'Update'}
        </button>
      </Form>
    </>
  );
};

export default EditProfileForm;
