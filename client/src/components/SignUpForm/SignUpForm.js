import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

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

let SignUpForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderTextField} type="text" label="First Name"></Field>
      </div>
      <div>
        <Field name="lastName" component={renderTextField} type="text" label="Last Name"></Field>
      </div>
      <div>
        <Field name="email" component={renderTextField} type="email" label="Email"></Field>
      </div>
      <div>
        <Field name="password" component={renderTextField} type="password" label="Password"></Field>
      </div>
      <div>
        <h6>{errorMessage}</h6>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
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
