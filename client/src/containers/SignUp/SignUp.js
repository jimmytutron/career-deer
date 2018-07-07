import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from './actions';

class SignUp extends Component {
  signup = values => {
    // This calls the signup action creator, passing the form values to it 
   this.props.signup(values);
  }
  render() {

    if (this.props.signedUp.status) {
      return <Redirect to='/' />
    }

    return (
      <Container>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6" className="banana">
            <SignUpForm onSubmit={this.signup} errorMessage={renderError(this.props.signedUp)}/>
          </Col>
          <Col />
        </Row>
      </Container>
    )
  }
};

const renderError = (signedUp) => {
  if (!signedUp.status && signedUp.error) {
    if (signedUp.error.response)
      if (signedUp.error.response.data){
        if (signedUp.error.response.data.name === "ValidationError")
          return "You must enter a first name, last name, and an email.";
        if (signedUp.error.response.data.name === "MissingPasswordError")
          return "You must enter a password.";
        if (signedUp.error.response.data.code === 11000)
          return "An account with that email already exists. Please choose another email.";
      };
  }
  return "";
}

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
