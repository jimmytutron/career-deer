import React from 'react';
import {Container, Col, Row} from '../../components/Grid'

// Redux stuff
import { Field, reduxForm } from 'redux-form';

let SignUpForm = ({submit}) => {

  return (
    <form onSubmit={submit}>
      <Container>
        <Row>
          <Col size="12 md-6">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" component="input" type="text" />
            </div>
          </Col>
          <Col size="12 md-6">
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" component="input" type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="email" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" component="input" type="password" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <button type="submit">Sign Up</button>
          </Col>
        </Row>

      </Container>
    </form>
  )
};


SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup'
})(SignUpForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default SignUpForm
