import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  show: boolean
  setShow: (show: boolean) => void
}

const NotEnoughtCredits = ({ show, setShow }: Props) => {
  return (
    <>
      {
        show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-[526px] border border-[#27282F] bg-[#1B1C21] rounded-xl px-8 py-10">
              <div className="absolute top-6 right-6 cursor-pointer hover:opacity-80" onClick={() => setShow(false)}>
                <Icon icon="mdi:close-circle-outline" className="text-[#5F6368]" width={24} height={24} />
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="text-center font-bold text-3xl">
                  Purchase Credits
                </div>
                <p className='mt-4 max-w-[300px] text-center'>
                  {`You don't have enough credits to use this feature.`}
                </p>
                <Icon icon='game-icons:pay-money' className='text-primary-gray' width={60} height={60} />
                <Link
                  href={'/pricing'}
                  className={`mt-9 w-[300px] flex items-center justify-center py-2 text-white cursor-pointer hover:opacity-80 overflow-hidden rounded-lg border-2 bg-[#1B1C21]`}
                >
                  to make purchase credits
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default NotEnoughtCredits
