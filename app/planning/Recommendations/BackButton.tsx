import React, { FC } from 'react';
import styles from '@/./app/planning/planning.module.css';

interface BackButtonProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
}

const BackButton: FC<BackButtonProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  return (
    <div className="flex justify-end items-center">
      <button
        className={`${styles.subButton}`}
        onClick={() => {
          setActiveButtonIndex(activeButtonIndex - 1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
