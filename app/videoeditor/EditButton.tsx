import React, { FC, SetStateAction } from 'react';

const EditButton = ({ setIsEditVideo }: {
  setIsEditVideo: () => void
}) => {
  return (
    <div className="flex justify-end items-center gap-10 self-stretch mt-[32px]">
      <button
        className="flex w-[124.5px] h-11 justify-center items-center gap-4 border px-4 py-1.5 rounded-lg bg-[#844FFF] border-none"
        onClick={setIsEditVideo}
      >
        Edit
      </button>
    </div>
  );
};

export default EditButton;
