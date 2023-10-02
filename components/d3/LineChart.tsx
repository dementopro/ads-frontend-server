import React, { MouseEvent, useEffect, useState } from 'react';
import * as d3 from "d3";
import styles from './LineChart.module.css';
import { LineData } from '@/types/socialInsights';

const margin = { top: 40, right: 10, bottom: 0, left: 80 };
const width = 960 - margin.left - margin.right;
const height = 420 - margin.top - margin.bottom;
const color = "#844fff";

// Title component for the chart
const Title = ({ title }: { title: string }) => {
  return (
    <text className='!fill-white' x={width / 2} y={0 - margin.top / 2} textAnchor="middle">
      {title}
    </text>
  )
}

// YLabel component for the Y-axis label
const YLabel = ({ yLabel }: { yLabel: string }) => {
  return (
    <text transform={"rotate(-90)"} x={0 - height / 2} y={-10} dy="1em">
      {yLabel}
    </text>
  )
}

// XYAxis component for rendering X and Y axes
type XYAxisProps = {
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
}

const XYAxis = ({ xScale, yScale }: XYAxisProps) => {

  // Function to render the X-axis
  const getXAxis = (ref: SVGGElement) => {
    const xAxis = d3.axisBottom(xScale)
      .tickPadding(16)
      .tickSize(-height)
      .tickFormat((val, idx) => {
        if (idx & 1) {
          return ''
        }
        return d3.timeFormat('%b %d')(val as Date)
      });
    d3.select(ref).call(xAxis);
  };

  // Function to render the Y-axis
  const getYAxis = (ref: SVGGElement) => {
    const yAxis = d3.axisLeft(yScale)
      .tickSize(-width)
      .tickPadding(28);
    d3.select(ref).call(yAxis);
  };

  useEffect(() => {
    // Apply styles to tick lines
    d3.selectAll('.tick line').attr('stroke', '#333');
  }, []);

  return (
    <g>
      <g className={styles.xAxis} ref={getXAxis} transform={`translate(0,${height})`} />
      <g className={styles.yAxis} ref={getYAxis} transform='translate(60)' />
    </g>
  )
}

type LineChartProps = {
  data: LineData[];
  title?: string;
  yLabel?: string;
}

const LineChart = ({ title, data, yLabel }: LineChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const yMinValue = d3.min(data, (d) => d.value)!;
  const yMaxValue = d3.max(data, (d) => d.value)!;

  // X and Y scales
  const getX = d3.scaleTime<number>()
    .domain(d3.extent(data, (d) => d.date) as [Date, Date])
    .range([60, width + 60]);

  const getY = d3.scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([height, 0]);

  // Line path for the data
  const linePath = d3.line<LineData>()
    .x((d) => getX(d.date))
    .y((d) => getY(d.value))
    .curve(d3.curveMonotoneX)(data);

  // Area path for the data
  const areaPath = d3.area<LineData>()
    .x((d) => getX(d.date))
    .y0((d) => getY(d.value))
    .y1(() => getY(yMinValue - 1))
    .curve(d3.curveMonotoneX)(data);

  // Handle mouse move event to display tooltips
  const handleMouseMove = (e: MouseEvent<SVGSVGElement>) => {
    const bisect = d3.bisector<LineData, unknown>((d) => d.date).left;
    const x0 = getX.invert(d3.pointer(e, this)[0]);
    const index = bisect(data, x0, 0);
    setActiveIndex(index);
  };

  // Handle mouse leave event to hide tooltips
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          {/* Define linear gradient for the area */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#7D55FA" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>

        {/* Render X and Y axes */}
        <XYAxis xScale={getX} yScale={getY} />

        {/* Render area path */}
        <path fill={`url(#gradient)`} d={areaPath!} opacity={0.6} />
        
        {/* Render line path */}
        <path strokeWidth={3} fill="none" stroke={color} d={linePath!} />

        {/* Render Y-axis label */}
        {yLabel && <YLabel yLabel={yLabel} />}
        
        {/* Render circles and tooltips */}
        {data.map((item, index) => {
          return (
            <g key={index}>
              <circle
                cx={getX(item.date)}
                cy={getY(item.value)}
                r={index === activeIndex ? 6 : 4}
                fill={color}
                strokeWidth={index === activeIndex ? 2 : 0}
                stroke="#fff"
                style={{ transition: "ease-out .1s" }}
              />
            </g>
          );
        })}

        {/* Render tooltips */}
        {data.map((item, index) => {
          return (
            <g key={index}>
              {index === activeIndex && (
                <foreignObject
                  x={getX(item.date) - 90}
                  y={getY(item.value) - 100}
                  width={180}
                  height={96}
                >
                  <div className='bg-primary-purple text-white rounded-lg px-4 py-2 flex flex-col'>
                    <div className='text-[15px]'>{title}</div>
                    <div className='text-base font-semibold'>{item.value}</div>
                    <div className='text-xs'>{item.date.toLocaleDateString()}</div>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  )
}

export default LineChart;