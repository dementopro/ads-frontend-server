import React from 'react';

type Props = {
  text?: string; // Optional text prop to customize the message
};

const Empty = ({ text }: Props) => {
  return (
    <div
      className='flex items-center justify-center w-full h-full min-h-[100px] text-primary-gray text-base'
    >
      {text || 'No content has been generated yet'} {/* Display the provided text or a default message */}
    </div>
  );
};

export default Empty;