import { FC } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`${checked ? 'bg-gradient-to-r from-[#6859FF] to-[#AF41FF] hover:brightness-110' : 'bg-white hover:bg-gray-200'} cursor-pointer w-[20px] h-[17px] rounded-md`}
      onClick={onChange}
    >
    </div>
  );
}

export default Checkbox;