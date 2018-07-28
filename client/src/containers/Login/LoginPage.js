import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { login, resetLoginState } from './actions';
import  { googleSignUp } from '../../utils/API';
import './Login.css';

import Bounce from 'react-reveal/Bounce';

class LoginPage extends Component {
  login = values => {
    // This calls the login action creator, passing the form values to it
    this.props.login(values);
  };

  // googleLogin = () => {
  
  //   googleSignUp()
  // }

  reset() {
    this.props.resetLoginState();
  };

  componentWillUnmount() {
    this.reset();
  }

  render() {

    if (this.props.app.user && !this.props.loggedIn.error) {

      return <Redirect to='/board' />
    };

    return (
      <React.Fragment>
        <Container className="pt-5 pb-5">
          <Row className="justify-content-center">
            <Col size="12 md-8">
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col size="12 md-6 lg-5">
              <Bounce top duration={2000}>
                <a href="/auth/google">
                  <img className="img-fluid" src="/imgs/icons/studying.svg" alt="empty desk" />
                </a>
              </Bounce>
            </Col>
            <Col size="12 md-6 lg-6" className="log-in">
              <h1 className="text-center mt-5 montserrat font-weight-bold">Welcome Back!</h1>
              <h2 className="text-center mt-2 montserrat">Let's get you on track</h2>
              <LoginForm onSubmit={this.login} errorMessage={renderError(this.props.loggedIn, this.props.app)} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  };
};

const renderError = (loggedInState, appState) => {
  if (!appState.user && loggedInState.error)
    return "Incorrect email or password.";
  else
    return "";
};

// LoginPage needs to be aware of the signedUp state
const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn,
    app: state.app
  };
};

const mapDispatchProps = (dispatch, props) => ({
  login,
  resetLoginState
});

export default connect(mapStateToProps, mapDispatchToProps())(LoginPage);
