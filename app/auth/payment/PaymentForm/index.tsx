'use client'
import { paymentValidate } from '@/lib/validate';
import { PaymentForm } from '@/types/auth';
import { Icon } from '@iconify/react';
import { FormikHelpers, useFormik } from 'formik';
import React, { ChangeEvent, useState } from 'react'
import styles from './payment.module.css'
import CCInput from '@/components/CCInput';
import ReactFlagsSelect from 'react-flags-select';
import loadingIcon from '@iconify/icons-eos-icons/loading';
import { useRouter } from 'next/navigation';
import { DatePicker, message } from 'antd';
import { SUCCESS_CODE } from '@/data/constant';
import axios from '@/lib/axios';

const PaymentForm = () => {

  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const formikForPayment = useFormik<PaymentForm>({
    initialValues: {
      card_number: '',
      card_holder: '',
      expiration: '',
      cvc: '',
      country: 'US',
    },
    onSubmit: onSubmitPayment,
    validate: paymentValidate,
  })

  async function onSubmitPayment(values: PaymentForm) {
    const errors = Object.values(formikForPayment.errors)
    if (errors.length > 0) {
      messageApi.error(errors[0])
      return
    }
    try {
      setIsLoading(true);
      if (!isLoading) {
        const response = await axios({
          url: '/fapi/add_credit_api',
          method: 'POST',
          data: JSON.stringify({
            ...values,
            year: +values.expiration.split('-')[0],
            month: +values.expiration.split('-')[1],
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200) {
          const data = response.data
          if (data.status === SUCCESS_CODE) {
            messageApi.success(data.message || 'Add credit successfully');
            setTimeout(() => {
              router.push('/profile')
            }, 500);
          } else {
            messageApi.error(data.message || 'Something went wrong');
          }
        } else {
          messageApi.error(response.statusText || 'Something went wrong');
        }
      }
    } catch (error) {
      console.log('error: ', error)
      messageApi.error(error as any || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  const handleChangeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 检查输入是否为整数
    if (!Number.isInteger(Number(value))) {
      return;
    }
    // 检查输入的长度是否为4位
    if (value.length > 4) {
      return;
    }
    // 更新输入的值
    formikForPayment.setFieldValue('cvc', value);
  };

  function onChangeExpiration(date: any, dateString: string) {
    formikForPayment.setFieldValue('expiration', dateString);
  }

  return (
    <>
      {contextHolder}
      <form className='mt-8 flex flex-col gap-4 max-sm:w-full max-sm:px-4' onSubmit={formikForPayment.handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="card_holder">
            Card Holder Full Name
          </label>
          <input
            type="text"
            placeholder='Card Holder Full Name'
            id="card_holder"
            className={`${styles['payment-input']} ${formikForPayment.errors.card_holder && formikForPayment.touched.card_holder ? '!border-rose-600' : ''}`} {...formikForPayment.getFieldProps('card_holder')}
          />
        </div>
        {/* card number */}
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="card_number">
            Card number
          </label>
          <CCInput value={cardNumber} setValue={(value) => {
            setCardNumber(value);
            formikForPayment.setFieldValue('card_number', value.replaceAll(' ', ''));
          }} isError={!!formikForPayment.errors.card_number} />
        </div>
        <div className='flex gap-1 justify-between'>
          <div className='flex flex-col gap-1 max-sm:w-1/2'>
            <label className='text-primary-gray text-sm' htmlFor="expiration">
              Expiration
            </label>
            <DatePicker
              className={`${styles['payment-input']} ${styles.half} ${styles['date-input']} !sm:w-[180px] !max-sm:w-full ${formikForPayment.errors.expiration ? '!border-rose-600' : ''}`}
              allowClear={false}
              onChange={onChangeExpiration}
              picker="month" />
          </div>
          <div className='flex flex-col gap-1 max-sm:w-1/2'>
            <label className='text-primary-gray text-sm' htmlFor="cvc">
              CVC
            </label>
            <input
              type="text"
              placeholder='CVC'
              id="cvc"
              value={formikForPayment.values.cvc}
              onChange={handleChangeCVC}
              className={`${styles['payment-input']} ${styles.half} !max-sm:w-full ${formikForPayment.errors.cvc && formikForPayment.touched.cvc ? '!border-rose-600' : ''}`}
            />
          </div>
        </div>
        {/* country */}
        <div className='flex flex-col gap-1'>
          <label className='text-primary-gray text-sm' htmlFor="country">Country</label>
          <ReactFlagsSelect
            className={`${styles.flag} ${formikForPayment.errors.country && formikForPayment.touched.country ? '!border-rose-600' : ''}`}
            selected={formikForPayment.values.country}
            onSelect={(code) => formikForPayment.setFieldValue('country', code)}
            placeholder="Select Country"
            searchable={false}
            selectButtonClassName={styles["menu-flags-button"]}
            countries={["US"]}
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <button
            onClick={() => onSubmitPayment(formikForPayment.values)}
            className={`${styles['payment-btn']} flex-1`}>
            {isLoading && <Icon icon={loadingIcon} className='mr-2' />}
            <span>
              {isLoading ? 'Loading...' : 'Complete'}
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default PaymentForm
