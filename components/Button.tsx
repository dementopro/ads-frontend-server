import React from 'react'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  btnStyle?: string
}

const Button = ({ children, type, btnStyle }: Props) => {
  return (
    <button type={type || 'button'} className={`text-white bg-gradient-to-r rounded-lg from-[#D634FF] to-[#4663FF] font-[700] hover:opacity-80 relative flex items-center justify-center ${btnStyle}`}>
      {children}
    </button>
  )
}

export default Button
