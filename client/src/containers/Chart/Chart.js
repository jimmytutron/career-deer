import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { getChartAllData } from './actions';
// import 'chartjs-plugin-datalabels';

import './Chart.css';


class Chart extends Component {

  componentDidMount() {
    this.props.getChartAllData();
  }

  render() {

    if (!this.props.app.user){
      window.location.pathname="/unauthorized";
      return null;
    };

    return (
      <div className="col-12 col-md-10 col-lg-7 mt-5 mx-auto d-flex flex-wrap">
        <h1 className="text-center font-weight-bold w-100">Your Activity Dashboard</h1>
        <div className="chart mx-auto mb-5">
          <Line
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [{
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


        <div className="row mx-auto mb-5">
          <h3 className="col-12 text-center font-weight-bold">Percentile Rating</h3>
          <div className="chart col-md-4 col-sm-12">
            <Doughnut
              data={{
                labels: ["# Above You", "# Below You"],
                datasets: [
                  {
                    data: this.props.chartData.user.percentile.appliedArr,
                    backgroundColor: [
                      'rgba(225,225,225, 1)',
                      'rgba(255,0,0, 1)'
                    ]
                  }]
              }}
              options={{
                title: {
                  display: true,
                  text: 'Applied' + this.props.chartData.sample.title,
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                maintainAspectRatio: false
              }}
            />
            <div className="doughnut-inner col-12">
              <h4 className="text-center">{this.props.chartData.user.percentile.applied}</h4>
            </div>
          </div>

          <div className="chart col-md-4 col-sm-12">
            <Doughnut
              data={{
                labels: ["# Above You", "# Below You"],
                datasets: [
                  {
                    data: this.props.chartData.user.percentile.phoneArr,
                    backgroundColor: [
                      'rgba(225,225,225, 1)',
                      'rgba(0,255,0, 1)'
                    ]
                  }]
              }}
              options={{
                title: {
                  display: true,
                  text: 'Phone' + this.props.chartData.sample.title,
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                maintainAspectRatio: false
              }}
            />
            <div className="doughnut-inner col-12">
              <h4 className="text-center">{this.props.chartData.user.percentile.phone}</h4>
            </div>
          </div>

          <div className="chart col-md-4 col-sm-12">
            <Doughnut
              data={{
                labels: ["# Above You", "# Below You"],
                datasets: [
                  {
                    data: this.props.chartData.user.percentile.onSiteArr,
                    backgroundColor: [
                      'rgba(225,225,225, 1)',
                      'rgba(255,255,0, 1)'
                    ]
                  }]
              }}
              options={{
                title: {
                  display: true,
                  text: 'On-Site' + this.props.chartData.sample.title,
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'bottom'
                },
                maintainAspectRatio: false
              }}
            />
            <div className="doughnut-inner col-12">
              <h4 className="text-center">{this.props.chartData.user.percentile.onSite}</h4>
            </div>
          </div>
        </div>

        <div className="row col-12 mx-auto mb-5">
          <div className="chart col-sm-12 col-md-6">
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
                      labelString: 'Number of Jobs'
                    },
                    ticks: {
                      beginAtZero: true,
                      callback: function (value, index, values) {
                        //converting y-axis number to include commas.
                        if (parseInt(value) >= 1000) {
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
                  text: 'Userbase Employment Progress' + this.props.chartData.sample.title,
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

          <div className="chart col-sm-12 col-md-6">
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
                      labelString: 'Number of Jobs'
                    },
                    ticks: {
                      beginAtZero: true,
                      callback: function (value, index, values) {
                        //converting y-axis number to include commas.
                        if (parseInt(value) >= 1000) {
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
                  text: 'Your Employment Progress' + this.props.chartData.sample.title,
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
        </div>

        <div className="chart mx-auto mb-5">
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
                text: 'Your Comparison with Userbase' + this.props.chartData.sample.title,
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
    chartData: state.chartData,
    app: state.app
  }
}

const mapActionsToProps = (dispatch, props) => ({
  getChartAllData
})

export default connect(mapStateToProps, mapActionsToProps())(Chart);


