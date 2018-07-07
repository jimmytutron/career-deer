import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import TextField from 'material-ui/TextField';
import { googleSignIn } from '../../utils/API';

 
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

const googleAuth = () => {
  googleSignIn()
    .then(data => console.log(data.data));
}

let LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <React.Fragment>
      <form className="text-center" onSubmit={handleSubmit}>

        <div>
          <Field className="text-input" name="email" component={renderTextField} type="email" label="Email" />
        </div>

        <div>
          <Field className="text-input" name="password" component={renderTextField} type="password" label="Password" />
        </div>
        <div className="mt-3">
          <button className="roboto login-btn btn btn-info" type="submit" disabled={pristine || submitting}>
            Login <i className="fas fa-sign-in-alt"></i>
          </button> {" "}
        <button className="roboto login-btn btn btn-light" onClick={() => {googleAuth()}}>
        Login with {" "} <img height="20px" src="/imgs/icons/google-logo.svg" alt="google logo"/>
        </button>
        </div>
      </form>  

    </React.Fragment>
  )
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('login'))
})(LoginForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm(), from redux-form, behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default LoginForm;
