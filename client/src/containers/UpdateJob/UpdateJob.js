import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import UpdateJobForm from '../../components/UpdateJobForm/UpdateJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateJob, resetUpdateJob } from './actions';

class UpdateJob extends Component {
  updateJob = values => this.props.updateJob(values);

  resetUpdateJob = () => this.props.resetUpdateJob();

  render() {
    if (this.props.updateJob.status) {
      this.props.resetUpdateJob();
      return <Redirect to='/' />
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
            <UpdateJobForm onSubmit={this.updateJob} />
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
    resetUpdateJob,
  }, dispatch);
};

export default connect(mapStateToProps,mapActionsToProps)(UpdateJob);
