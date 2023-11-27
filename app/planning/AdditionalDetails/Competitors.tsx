import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';

const Competitors = () => {
  return (
    <div className={`${styles.mainDiv} mt-[16px]`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:var(--primary-300,#FFFF)]">
        5.&nbsp;Add your competitors
      </p>
      <Input.TextArea
        maxLength={2000}
        className={`${styles.description} placeholder-shown:border-[#1B1C21]`} // Apply your custom class here
        placeholder="Who is currently ranking in your niche?"
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

export default Competitors;
