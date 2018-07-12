import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AddJobForm from '../../components/AddJobForm/AddJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addjob, resetaddjob } from './actions';

import RubberBand from 'react-reveal/RubberBand';

class AddJob extends Component {
  addjob = values => {
    // This calls the addjob action creator, passing the form values to it
   this.props.addjob(values);
  }

  render() {
    if (this.props.addJob.status) {
      this.props.resetaddjob();
      return <Redirect to='/viewjobs' />;
    };

    return (
      <Container className="pt-5">
        <Row className="justify-content-center text-center">
        <Col size = "12 lg-10">
        <RubberBand>
        <img width="80%" src="/imgs/icons/walking.svg" alt="hunt the deer"/>
        </RubberBand>
        </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h3 className="montserrat font-weight-bold mt-3">Track a New Job</h3>
            <h6>Found a job from somewhere else? Import it here and you'll be able to track your progress!</h6>
          </Col>
        </Row>
        <AddJobForm onSubmit={this.addjob} />

      </Container>
    );
  };
};

const mapStateToProps = (state,props) => {
  return { 
    addJob: state.addJob
  }
};

const mapActionsToProps = (dispatch,props) => ({
  addjob,
  resetaddjob
})

export default connect(mapStateToProps,mapActionsToProps())(AddJob);
