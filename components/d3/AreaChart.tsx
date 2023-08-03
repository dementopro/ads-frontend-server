import React, { useEffect, useRef } from 'react'
import * as d3 from "d3";
import styles from './AreaChart.module.css'
import { AreaData, ClicksMetricLabel } from '@/types/socialInsights';

// reference: https://d3-graph-gallery.com/graph/stackedarea_basic.html

const margin = { top: 40, right: 20, bottom: 60, left: 80 }
const width = 960 - margin.left - margin.right
const height = 520 - margin.top - margin.bottom



type AreaChartProps = {
  data: AreaData[]
  colorMap: Record<ClicksMetricLabel, string>
}


const AreaChart = ({ data, colorMap }: AreaChartProps) => {

  useEffect(() => {
    drawChart()
  }, [data])

  function drawChart() {

    // clean up
    d3.select('#AreaChart').selectAll('*').remove()

    const svg = d3.select("#AreaChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const sumstat = d3.group(data, d => new Date(d.date));
    const mygroups = [...new Set(data.map(item => item.name))] // list of group names

    const stackedData = d3
      .stack<any>()
      .keys(d3.range(mygroups.length) as any)
      .value((d, key, i) => d[1][key].value)
      (sumstat)

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([0, width]);

    const xAxis = d3
      .axisBottom(x)
      // .tickFormat((val) => d3.timeFormat("%Y-%m-%d")(val as Date))
      .tickFormat(d3.timeFormat('%b %d') as any)
      .ticks(5)
      .tickSize(6)
      .tickPadding(12);

    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr('color', 'rgba(255, 255, 255, 0.8)')
      .call(xAxis);

    const min = d3.min(data, d => d.value) as number
    const max = d3.max(data, d => d.value) as number

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([min * 0.9, max * 1.1])
      .range([height, 0]);

    const yAxis = d3
      .axisLeft(y)
      .ticks(4)
      .tickSize(-width)
      .tickPadding(12);

    svg.append("g")
      .attr('color', 'rgba(255, 255, 255, 0.8)')
      .call(yAxis);


    const area = d3.area<any>()
      .x((d) => x(new Date(d.data[0])))
      .y0(height)
      .y1(d => y(d[1] - d[0]))

    svg
      .selectAll("#AreaChart")
      .data(stackedData)
      .join("path")
      .attr("fill", (d) => {
        const name = mygroups[d.key as any];
        return colorMap[name as ClicksMetricLabel]!
      })
      .attr('fill-opacity', 0.25)
      .attr("d", area)
      .on('mouseover', function (d, i) {
        d3.select(this).attr('fill-opacity', 0.5)
      })
      .on('mouseout', function (d, i) {
        d3.select(this).attr('fill-opacity', 0.25)
      })

    const line = d3
      .line<any>()
      .x((d) => x(new Date(d.data[0])))
      .y((d) => y(d[1] - d[0]));

    svg
      .selectAll("#AreaChart")
      .data(stackedData)
      .join('path')
      .attr('fill', 'none')
      .attr('stroke', (d) => {
        const name = mygroups[d.key as any];
        return colorMap[name as ClicksMetricLabel]!
      })
      .attr('stroke-width', 2)
      .attr('d', line)

    d3.selectAll('.tick line')
      .attr('stroke', '#333');
    d3.selectAll('.domain')
      .attr('stroke', '#333');

  }

  return (
    <>
      <div id="AreaChart" className='w-full mx-auto'></div>
    </>
  )
}

export default AreaChart
