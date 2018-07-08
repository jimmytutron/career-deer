import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please input the job title'
  }
  if (!values.company_name) {
    errors.company_name = 'Please specify the company the job is for'
  }
  return errors;
}

const warn = values => {
  const warnings = {};
  if (!values.location) {
    warnings.location = 'You have not entered a location for the job posting'
  }
  if (!values.url) {
    warnings.url = 'You have not entered a url link for this job'
  }
  if (!values.post_date) {
    warnings.post_date = 'The posting date will default to the current day unless specified'
  }
  return warnings;
}

//styling for warning messages
const styles = {
  warningStyle: {
    color: 'rgb(255,204,0)',
  }
}

const renderTextField = (
  {
    input,
    label,
    required,
    dateField,
    meta: { touched, error, warning },
    ...custom
  }) => (
    <TextField
      hintText={!dateField && label}
      floatingLabelText={label + (required ? '*' : '')}
      floatingLabelFixed={!!dateField}
      errorText={touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      errorStyle={warning ? styles.warningStyle : {}}
      {...input}
      {...custom}
    />
  )

let AddJobForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} type="text" label="Job Title" required></Field>
      </div>
      <div>
        <Field name="company_name" component={renderTextField} type="text" label="Company" required></Field>
      </div>
      <div>
        <Field name="location" component={renderTextField} type="text" label="Location"></Field>
      </div>
      <div>
        <Field name="url" component={renderTextField} type="text" label="Link URL"></Field>
      </div>
      <div>
        <Field name="post_date" component={renderTextField} type="date" label="Job Post Date" dateField></Field>
      </div>
      <div>
        <h6>{errorMessage}</h6>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <p>* indicates a required field.</p>
      </div>
    </form>
  );
};

AddJobForm = reduxForm({
  // a unique name for the form
  form: 'addjob',
  validate,
  warn,
  onSubmitSuccess: (result, dispatch) => dispatch(reset('addjob'))
})(AddJobForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default AddJobForm
