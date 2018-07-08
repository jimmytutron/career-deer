import React from 'react';
// Redux stuff
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Please input your first name'
  }
  if (!values.lastName) {
    errors.lastName = 'Please input your last name'
  }
  if (!values.email) {
    errors.email = 'You must enter an email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!values.password) {
    errors.password = 'A password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Your password must be at least 6 characters long'
  }
  return errors
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error && <span>{error}</span>}
      {...input}
      {...custom}
    />
  )

let SignUpForm = ({ handleSubmit, pristine, reset, submitting, errorMessage, auth }) => {
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
      <Col size="10 md-10 lg-5">
        <button className="btn btn-info" type="submit" disabled={pristine || submitting}>
          Sign Up
        </button> &nbsp;&nbsp;
        <button onClick={auth} className="roboto login-btn btn btn-light">
        Login with <img className="ml-1" height="20px" src="/imgs/icons/google-logo.svg" alt="google logo"/>
        </button>
      </Col>
      </Row>

    </form>
  );
};

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  validate
  // We don't want the form to clear on submission because if there's an error, 
  // we want the user to be able to edit what they already entered
})(SignUpForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default SignUpForm
