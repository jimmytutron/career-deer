import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

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

let SignUpForm = ({ handleSubmit, pristine, reset, submitting }) => {
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
  onSubmitSuccess: (result, dispatch) => dispatch(reset('signup'))
})(SignUpForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default SignUpForm
