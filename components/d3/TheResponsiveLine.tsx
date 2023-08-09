import { ResponsiveLine, Serie } from '@nivo/line'

export interface TheResponsiveLineProps {
  data: Serie[]
}

const TheResponsiveLine = ({ data }: TheResponsiveLineProps) => {
  return (
    <>
      <ResponsiveLine
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
              stroke: '#666',
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
        data={data}
        colors={{ datum: 'color' }}
        margin={{ top: 50, right: 110, bottom: 80, left: 90 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: data[0].data.length > 10 ? -45 : 0,
          legend: '',
          legendOffset: 36,
          legendPosition: 'end'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -60,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
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

export default TheResponsiveLine
