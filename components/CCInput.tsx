'use client'
import React, { ChangeEvent } from 'react';

// Function to format the credit card number with spaces
function ccFormat(value: string) {
  const v = value
    .replace(/\s+/g, '') // Remove existing spaces
    .replace(/[^0-9]/gi, '') // Remove non-numeric characters
    .slice(0, 16); // Limit to 16 digits (standard credit card length)
  const parts = [];

  // Split the number into groups of four digits
  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.slice(i, i + 4));
  }

  // Join the groups with spaces, if there is more than one group
  return parts.length > 1 ? parts.join(' ') : value;
}

type CCInputProps = {
  value: string; // Current value of the credit card input
  setValue: (value: string) => void; // Callback to update the input value
  isError?: boolean | ''; // Optional flag for indicating an error state
};

const CCInput = ({ value, setValue, isError }: CCInputProps) => {

  // Event handler for input value change
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Format the input value and update it using the setValue callback
    setValue(ccFormat(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Card Number"
        value={ccFormat(value)} // Display the formatted value
        onChange={onChange} // Call onChange when the input value changes
        className={`py-2 px-4 rounded sm:w-[370px] bg-transparent border-[#383838] border-2 text-white focus:outline-none focus:border-primary-purple ${isError ? 'border-rose-600' : ''}`}
      />
    </>
  );
};

export default CCInput;
