import { BarData } from '@/types/socialInsights';
import { ScaleBand, ScaleLinear } from 'd3';
import React, { MouseEvent, useEffect } from 'react'

interface BarsProps {
  data: BarData[]
  height: number;
  scaleX: ScaleBand<string>
  scaleY: ScaleLinear<number, number, never>;
  mouseEnter: (event: MouseEvent<SVGRectElement>, index: number) => void;
  mouseLeave: (event: MouseEvent<SVGRectElement>) => void;
}

const Bars = ({ data, height, scaleX, scaleY, mouseEnter, mouseLeave }: BarsProps) => {

  return (
    <>
      {data.map(({ value, label }, index) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="#BB86FC"
          onMouseEnter={(e) => mouseEnter(e, index)}
          onMouseLeave={mouseLeave}
        />
      ))}
    </>
  );
}

export default Bars
