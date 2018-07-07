import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { selectJob } from './actions';
import { bindActionCreators } from 'redux';
// import { grabData } from '../../utils/API'; 

class Chart extends Component {
  // static defaultProps = {
  //   displayTitle: true,
  //   displayLegend: true,
  //   legendPosition: 'right'
  // }

  // componentDidMount(){

  // }


  render() {

    if (!this.props.chartData) {
      return <div><button type="button" onClick={() => this.props.selectJob()}> Test Me! </button> No job was selected.</div>
    }

    return (
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <button type="button"
          onClick={() => this.props.selectJob()}>
          Test Me!
          </button>
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              title: {
                display: this.props.chartData.title.display,
                text: this.props.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.legend.display,
                position: this.props.chartData.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="chart">
          <Line
            data={this.props.chartData}
            options={{
              title: {
                display: this.props.chartData.title.display,
                text: this.props.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.legend.display,
                position: this.props.chartData.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
        <div className="chart">
          <Pie
            data={this.props.chartData}
            options={{
              title: {
                display: this.props.chartData.title.display,
                text: this.props.chartData.title.text,
                fontSize: 20
              },
              legend: {
                display: this.props.chartData.legend.display,
                position: this.props.chartData.legend.position
              },
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    )
  }
}
//banana
function mapStateToProps(state) {
  return {
    chartData: state.chartData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectJob }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);


