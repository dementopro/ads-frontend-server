import { ResponsiveLine, Serie } from '@nivo/line';

type TheResponsiveLineProps = {
  data: Serie[];
};

const TheResponsiveLine = ({ data }: TheResponsiveLineProps) => {
  return (
    <>
      {/* The ResponsiveLine component from the Nivo library */}
      <ResponsiveLine
        theme={{
          // text: {
          //   color: '#eee',
          // },
          tooltip: {
            container: {
              background: '#222222',
              color: '#ffffff',
            },
          },
          grid: {
            line: {
              stroke: 'none',
            },
          },
          axis: {
            ticks: {
              text: {
                fill: '#aaa',
              },
            },
          },
        }}
        data={data}
        colors={{ datum: 'color' }}
        margin={{ top: 50, right: 40, bottom: 80, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 16,
          tickRotation: -45,
          tickValues: data[0]?.data?.map((d, index) => {
            // Customize tick values based on data length
            if (data[0]?.data?.length <= 10) {
              return d.x;
            }
            if (index % 2 === 0) {
              return d.x;
            } else {
              return '';
            }
          }),
          legend: '',
          legendOffset: 36,
          legendPosition: 'end',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -60,
          legendPosition: 'middle',
        }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: -40,
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
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default TheResponsiveLine;
