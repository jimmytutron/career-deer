import React from 'react';
// Redux stuff
import { Field, reduxForm } from 'redux-form';

let LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
};


LoginForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(LoginForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default LoginForm;
