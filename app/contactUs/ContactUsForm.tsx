'use client';
import { SUCCESS_CODE } from '@/data/constant';
import { Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactUsForm.module.css';
import axios from '@/lib/axios';
import { FiArrowRight } from 'react-icons/fi';

interface ContactUsFrom {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  jobTitle: string;
  companyName: string;
  message: string;
}

const { TextArea } = Input;

const ContactUsForm = () => {
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
      const res = await axios({
        url: `/fapi/contacts_api`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(values),
      });
      if (res.status === 200) {
        const data = res.data as IResponse;
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Message sent successfully');
          router.push('/bookMeeting');
        } else {
          messageApi.error(data.message || 'Something went wrong');
        }
      } else {
        console.log('res', res);
        messageApi.error('Something went wrong');
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
        initialValues={{}}
        onFinish={onFinish}
        style={{
          boxShadow: '0 0 51px 0 rgba(132, 79, 255, 0.25)',
        }}
        size="middle"
        preserve={false}
        className="w-full inline-flex flex-col gap-[16px] justify-center items-start android:px-[32px] ipad:px-[48px] py-[26px] bg-[#141414] android:rounded-[9px] ipad:rounded-[12px] border-1 border-violet-500 border-opacity-60"
      >
        <div className="w-full text-white text-left android:text-[25px] ipad:text-[33px] font-semibols">
          Contact Us
        </div>
        <div className="w-full inline-flex android:flex-col ipadmini:flex-row gap-[18px]">
          <Form.Item
            className="w-full mb-0"
            name="first_name"
            rules={[{ required: true, message: 'First name is required' }]}
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                First Name
              </span>
            }
          >
            <Input
              placeholder="First Name"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            className="w-full mb-0"
            name="last_name"
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Last Name
              </span>
            }
            rules={[{ required: true, message: 'Last name is required' }]}
          >
            <Input
              placeholder="Last name"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>

        <div className="w-full">
          <Form.Item
            className="w-full mb-0"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Email is required',
              },
            ]}
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Email
              </span>
            }
          >
            <Input
              type="email"
              placeholder="abc@"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>

        <div className="w-full">
          <Form.Item
            className="w-full mb-0"
            name="phone_number"
            rules={[{ required: true, message: 'Phone number is required' }]}
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Phone Number
              </span>
            }
          >
            <Input
              placeholder="+1 1234567890"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>

        <div className="w-full inline-flex android:flex-col ipadmini:flex-row gap-[18px]">
          <Form.Item
            className="w-full mb-0"
            name="job_title"
            rules={[{ required: true, message: 'Job Title is required' }]}
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Job Title
              </span>
            }
          >
            <Input
              placeholder="Marketing Manager"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
          <Form.Item
            className="w-full mb-0"
            name="company_name"
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Company Name
              </span>
            }
            rules={[{ required: true, message: 'Company name is required' }]}
          >
            <Input
              placeholder="AdsGency AI"
              classNames={{
                input: styles['input'],
              }}
            />
          </Form.Item>
        </div>

        <div className="w-full">
          <Form.Item
            className="w-full mb-0"
            name="message"
            label={
              <span className="text-white android:text-[10px] ipad:text-[14px]">
                Message
              </span>
            }
          >
            <TextArea
              rows={4}
              placeholder="Enter Message"
              classNames={{
                textarea: styles['textarea'],
              }}
            />
          </Form.Item>
        </div>

        <button
          onClick={toContactUs}
          className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-[#6859FF] to-[#AF41FF] rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px] hover:from-[#A29BF8] hover:to-[#C590F8] transition ease-in-out !duration-500"
        >
          <div className="text-white">{loading ? 'Sending...' : 'Submit'}</div>
          <div className="relative">
            <FiArrowRight
              className={`cursor-pointer text-white android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto`}
            />
          </div>
        </button>
      </Form>
    </>
  );
};

export default ContactUsForm;
