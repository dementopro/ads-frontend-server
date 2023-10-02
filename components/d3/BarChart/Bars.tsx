import { BarData } from '@/types/socialInsights';
import { ScaleBand, ScaleLinear } from 'd3';
import React, { MouseEvent, useEffect } from 'react';

// Define the props interface for the Bars component
interface BarsProps {
  data: BarData[]; // An array of data for rendering bars
  height: number; // The height of the chart
  scaleX: ScaleBand<string>; // The scale for the X-axis (ordinal scale)
  scaleY: ScaleLinear<number, number, never>; // The scale for the Y-axis (linear scale)
  mouseEnter: (event: MouseEvent<SVGRectElement>, index: number) => void; // Function to handle mouse enter events
  mouseLeave: (event: MouseEvent<SVGRectElement>) => void; // Function to handle mouse leave events
}

// Define the Bars functional component
const Bars = ({ data, height, scaleX, scaleY, mouseEnter, mouseLeave }: BarsProps) => {
  // Render an array of rectangles (bars) based on the provided data
  return (
    <>
      {data.map(({ value, label }, index) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)} // X-coordinate of the bar based on the scale
          y={scaleY(value)} // Y-coordinate of the bar based on the scale
          width={scaleX.bandwidth()} // Width of the bar based on the bandwidth of the X-scale
          height={height - scaleY(value)} // Height of the bar based on the chart height and Y-scale
          fill="#BB86FC" // Fill color of the bar
          onMouseEnter={(e) => mouseEnter(e, index)} // Event handler for mouse enter
          onMouseLeave={mouseLeave} // Event handler for mouse leave
        />
      ))}
    </>
  );
}

// Export the Bars component
export default Bars;