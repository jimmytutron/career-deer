import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from './actions';

class SignUp extends Component {
  signup = values => {
    // print the user info to the console
    console.log(this.props,'=====Props');
    console.log(values,'=====User Values');
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

const mapStateToProps = (state,props) => {
  return { 
    loggedIn: state.loggedIn,
    signedUp: state.signedUp
  }
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    signup
  }, dispatch);
}

export default connect(mapStateToProps,mapActionsToProps)(SignUp);
