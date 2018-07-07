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

const renderTextField = (
  {
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

const renderTextBox = (
  {
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

let AddJobForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} type="text" label="Job Title"></Field>
      </div>
      <div>
        <Field name="company_name" component={renderTextField} type="text" label="Company"></Field>
      </div>
      <div>
        <Field name="location" component={renderTextField} type="text" label="Location"></Field>
      </div>
      <div>
        <Field name="url" component={renderTextField} type="text" label="Link URL"></Field>
      </div>
      <div>
        <Field name="post_date" component={renderTextField} type="date" label="Job Post Date"></Field>
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

AddJobForm = reduxForm({
  // a unique name for the form
  form: 'addjob',
  validate,
  onSubmitSuccess: (result, dispatch) => dispatch(reset('addjob'))
})(AddJobForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default AddJobForm
