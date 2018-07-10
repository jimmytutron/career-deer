import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editJob, resetViewJobs, getAllSavedJobs, updateViewJobs } from './actions';

class ViewJobs extends Component {

  componentWillMount() {
    this.props.resetViewJobs();
    this.props.getAllSavedJobs();
  }

  render() {
    if (this.props.viewJobs.edit) {
      return <Redirect to='/updateJob' />
    };
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col size="12 md-12 lg-5">
            View Jobs
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col size="12 card">
            {this.props.viewJobs.data.map((job, i) => (
              <div className="my-3" key={`viewjob-${i}`}>
                <h4>{job.title}</h4>
                <p>{`company: ${job.company_name}`}</p>
                <p>{job.post_date}</p>
                <p>{`location: ${job.location}`}</p>
                <button className="btn btn-light" onClick={() => this.props.editJob(this.props.viewJobs.data[i])}>{job._id}</button>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    viewJobs: state.viewJobs,
    updateJob: state.updateJob
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    resetViewJobs,
    updateViewJobs,
    getAllSavedJobs,
    editJob
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ViewJobs);

