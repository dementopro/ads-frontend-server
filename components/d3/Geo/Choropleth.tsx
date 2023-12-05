import { ResponsiveChoropleth } from '@nivo/geo';
import React from 'react';
import { countries } from '@/data/world';

// Define the props interface for the Choropleth component
type ChoroplethProps = {
  data: {
    id: string;
    value: number;
  }[];
}

// Define the Choropleth functional component
const Choropleth = ({ data }: ChoroplethProps) => {
  // Calculate the maximum value from the data
  const max = data.map(({ value }) => value).reduce((a, b) => Math.max(a, b), 0);

  // Render the ResponsiveChoropleth component from nivo
  return (
    <>
      <ResponsiveChoropleth
        data={data}
        colors='nivo'
        theme={{
          text: {
            color: '#eee'
          },
          tooltip: {
            container: {
              background: '#222',
              color: '#fff'
            }
          },
        }}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, max]}
        unknownColor="#666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#555"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 50,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: '#ddd',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#fff',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </>
  );
}

// Export the Choropleth component
export default Choropleth;
