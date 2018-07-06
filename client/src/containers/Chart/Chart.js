//need to install react-chartjs-2 and chart.js

import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [
          'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
        ],
        datasets: [
          {
            label: 'Users',
            data: [
              50,
              20,
              10,
              5,
              1
            ],
            backgroundColor: [
              'rgba(225,225,225, 0.8)',
              'rgba(200,200,200, 0.8)',
              'rgba(150,150,150, 0.8)',
              'rgba(100,100,100, 0.8)',
              'rgba(50,50,50, 0.8)'
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }


}


export default Chart;


