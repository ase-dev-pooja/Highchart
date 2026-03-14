import React, { useState } from 'react'
import Highcharts, { Chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const App = () => {
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Tokyo',
      color: 'red',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.420]

    }, {
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }]
  });

  const updateSeries = () => {
    setChartOptions({
      series: [
        {
          name: 'India',
          data: [Math.random() * 5, Math.random() * 2, Math.random() * 3]
        },
        {
          name: 'U.S',
          data: [Math.random() * 5, 2, Math.random() * 4]
        },
        {
          name: 'U.A',
          data: [Math.random() * 5, Math.random() * 2, 1]
        }
      ]
    });
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      >
        {/* <Chart type='pie' /> */}
      </HighchartsReact>
      <h3>Hovering over {hoverData}</h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  )
}

export default App