import AxisBottom from '@/components/d3/BarChart/AxisBottom'
import AxisLeft from '@/components/d3/BarChart/AxisLeft'
import Bars from '@/components/d3/BarChart/Bars'
import { BarData } from '@/types/socialInsights'
import { scaleBand, scaleLinear } from 'd3'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/components/d3/BarChart/BarChart.module.css'


type Tooltip = {
  x: number;
  y: number;
  index: number;
}

type BarChartProps = {
  data: BarData[]
}

const BarChart = ({ data }: BarChartProps) => {

  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const margin = { top: 20, right: 20, bottom: 20, left: 60 };

  const getSvgContainerSize = () => {
    if (!svgRef.current) return;

    const newWidth = (svgRef.current?.clientWidth || 0) - margin.left - margin.right;
    const newHeight = (svgRef.current?.clientHeight || 0) - margin.top - margin.bottom;

    setWidth(newWidth);
    setHeight(newHeight);
  };

  useEffect(() => {
    getSvgContainerSize()
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, [])


  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.7);

  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  return (
    <>
      <svg
        className='overflow-visible w-full h-[300px]'
        ref={svgRef}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars
            data={data}
            height={height}
            scaleX={scaleX} scaleY={scaleY}
            mouseEnter={(event, index: number) => {
              setTooltip({
                x: event.clientX,
                y: event.clientY,
                index
              });
            }}
            mouseLeave={() => setTooltip(null)}
          />
        </g>
      </svg>
      {
        !!tooltip ?
          <div className={styles['tooltip']} style={{ top: tooltip.y, left: tooltip.x }}>
            <span className="tooltip__title">{data[tooltip.index].label}</span>
            <span>{data[tooltip.index].value}</span>
          </div>
          : null
      }
    </>
  )
}

export default BarChart
