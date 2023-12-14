'use client';
import React, { useState } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useFormik } from 'formik';
import Image from 'next/image';
import { Input } from 'antd';
import { CompanyForm } from '@/types/planning';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import MicrosoftLogin from 'react-microsoft-login';
import { useDisclosure } from '@nextui-org/react';
import { useSeoAnalyzerContext } from '@/context/seo';

type platformsProps = {
  title: string;
  icon: string;
  page?: string;
  provider?: string;
}

type EmailConnectProps = {
  platforms: platformsProps[];
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
  activeTab: number;
};

const EmailConnect = ({ platforms, formik, index, activeTab }: EmailConnectProps) => {
  const { company } = useSeoAnalyzerContext();
  const { isOpen, onOpen: onOpenEmailSchedule, onOpenChange } = useDisclosure();
  const [isOpenEmailEditModal, setIsOpenEmailEditModal] = useState<boolean>(false);
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState<boolean>(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          formik.setValues({
            ...formik.values,
            email: res.data.email,
          });
          setIsEmailAuthenticated(true);
        })
        .catch((err) => console.log(err));
    },
    onError: (err) => {
      console.log('fail:', err);
    },
  });

  const microsoftRedirectURL: string | undefined = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : process.env.NEXT_PUBLIC_PRODUCTION_URL;
  //console.log("redirect url: ", microsoftRedirectURL, process.env.NODE_ENV, process.env.NEXT_PUBLIC_PRODUCTION_URL);

  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Connect your {platforms[activeTab].title} Account
      </div>
      <div className='w-full flex android:flex-col desktop:flex-row gap-[14px]'>
        <div className='w-full flex flex-col gap-[5px] items-start'>
          <div className={`${styles.subHead}`}>
            Select for 1 click Authentication
          </div>
          {activeTab === 0 ? (
            <button
              className={`flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 ${isEmailAuthenticated === false ? 'hover:brightness-110' : 'grayscale'}`}
              onClick={() => {
                login();
              }}
              disabled={isEmailAuthenticated}
            >
              <Image
                src={platforms[activeTab].icon}
                alt={platforms[activeTab].title}
                width={24}
                height={24}
              />
              {platforms[activeTab].title}
            </button>
          ) : activeTab === 1 ? (
            <div className='max-w-fit'>
              <MicrosoftLogin
                clientId="4302711c-32c9-4fab-8cdb-5926cac2b5c9"
                withUserData={true}
                redirectUri={microsoftRedirectURL}
                authCallback={(err, data) => {
                  console.log(err, data);
                  if (!err) {
                    formik.setValues({
                      ...formik.values,
                      email: data.mail,
                    });
                    setIsEmailAuthenticated(true);
                  } else {
                    console.log('fail:', err);
                  }
                }}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 ${isEmailAuthenticated === false ? 'hover:brightness-110' : 'grayscale'}`}
                  disabled={isEmailAuthenticated}
                >
                  <Image
                    src={platforms[activeTab].icon}
                    alt={platforms[activeTab].title}
                    width={24}
                    height={24}
                  />
                  {platforms[activeTab].title}
                </button>
              </MicrosoftLogin>
            </div>
          ) : (
            <button className={`${styles.button}`}
              onClick={() => {
              }}
            >
              <Image
                src={platforms[activeTab].icon}
                alt={platforms[activeTab].title}
                width={24}
                height={24}
              />
              {platforms[activeTab].title}
            </button>
          )}
        </div>
        <div className='w-full flex flex-col gap-[5px] items-start'>
          <div className={`${styles.subHead}`}>
            OR Enter {platforms[activeTab].title}
          </div>
          <Input
            type="text"
            placeholder={`Enter your ${platforms[activeTab].title} `}
            id="url/email"
            className={`${styles['input']} ${formik.errors.email && formik.touched.email
              ? 'border-rose-600'
              : 'border-[#3A3A3A]'
              }`}
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email && (
            <label className="w-full text-[12px] text-rose-600">
              {formik.errors.email}
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailConnect;