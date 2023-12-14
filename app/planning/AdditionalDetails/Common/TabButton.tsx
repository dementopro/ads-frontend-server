import { FC } from 'react';

type TabButtonProps = {
  children: React.ReactNode;
  isActivated?: boolean;
  onClick?: () => void;
};

const Button: FC<TabButtonProps> = ({ children, isActivated, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[110px] flex gap-[10px] justify-start items-center px-[12px] py-[8px] rounded-t-[8px] ${isActivated
          ? 'text-white border-b-2 border-[#844FFF] bg-[#35363A]'
          : 'border-none text-[#ABABAB]'
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
