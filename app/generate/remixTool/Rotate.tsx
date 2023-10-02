import { InputNumber, Slider } from 'antd'
import React from 'react'

type Props = {
  rotate: number
  setRotate: (value: number) => void
}

const Rotate = ({ rotate, setRotate }: Props) => {
  return (
    <>
      {/* Container for the rotation control */}
      <div className='flex items-center gap-3 mt-6 mb-2'>
        {/* Label for the rotation control */}
        <div className='text-primary-gray w-[60px]'>Rotate</div>
        {/* Slider input for adjusting the rotation */}
        <Slider
          min={-360}
          max={360}
          style={{
            width: '300px',
          }}
          onChange={setRotate}
          tooltip={{
            open: true,
            placement: 'bottom',
            formatter: (value) => `${value} deg`
          }}
          value={typeof rotate === 'number' ? rotate : 0}
        />
        {/* Input field for manual rotation input */}
        <InputNumber
          min={-360}
          max={360}
          style={{
            margin: '0 16px',
            background: '#35363A',
            border: 'none',
            color: '#fff',
          }}
          value={rotate}
          onChange={(value) => setRotate(value as number)}
        />
      </div>
    </>
  )
}

export default Rotate