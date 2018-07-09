import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { validate } from './validate';
// import { googleSignIn } from '../../utils/API';




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

let LoginForm = ({ handleSubmit, pristine, submitting, errorMessage }) => {
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div>
        <Field className="text-input" name="email" component={renderTextField} type="email" label="Email" />
      </div>
      <div>
        <Field className="text-input" name="password" component={renderTextField} type="password" label="Password" />
      </div>
      <div className="mt-3">
        <h6>{errorMessage}</h6>
        <button className="roboto login-btn btn btn-info" type="submit" disabled={pristine || submitting}>
          Login <i className="fas fa-sign-in-alt"></i>
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='/auth/google' className="roboto login-btn btn btn-light">
           Login with <img className="ml-1" height="20px" src="/imgs/icons/google-logo.svg" alt="google logo" />
          </a>
      </div>
    </form>
  )
};


LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate,
  // clears the form after submission
  onSubmitSuccess: (result, dispatch) => dispatch(reset('login'))
})(LoginForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm(), from redux-form, behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default LoginForm;
