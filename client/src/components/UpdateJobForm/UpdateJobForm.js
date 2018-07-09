import React from 'react';
// Redux stuff
import { Field, reduxForm, FieldArray, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { validate } from './validate'

const renderTextField = (
  {
    input,
    label,
    required,
    dateField,
    textArea,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      // don't show the hint text when it's a date because the default date always shows
      hintText={!dateField && label}
      // add the asterisk to the end of the label if it's a required field
      floatingLabelText={label + (required ? '*' : '')}
      // show the label above the date always because we're not showing the hint text
      floatingLabelFixed={!!dateField}
      // defines the error text
      errorText={touched && error && <span>{error}</span>}

      {...input}
      {...custom}
    />
  );

const renderNote = (
  {
    fields, 
    meta,
    ... custom
  }) => (
    <ul>
      <li>
        <button type="button" onClick={()=>fields.push("")}>Add Node</button>
      </li>
      {fields.map((note, index) => (
        <li key={index}>
          <button type="button" title="Remove Note" onClick={() => fields.remove(index)} />
          <h4>Note #{index + 1}</h4>
          <TextField
            floatingLabelText={`Note #${index + 1}`}
            floatingLabelFixed={true}
            multiLine={true}
            // sets the initial and maximum size of the text box
            rows={2}
            rowsMax={4}
            {...custom}
          />
        </li>
      ))}
    </ul>
  )

let UpdateJobForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} type="text" label="Job Title" value="test" required></Field>
      </div>
      <div>
        <Field name="company_name" component={renderTextField} type="text" label="Company" value="yes" required></Field>
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
        <FieldArray name="note" component={renderNote} type="text" label="note" value="hello" textArea></FieldArray>
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

UpdateJobForm = reduxForm({
  // a unique name for the form
  form: 'addjob',
  validate,
  onSubmitSuccess: (result, dispatch) => dispatch(reset('addjob'))
})(UpdateJobForm);

// Inside this file, we wrapped our component inside the imported 'reduxForm' function
// We can think of reduxForm() from redux-form behaving similar to connect() from react-redux in
// terms of connecting a component to communicate with the store 
export default UpdateJobForm;