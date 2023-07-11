import React from 'react'

type Props = {
  text?: string
}

const Empty = ({ text }: Props) => {
  return (
    <div
      className='flex items-center justify-center w-full h-full min-h-[100px] text-primary-gray text-base'
    >
      {text || 'No content has been generated yet'}
    </div>
  )
}

export default Empty
