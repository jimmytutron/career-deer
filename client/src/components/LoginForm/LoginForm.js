import React from 'react';
// Redux stuff
import { Field, reduxForm } from 'redux-form';
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

let LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <Field name="email" component={renderTextField} type="email" label="Email" />
      </div>

      <div>
        <Field name="password" component={renderTextField} type="password" label="Password" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
};


LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm(), from redux-form, behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default LoginForm;
