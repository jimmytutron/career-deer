import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie, } from 'react-chartjs-2';
// import { getChartAllData } from './actions';
import { getChartAllData, getChartUserData } from './actions';
import { bindActionCreators } from 'redux';

class Chart extends Component {

  componentDidMount() {
    this.props.getChartAllData();
    this.props.getChartUserData();
  }

  render() {
    if (!this.props.chartData) {
      return <div><button type="button" onClick={() => this.props.getChartData()}> Test Me! </button> No job was selected.</div>
    }

    return (
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        {/* <button type="button"
          onClick={() => this.props.getChartData()}>
          Test Me!
          </button> */}
        <div className="chart">
          <Bar
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [{
                label: 'Users',
                data: this.props.chartData.all.data,
                backgroundColor: [
                  'rgba(0,47,178, 0.7)',
                  'rgba(255,0,0, 0.7)',
                  'rgba(0,255,0, 0.7)',
                  'rgba(255,255,0, 0.7)',
                  'rgba(40,40,40, 0.7)'
                ]
              },
              {
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
              scales: {
                yAxes: [{
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              title: {
                display: this.props.chartData.all.title.display,
                text: this.props.chartData.all.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.all.legend.display,
                position: this.props.chartData.all.legend.position
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
                label: 'Users',
                fill: false,
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
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              title: {
                display: this.props.chartData.all.title.display,
                text: this.props.chartData.all.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.all.legend.display,
                position: this.props.chartData.all.legend.position
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
                label: 'Users',
                fill: true,
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
                  "ticks": {
                    "beginAtZero": true
                  }
                }]
              },
              title: {
                display: this.props.chartData.all.title.display,
                text: this.props.chartData.all.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.all.legend.display,
                position: this.props.chartData.all.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
        
        <div className="chart">
          <Pie
            data={{
              labels: this.props.chartData.all.labels,
              datasets: [{
                label: 'Users',
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
              title: {
                display: this.props.chartData.all.title.display,
                text: this.props.chartData.all.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.all.legend.display,
                position: this.props.chartData.all.legend.position
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
  return bindActionCreators({ getChartAllData, getChartUserData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);


