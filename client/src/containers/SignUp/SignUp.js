import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from './actions';

class SignUp extends Component {
  signup = values => {
    // This calls the signup action creator, passing the form values to it
    this.props.signup(values)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6" className="banana">
            <SignUpForm onSubmit={this.signup} />
          </Col>
          <Col />
        </Row>
      </Container>
    )
  }
};

// Only need SignUp to be aware of the sign up state.
const mapStateToProps = (state,props) => {
  return { 
    signedUp: state.signedUp
  }
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    signup
  }, dispatch);
}

export default connect(mapStateToProps,mapActionsToProps)(SignUp);
