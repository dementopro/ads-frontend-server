import { FC } from "react";

type TabButtonProps = {
  children: React.ReactNode;
  isActivated?: boolean;
  onClick?: () => void;
};

const Button: FC<TabButtonProps> = ({ children, isActivated, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-12 flex items-center justify-center gap-2 text-normal rounded-t-lg hover:bg-[#35363A] border-b-2 ${
        isActivated
          ? 'text-white border-primary-purple bg-[#35363A]'
          : 'border-[#989899] text-primary-gray'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
