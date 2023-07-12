import React from 'react'

const stepText: Record<number, string> = {
  0: 'Upload image',
  1: 'Choose inpainting areas',
  2: 'Choose pre-trained details',
  3: 'Choose pre-trained details',
  4: 'Choose pre-trained details',
  5: 'Generate',
}

type Props = {
  step: number
}

const ProcessStep = ({ step }: Props) => {
  const allSteps = Object.keys(stepText).length - 1

  return (
    <div className='mt-11 flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='font-medium text-xl'>Step{step + 1}. {stepText[step]}</div>
        <button
          disabled={step < allSteps}
          className={`bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate ${step < allSteps ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
        >
          Generate
        </button>
      </div>
      {/* bar */}
      <div className='h-2 bg-[#35363A] rounded-lg mt-3'>
        <div className='h-full bg-primary-purple rounded-lg transition-all duration-300 ease-in-out' style={{ width: `${step * 100 / allSteps}%` }} />
      </div>
    </div>
  )
}

export default ProcessStep
