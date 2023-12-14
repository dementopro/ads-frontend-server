import React, { FC } from 'react';

interface BackButtonProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
}

const BackButton: FC<BackButtonProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  return (
    <div className="flex justify-end items-center gap-10 self-stretch mt-[32px]">
      <button
        className="flex w-[124.5px] h-11 justify-center items-center gap-4 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
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
