import { ScaleLinear, axisLeft, select } from 'd3';
import React, { useEffect, useRef } from 'react';

// Define the props interface for AxisLeft component
interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>; // The linear scale for the left axis
  transform?: string; // Optional transformation for positioning the axis
}

// Define the AxisLeft functional component
const AxisLeft = ({ scale, transform }: AxisLeftProps) => {
  const ref = useRef<SVGGElement>(null);

  // useEffect to update the axis when the scale changes
  useEffect(() => {
    if (ref.current) {
      // Use d3's select to attach the left axis to the SVG group element
      // Also, specify the number of ticks on the axis using the "ticks" method (in this case, 4 ticks)
      select(ref.current).call(axisLeft(scale).ticks(4));
    }
  }, [scale]);

  // Render the SVG group element for the left axis
  return <g ref={ref} transform={transform} />;
}

// Export the AxisLeft component
export default AxisLeft;