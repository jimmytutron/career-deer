import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

 


let SignUpForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Row className="justify-content-center">
      <Col size="12 md-12 lg-6">
        <Field className="text-input" name="firstName" component={renderTextField} type="text" label="First Name"></Field>
      </Col>
      <Col size="12 md-12 lg-6">
        <Field className="text-input" name="lastName" component={renderTextField} type="text" label="Last Name"></Field>
      </Col>
      </Row>
      <Row className="justify-content-center">
      <Col size="12 md-12">
        <Field className="text-input" name="email" component={renderTextField} type="email" label="Email"></Field>
      </Col>
      </Row>
      <Row className="justify-content-center">
      <Col size="12 md-12">
        <Field className="text-input" name="password" component={renderTextField} type="password" label="Password"></Field>
      </Col>
      </Row>
      <Row className="justify-content-end">
      <Col size="12">
      <h6>{errorMessage}</h6>
      </Col>
      </Row>
      <Row className="justify-content-end">
      <Col size="4 md-4 lg-4">
        <button className="btn btn-info" type="submit" disabled={pristine || submitting}>
          Sign Up
        </button> &nbsp;&nbsp;
        <a href='/auth/google' className="roboto login-btn btn btn-light">
        Login with <img className="ml-1" height="20px" src="/imgs/icons/google-logo.svg" alt="google logo"/>
        </a>
      </Col>
      </Row>

    </form>
  );
};

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('signup'))
})(SignUpForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default SignUpForm
