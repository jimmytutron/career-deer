import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
const  { DOM: { input, select, textarea } } = React

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
        <Field name="post_date" component={renderTextField} type="date" label="post_date"></Field>
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
  onSubmitSuccess: (result, dispatch) => dispatch(reset('addjob'))
})(AddJobForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default AddJobForm
