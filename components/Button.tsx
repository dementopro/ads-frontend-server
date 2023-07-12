import React from 'react'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  btnStyle?: string
  onClick?: () => void
}

const Button = ({ children, type, btnStyle, onClick }: Props) => {
  return (
    <button onClick={() => onClick && onClick()} type={type || 'button'} className={`text-white bg-primary-gradient rounded-lg font-[700] hover:opacity-80 relative flex items-center justify-center ${btnStyle}`}>
      {children}
    </button>
  )
}

export default Button
