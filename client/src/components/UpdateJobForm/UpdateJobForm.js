import React from 'react';
// Redux stuff
import { Field, reduxForm, FieldArray, reset } from 'redux-form';
import { Col, Row } from '../Grid';
import { TextField } from 'redux-form-material-ui';
import { validate } from './validate';
import Paper from '@material-ui/core/Paper';
import './UpdateJobForm.css';


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
    fields
  }) => (
    <React.Fragment>
    <button className="btn btn-success" type="button" onClick={()=>fields.push()}>Add Note</button>
    <ul className="mt-3">
      {fields.map((note, index) => (
        <li key={index}>
        <Row className="justify-content-center">
        <Col size="2 md-2">
          <button title="Remove Note" className="btn btn-danger mt-4" onClick={() => fields.remove(index)}><i className="fas fa-trash"></i></button>
        </Col>
        <Col size="8 md-10">
          <Field className="text-input"
            floatingLabelText={`Note #${index + 1}`}
            floatingLabelFixed={true}
            name={note}
            label={`Note $${index + 1}`}
            multiLine={true}
            // sets the initial and maximum size of the text box
            rows={2}
            rowsMax={4}
            type='text'
            component={TextField}
          />
        </Col>
        </Row>
        </li>

      ))}
    </ul>
    </React.Fragment>
  )

let UpdateJobForm = ({ handleSubmit, pristine, submitting, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field className="text-input" name="title" component={renderTextField} type="text" label="Job Title" required></Field>
      </div>
      <div>
        <Field className="text-input" name="company_name" component={renderTextField} type="text" label="Company" required></Field>
      </div>
      <div>
        <Field className="text-input" name="location" component={renderTextField} type="text" label="Location"></Field>
      </div>
      <div>
        <Field className="text-input" name="url" component={renderTextField} type="text" label="Link URL"></Field>
      </div>
      <div>
        <Field className="text-input" name="post_date" component={renderTextField} type="date" label="Job Post Date" dateField></Field>
      </div>
      <div>
        <FieldArray className="text-input" name="note" component={renderNote} type="text" label="note" textArea></FieldArray>
      </div>
      <div>
        <h6>{errorMessage}</h6>
        <button className="btn btn-info" type="submit" disabled={submitting}>
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
