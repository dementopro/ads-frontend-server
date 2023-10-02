import React from 'react';

type Props = {
  loading: boolean;
  text?: string;
};

const Loading = ({ loading, text }: Props) => {
  return (
    <>
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-purple' />
            <span className='text-white mt-4'>{text || 'Loading...'}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
