import { DETAIL_LIMIT } from '@/data/constant';
import { Input } from 'antd';
import React from 'react';
import styles from '@/./app/planning/planning.module.css';

const CustomerProfile = () => {
  return (
    <div className={`${styles.mainDiv} mt-[16px]`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:var(--primary-300,#FFFF)]">
        4.&nbsp;Add ideal customer profile
      </p>
      <Input.TextArea
        maxLength={DETAIL_LIMIT}
        className={`${styles.description} placeholder-shown:border-[#1B1C21]`} // Apply your custom class here
        placeholder="Ex: industry, geography, pain points"
        style={{
          minHeight: '138px', // Set the desired fixed height
          maxHeight: '138px', // Ensure max-height is the same as height
          overflowY: 'auto', // Add vertical scroll when content exceeds the height
          scrollbarColor: 'inherit',
        }}
      />
    </div>
  );
};

export default CustomerProfile;
