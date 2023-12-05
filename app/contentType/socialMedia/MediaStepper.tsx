import * as React from 'react';

interface IMediaStepperProps {
  value: number;
  options: Array<{ name: string; value: number; }>;
  onChange: (option: { name: string; value: number; }) => void;
}

const MediaStepper: React.FunctionComponent<IMediaStepperProps> = (props) => {
  const { value, options, onChange } = props;
  return <div className='w-auto p-1 border rounded-lg bg-background-100 border-background-300'>
    <div className='flex items-center gap-1'>
      {
        options.map((option, i) => (
          <div
            key={i}
            className={`${option.value === value ? 'bg-background-300 border border-primary-purple' : 'bg-transparent border-none'} text-white rounded-md px-3 py-1 cursor-pointer text-[13px]`}
            onClick={() => {
              onChange(option);
            }}
          >
            {option.name}
          </div>
        ))
      }
    </div>
  </div>;
};

export default MediaStepper;
