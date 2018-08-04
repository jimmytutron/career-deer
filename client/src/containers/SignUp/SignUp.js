import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Container, Col, Row } from '../../components/Grid';
import { googleSignUp } from '../../utils/API';

import { connect } from 'react-redux';
import { signup, resetSignUp, googleAuth } from './actions';

import Rotate from 'react-reveal/Rotate';

class SignUp extends Component {
  googleAuth = () => {
    this.props.googleAuth('test');
  }

  signup = values => {
    // This calls the signup action creator, passing the form values to it 
    this.props.signup(values);
  };

  componentWillUnmount() {
    this.props.resetSignUp();
    // console.log('ComponentWillMount: this.props.renderMaterial', this.props.renderMaterial);
    console.log('componentWillMoubnt: this.props.googleAuth', this.props.googleAuth);
  }

  render() {

    if (this.props.app.user) {
      return <Redirect to='/board' />;
    };


    return (
      <React.Fragment>
        <Container className="pt-5 pb-5">
          <Row className="justify-content-center">
            <Col size="12 md-6 lg-4">
              <Rotate>
                <img className="mt-4" src="/imgs/icons/lost.svg" alt="deer lost in woods" />
              </Rotate>
            </Col>
            <Col size="12 md-6 lg-4">
              <h1 className="montserrat mt-5 font-weight-bold">Let's help you find your way!</h1>
              <h3 className="montserrat mt-1">Make it through the wilderness~</h3>
              <h6 className="montserrat">(of job searching)</h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col />
            <Col size="12 md-8 lg-8" className="banana">
              <SignUpForm
               onSubmit={this.signup}
               errorMessage={renderError(this.props.signedUp, this.props.app)}
               googleAuth={this.googleAuth}
               
              />
            </Col>
            <Col />
          </Row>
        </Container>
        {/* <div>{this.props.renderMaterial}</div> */}
      </React.Fragment>
    );
  };
};

const renderError = (signedUpState, appState) => {
  if (!appState.user && signedUpState.error) {
    if (signedUpState.error.response)
      if (signedUpState.error.response.data) {
        if (signedUpState.error.response.data.name === "ValidationError")
          return "You must enter a first name, last name, and an email.";
        if (signedUpState.error.response.data.name === "MissingPasswordError")
          return "You must enter a password.";
        if (signedUpState.error.response.data.code === 11000)
          return "An account with that email already exists. Please choose another email.";
      };
  };
  return "";
};

// Only need SignUp to be aware of the sign up state.
const mapStateToProps = (state, props) => {
  return {
    signedUp: state.signedUp,
    app: state.app
    // renderMaterial: state.auth.renderMaterial
  };
};

const mapDispatchProps = (dispatch, props) => ({
  signup,
  resetSignUp,
  googleAuth
});

export default connect(mapStateToProps, mapDispatchProps())(SignUp);
