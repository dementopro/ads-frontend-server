import { ResponsiveChoropleth } from '@nivo/geo';
import { select } from 'd3';
import React, { useEffect, useRef, useState } from 'react'
import { countries } from '@/data/world'

type ChoroplethProps = {
  data: any
}

const Choropleth = ({ data }: ChoroplethProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const margin = { top: 20, right: 20, bottom: 20, left: 60 };

  const getSvgContainerSize = () => {
    if (!ref.current) return;

    const newWidth = (ref.current?.clientWidth || 0) - margin.left - margin.right;
    const newHeight = (ref.current?.clientHeight || 0) - margin.top - margin.bottom;

    setWidth(newWidth);
    setHeight(newHeight);
  };

  useEffect(() => {
    getSvgContainerSize()
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, [])

  return (
    <div
      className='overflow-visible w-full h-[300px] text-black rounded-lg'
      style={{
        width: `${width}px)`,
        height: `${height}px)`,
      }}
      ref={ref}>
      <ResponsiveChoropleth
        data={data}
        domain={[0, 1000000]}
        features={countries.features}
        colors="purples"
        unknownColor="#DCE1E6"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#fff",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#fff",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default Choropleth
