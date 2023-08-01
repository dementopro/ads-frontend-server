import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

type PayResultProps = {
  visible: boolean,
  onClose: () => void,
  message: string
}

const PayResult = ({ visible, onClose, message }: PayResultProps) => {
  return (
    visible &&
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[726px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-12 flex flex-col items-center justify-center">
        <div className="absolute top-6 right-6 cursor-pointer" onClick={onClose}>
          <Icon icon="mdi:close-circle-outline" className="text-[#5F6368]" width={24} height={24} />
        </div>
        <div className="text-center text-3xl font-bold">
          <div className="text-center font-bold text-3xl">
            Success!
          </div>
          <p className='text-center text-base mt-4 max-w-[400px]'>
            {message}
          </p>
        </div>
        <Image src='/images/admin/pay_result.svg' alt='pay result' width={214} height={184} className='mt-8' />
        <button
          onClick={onClose}
          className={`mt-9 w-[280px] flex items-center justify-center py-2 text-white cursor-pointer hover:opacity-80 rounded-lg bg-primary-purple`}
        >
          Okey
        </button>
      </div>
    </div>
  )
}

export default PayResult
