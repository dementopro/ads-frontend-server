import { Spin } from 'antd';

const LoadingSpin = () => {
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen bg-black/40 z-[99999] top-0 left-0">
      <Spin />
    </div>
  );
};

export default LoadingSpin;
