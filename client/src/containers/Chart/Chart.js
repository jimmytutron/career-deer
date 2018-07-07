import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { selectJob } from './actions';
import { bindActionCreators } from 'redux';


class Chart extends Component {


  // static defaultProps = {
  //   displayTitle: true,
  //   displayLegend: true,
  //   legendPosition: 'right'
  // }


  render() {

    if (!this.props.chart.chartData) {
      return <div>No job was selected.</div>
    }

    return (
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <button type="button"
          onClick={() => this.props.selectJob('yes')}>
          Test Me!
          </button>
        <div className="chart">
          <Bar
            data={this.props.chart.chartData}
            options={{
              title: {
                display: this.props.chart.chartData.title.display,
                text: this.props.chart.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chart.chartData.legend.display,
                position: this.props.chart.chartData.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="chart">
          <Line
            data={this.props.chart.chartData}
            options={{
              title: {
                display: this.props.chart.chartData.title.display,
                text: this.props.chart.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chart.chartData.legend.display,
                position: this.props.chart.chartData.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="chart">
          <Pie
            data={this.props.chart.chartData}
            options={{
              title: {
                display: this.props.chart.chartData.title.display,
                text: this.props.chart.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chart.chartData.legend.display,
                position: this.props.chart.chartData.legend.position
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
    chart: state.chart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectJob: selectJob }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);


