import { InputNumber, Slider } from 'antd'
import React from 'react'

type Props = {
  scale: number
  setScale: (value: number) => void
}

const Scale = ({ scale, setScale }: Props) => {
  return (
    <>
      <div className='flex items-center gap-3 my-6'>
        <div className='text-primary-gray w-[60px]'>Scale</div>
        <Slider
          min={-0}
          max={5}
          step={0.1}
          style={{
            width: '300px',
          }}
          onChange={setScale}
          tooltip={{
            open: true,
            placement: 'bottom',
            formatter: (value) => `${~~(value! * 100)}%`
          }}
          value={typeof scale === 'number' ? scale : 0}
        />
        <InputNumber
          min={-0}
          max={5}
          step={0.1}
          style={{
            margin: '0 16px',
            background: '#35363A',
            border: 'none',
            color: '#fff',
          }}
          formatter={(value) => `${~~(value! * 100)}%`}
          value={scale}
          onChange={(value) => setScale(value as number)}
        />
      </div>
    </>
  )
}

export default Scale
