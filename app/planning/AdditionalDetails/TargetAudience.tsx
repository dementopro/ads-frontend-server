import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';

const TargetAudience = () => {
  return (
    <div className={`${styles.mainDiv} mt-[16px]`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:var(--primary-300,#FFFF)]">
        3.&nbsp;Add your target audience
      </p>
      <Input.TextArea
        className={`${styles.description} placeholder-shown:border-[#1B1C21]`} // Apply your custom class here
        placeholder="Ex: Women, 18+,  Mexican, Interested in Cats & Dogs"
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

export default TargetAudience;
