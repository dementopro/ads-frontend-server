'use client';
import { Form, Input, message } from 'antd';
import { useState } from 'react';
import styles from './InviteCollaboratorForm.module.css';
import { Icon } from '@iconify/react';
import { SUCCESS_CODE } from '@/data/constant';
import axios from '@/lib/axios';
import { InviteCollaboratorForm } from '@/types/invite';

const InviteCollaboratorForm = ({
  onUpdated,
  setShow,
  project_name = '',
}: {
  onUpdated: () => void;
  setShow: (show: boolean) => void;
  project_name?: string;
}) => {
  const [form] = Form.useForm<Partial<InviteCollaboratorForm>>();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  async function onFinish(values: Partial<InviteCollaboratorForm>) {
    setLoading(true);

    const { f_name, l_name, email } = values;
    console.log('values ==> ', values);
    try {
      const url =
        project_name !== '' ? 'save_project_invite' : 'invite_user_api';
      const data =
        project_name !== ''
          ? {
              project_name,
              email,
            }
          : {
              f_name,
              l_name,
              email,
            };
      const response = await axios({
        url: `/fapi/${url}`,
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data: IResponse = response.data;
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Sent invitation successfully');
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
          f_name: '',
          l_name: '',
          email: '',
        }}
        onFinish={onFinish}
        className={styles.form}
        size="large"
        preserve={false}
      >
        <div className="pb-6 w-full">
          <div className="text-left text-white text-2xl font-bold">
            Invite New Collaborator
          </div>
        </div>
        <div className="flex gap-4 flex-row justify-center">
          <Form.Item
            name="f_name"
            label={<span className="text-white/80 text-sm">First Name</span>}
            rules={[{ required: true, message: 'First Name is required' }]}
          >
            <Input
              placeholder="First Name"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            name="l_name"
            label={<span className="text-white/80 text-sm">Last Name</span>}
            rules={[{ required: true, message: 'Last Name is required' }]}
          >
            <Input
              placeholder="Last Name"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-white/80 text-sm">Email Address</span>}
            rules={[{ required: true, message: 'Email Address is required' }]}
          >
            <Input
              placeholder="Email Address"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          {/* <button
            onClick={() => setShow(false)}
            className="mt-12 justify-center w-[88px] h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded border border-1 border-[#5F6368] text-white text-base font-medium truncate"
          >
            Add
          </button> */}
        </div>
        <div className="mt-20 flex flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShow(false)}
            className="mt-4 w-full max-w-[240px] justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded border border-1 border-[#5F6368] text-white text-base font-medium truncate"
          >
            Cancel
          </button>
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
            className="mt-4  w-full max-w-[240px] justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate"
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
      </Form>
    </>
  );
};

export default InviteCollaboratorForm;
