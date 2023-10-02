import { ScaleBand, axisBottom, select } from 'd3';
import React, { useEffect, useRef } from 'react';

// Define the props interface for AxisBottom component
interface AxisBottomProps {
  scale: ScaleBand<string>; // The scale for the bottom axis
  transform: string; // Transformation for positioning the axis
}

// Define the AxisBottom functional component
const AxisBottom = ({ scale, transform }: AxisBottomProps) => {
  const ref = useRef<SVGGElement>(null);

  // useEffect to update the axis when the scale changes
  useEffect(() => {
    if (ref.current) {
      // Use d3's select to attach the bottom axis to the SVG group element
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  // Render the SVG group element for the bottom axis
  return <g ref={ref} transform={transform} />;
}

// Export the AxisBottom component
export default AxisBottom;