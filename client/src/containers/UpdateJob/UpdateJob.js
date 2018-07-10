import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import UpdateJobForm from '../../components/UpdateJobForm/UpdateJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { executeUpdateJob, resetUpdateJob, selectUpdateJob } from './actions';

class UpdateJob extends Component {
  updateJobValues = values => {
    console.log("--------------------------")
    console.log(this.props.updateJob)
    console.log(this.props.updateJob.job)
    const newJob = {
      ...this.props.updateJob.job,
      ...values
    }
    console.log("+++++++++++++++++++++++++++")
    console.log(newJob)
    console.log("---------------------------")
    this.props.executeUpdateJob(newJob);
  }

  resetUpdateJob = () => this.props.resetUpdateJob();

  componentWillMount() {
    console.log(this.props.viewJobs)
    this.props.selectUpdateJob(this.props.viewJobs.edit)
    // this.props.selectUpdateJob(this.props.viewJobs.edit)
  }

  render() {
    if (this.props.updateJob.status || !this.props.viewJobs.edit) {
      this.props.resetUpdateJob();
      return <Redirect to='/viewjobs' />
    };

    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Update this job</h3>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6">
            <UpdateJobForm onSubmit={this.updateJobValues} initialValues={this.props.updateJob.job} />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  };
};

const mapStateToProps = (state,props) => {
  return { 
    updateJob: state.updateJob,
    viewJobs: state.viewJobs
  };
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    executeUpdateJob,
    resetUpdateJob,
    selectUpdateJob
  }, dispatch);
};

export default connect(mapStateToProps,mapActionsToProps)(UpdateJob);
