import React, { FC, useState } from 'react';

interface HorizontalStepperProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
}

const HorizontalStepper: FC<HorizontalStepperProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedComponentIndex(index);
    setActiveButtonIndex(index);
  };
  return (
    <div className="flex w-full flex-wrap font-poppins items-center gap-[32px]">
      <div className="w-full ipad:h-[57px] px-[24px] bg-[#23252B] rounded-[12px] justify-between items-center android:gap-[32px] ipad:gap-[32px] android:flex-col ipadmini:flex-row inline-flex">
        <button
          className={`w-[273.33px] h-[41px] px-[10px] py-[8px] ${
            activeButtonIndex === 0 ? 'bg-[#35363A]' : ''
          } rounded-[12px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
        >
          <div
            className={`w-[26px] h-[25px] ${
              activeButtonIndex === 0 ? 'bg-white' : 'bg-[#4E4A5B]'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 0 ? 'text-[#35363A]' : 'text-[#838383]'
              } android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}
            >
              1
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins  ${
              activeButtonIndex === 0
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Information
          </div>
        </button>

        <button
          className={`w-[273.33px] h-[41px] px-[10px] py-[8px] ${
            activeButtonIndex === 1 ? 'bg-[#35363A]' : ''
          } rounded-[12px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
        >
          <div
            className={`w-[26px] h-[25px] ${
              activeButtonIndex === 1 ? 'bg-white' : 'bg-[#4E4A5B]'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 1 ? 'text-[#35363A]' : 'text-[#838383]'
              } android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}
            >
              2
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins ${
              activeButtonIndex === 1
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Additional Details
          </div>
        </button>

        <button
          className={`w-[273.33px] h-[41px] px-[10px] py-[8px] ${
            activeButtonIndex === 2 ? 'bg-[#35363A]' : ''
          } rounded-[12px] justify-start items-center android:gap-[7px] ipad:gap-[16px] flex`}
        >
          <div
            className={`w-[26px] h-[25px] ${
              activeButtonIndex === 2 ? 'bg-white' : 'bg-[#4E4A5B]'
            } rounded-[360px] justify-center items-center flex`}
          >
            <div
              className={`text-center ${
                activeButtonIndex === 2 ? 'text-[#35363A]' : 'text-[#838383]'
              } android:text-[12px] ipad:text-[20px] font-semibold font-poppins`}
            >
              3
            </div>
          </div>
          <div
            className={`android:text-[9px] ipad:text-[13px] font-poppins ${
              activeButtonIndex === 2
                ? 'text-white font-medium'
                : 'text-[#838383]'
            }`}
          >
            Recommendations
          </div>
        </button>
      </div>
    </div>
  );
};

export default HorizontalStepper;
