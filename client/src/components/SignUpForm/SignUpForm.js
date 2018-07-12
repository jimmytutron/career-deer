import React from 'react';
// Redux stuff
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';
import { validate } from './validate';
import Button from '@material-ui/core/Button';

const FormStyle = {
  background: '#fff',
  borderRadius: '15px',
  marginTop: '10px',
  padding: '10px',
  boxShadow: '0px 0px 1px #5B5B5B'
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
    <form style={FormStyle} onSubmit={handleSubmit}>
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
      <Col size="12 lg-6">
      </Col>
      <Col size="10 md-10 lg-6" className="text-right">
        <Button variant="contained" color="primary" className="btn btn-info" type="submit" disabled={pristine || submitting}>
          Sign Up
        </Button> &nbsp;&nbsp;
        <Button onClick={auth} className="roboto login-btn btn btn-light">
        Sign Up with&nbsp; <img className="ml-1" height="20px" src="/imgs/icons/google-logo.svg" alt="google logo"/>
        </Button>
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
