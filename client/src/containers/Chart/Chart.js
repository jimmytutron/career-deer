import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, } from 'react-chartjs-2';
import { getChartAllData, getChartUserData } from './actions';
import { bindActionCreators } from 'redux';
// import 'chartjs-plugin-datalabels';

import './Chart.css';

class Chart extends Component {

  componentDidMount() {
    this.props.getChartAllData();
  }

  render() {
    if (!this.props.chartData) {
      return <div><button type="button" onClick={() => this.props.getChartData()}> Test Me! </button> No job was selected.</div>
    }

    return (
      <div className="col-12 col-md-10 col-lg-7 mx-auto d-flex flex-wrap">
        <div className="chart chart-50">
          <Bar
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [{
                label: 'Database',
                data: this.props.chartData.all.data,
                backgroundColor: [
                  'rgba(0,47,178, 0.7)',
                  'rgba(255,0,0, 0.7)',
                  'rgba(0,255,0, 0.7)',
                  'rgba(255,255,0, 0.7)',
                  'rgba(40,40,40, 0.7)'
                ]
              }]
            }}
            options={{
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Count'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                      //converting y-axis number to include commas.
                      if(parseInt(value) >= 1000){
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        return value;
                      }
                    }
                  }
                }]
              },
              title: {
                display: true,
                text: 'Employment Progress (Database)' + this.props.chartData.sample.title,
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'right'
              },
              maintainAspectRatio: false
            }}
          />
        </div>

        <div className="chart chart-50">
          <Bar
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [
                {
                  // label: 'Users',
                  data: this.props.chartData.user.data,
                  backgroundColor: [
                    'rgba(0,47,178, 0.7)',
                    'rgba(255,0,0, 0.7)',
                    'rgba(0,255,0, 0.7)',
                    'rgba(255,255,0, 0.7)',
                    'rgba(40,40,40, 0.7)'
                  ]
                }]
            }}
            options={{
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Count'
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                      //converting y-axis number to include commas.
                      if(parseInt(value) >= 1000){
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        return value;
                      }
                    }
                  }
                }]
              },
              title: {
                display: true,
                text: 'Employment Progress (User)' + this.props.chartData.sample.title,
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'right'
              },
              maintainAspectRatio: false
            }}
          />
        </div>

        <div className="chart chart-size">
          <Bar
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [
                {
                  label: 'Database',
                  data: this.props.chartData.all.percentage,
                  backgroundColor: [
                    'rgba(0,47,178, 0.7)',
                    'rgba(0,47,178, 0.7)',
                    'rgba(0,47,178, 0.7)',
                    'rgba(0,47,178, 0.7)',
                    'rgba(0,47,178, 0.7)'
                  ]
                },
                {
                  label: 'User',
                  data: this.props.chartData.user.percentage,
                  backgroundColor: [
                    'rgba(0,255,0, 0.7)',
                    'rgba(0,255,0, 0.7)',
                    'rgba(0,255,0, 0.7)',
                    'rgba(0,255,0, 0.7)',
                    'rgba(0,255,0, 0.7)'
                  ]
                }]
            }}
            options={{
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: (value, index, values) => {
                      return value + '%';
                    }
                  }
                }]
              },
              title: {
                display: true,
                text: 'User Comparison' + this.props.chartData.sample.title,
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              maintainAspectRatio: false
            }}
          />
        </div>

        <div className="chart">
          <Line
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [{
                label: 'Database',
                fill: false,
                data: this.props.chartData.all.percentage,
                backgroundColor: [
                  'rgba(0,47,178, 0.7)'
                ]
              },
              {
                label: 'User',
                fill: false,
                data: this.props.chartData.user.percentage,
                backgroundColor: [
                  'rgba(0,255,0, 0.7)'
                ]
              }]
            }}
            options={{
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true
                  },
                  ticks: {
                    beginAtZero: true,
                    callback: (value, index, values) => {
                      return value + '%';
                    }
                  }
                }]
              },
              title: {
                display: true,
                text: 'General Progress (%)' + this.props.chartData.sample.title,
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              maintainAspectRatio: false
            }}
          />
        </div>

        <div className="chart">
          <Pie
            data={{
              labels: this.props.chartData.user.labels,
              datasets: [{
                label: 'Users',
                data: this.props.chartData.user.data,
                backgroundColor: [
                  'rgba(0,47,178, 0.7)',
                  'rgba(255,0,0, 0.7)',
                  'rgba(0,255,0, 0.7)',
                  'rgba(255,255,0, 0.7)',
                  'rgba(40,40,40, 0.7)'
                ]
              }]
            }}
            options={{
              showDatapoints: true,
              title: {
                display: true,
                text: 'Current Employment Progress' + this.props.chartData.sample.title,
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              },
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chartData: state.chartData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getChartAllData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);


