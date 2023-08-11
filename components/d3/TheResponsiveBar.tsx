import { ResponsiveBar } from '@nivo/bar'
import { Serie } from '@nivo/line'
import React from 'react'


export interface TheResponsiveBarProps {
  data: Serie[] | {
    Date: string
    Spend: number
  }[]
}

const TheResponsiveBar = ({ data }: TheResponsiveBarProps) => {
  return (
    <>
      <ResponsiveBar
        theme={{
          textColor: '#eee',
          tooltip: {
            container: {
              background: '#222222',
              color: '#ffffff'
            }
          },
          grid: {
            line: {
              stroke: 'none',
            }
          },
          axis: {
            ticks: {
              text: {
                fill: '#aaa'
              }
            }
          }
        }}
        data={data as Serie[]}
        margin={{ top: 50, right: 40, bottom: 80, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 16,
          tickRotation: -45,
          tickValues: data?.map((d, index) => {
            if (data?.length <= 10) {
              return d.Date
            }
            if (index % 2 === 0) {
              return d.Date
            } else {
              return ''
            }
          }),
          legend: '',
          legendOffset: 36,
          legendPosition: 'end'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        indexBy="Date"
        keys={['Spend']}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: -40,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </>
  )
}

export default TheResponsiveBar
