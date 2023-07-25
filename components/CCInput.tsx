'use client'
import React, { ChangeEvent } from 'react'

function ccFormat(value: string) {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .slice(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.slice(i, i + 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}

type CCInputProps = {
  value: string;
  setValue: (value: string) => void;
  isError?: boolean | '';
}

const CCInput = ({ value, setValue, isError }: CCInputProps) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(ccFormat(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Card Number"
        value={ccFormat(value)}
        onChange={onChange}
        className={`py-2 px-4 rounded sm:w-[370px] bg-transparent border-[#383838] border-2 text-white focus:outline-none focus:border-primary-purple ${isError ? 'border-rose-600' : ''}`}
      />
    </>
  )
}

export default CCInput
