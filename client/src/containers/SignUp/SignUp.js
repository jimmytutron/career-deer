import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {Container, Col, Row} from '../../components/Grid'

// import { connect } from 'react-redux';

class SignUp extends Component {
  submit = user => {
    // print the user info to the console
    console.log(user)
  }
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6" className="banana">
            <SignUpForm onSubmit={this.submit} />
          </Col>
          <Col />
        </Row>
      </Container>
    )
  }
}

export default SignUp;