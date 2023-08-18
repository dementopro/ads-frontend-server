import React from 'react'


type ButtonProps = {
  isActive: boolean
  onClick: () => void
  text: string
}

const Button = ({ isActive, onClick, text }: ButtonProps) => {
  return <button onClick={onClick} className={`rounded-lg  py-2 px-4 border hover:bg-[#35363A] ${isActive ? 'border-primary-gray bg-[#35363A] text-white' : 'border-transparent text-primary-gray bg-[#27282F]'}`}>
    {text}
  </button>
}


type Props = {
  aspect: number | undefined
  setAspect: (value: number | undefined) => void
}

const Aspect = ({ aspect, setAspect }: Props) => {
  return (
    <>
      <div className='flex items-center gap-3'>
        <div className='text-primary-gray w-[60px]'>Aspect</div>
        <Button isActive={aspect === 1 / 1} onClick={() => setAspect(1 / 1)} text='1 : 1' />
        <Button isActive={aspect === 4 / 3} onClick={() => setAspect(4 / 3)} text='4 : 3' />
        <Button isActive={aspect === 16 / 9} onClick={() => setAspect(16 / 9)} text='16 : 9' />
        <Button isActive={aspect === undefined} onClick={() => setAspect(undefined)} text='Auto' />
      </div>
    </>

  )
}

export default Aspect
