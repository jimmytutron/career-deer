import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AddJobForm from '../../components/AddJobForm/AddJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateJob, resetUpdateJob } from './actions';

class AddJob extends Component {
  updateJob = values => {
    // This calls the addjob action creator, passing the form values to it
   this.props.updateJob(values);
  };

  resetUpdateJob = () => this.props.resetUpdateJob();
  render() {
    if (this.props.addJob.status) {
      this.props.resetaddjob();
      return <Redirect to='/' />
    };

    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Add a job to your board</h3>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6">
            <AddJobForm onSubmit={this.addjob} />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  };
};

const mapStateToProps = (state,props) => {
  return { 
    updateJob: state.updateJob
  };
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    updateJob,
    resetUpdateJob
  }, dispatch);
};

export default connect(mapStateToProps,mapActionsToProps)(AddJob);
