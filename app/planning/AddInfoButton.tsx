import React, { FC } from 'react';
import './AddInfoButton.css';

interface AddInfoButtonProps {
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
}

const AddInfoButton: FC<AddInfoButtonProps> = ({ setActiveButtonIndex }) => {
  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  return (
    <div className="main-div">
      <div className="button-dev">
        <button
          className="w-[174px] text-white text-center text-[15px] not-italic font-semibold leading-5 "
          onClick={() => handleButtonClick(1)}
        >
          Add more information
        </button>
      </div>
    </div>
  );
};

export default AddInfoButton;
