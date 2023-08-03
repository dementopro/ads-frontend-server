import { ScaleLinear, axisLeft, select } from 'd3';
import React, { useEffect, useRef } from 'react'

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
  transform?: string;
}

const AxisLeft = ({ scale, transform }: AxisLeftProps) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale).ticks(4));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

export default AxisLeft
