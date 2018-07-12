import React from 'react';
// Redux stuff
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { validate, warn } from './validate';
import { Col, Row } from '../Grid';
import Button from '@material-ui/core/Button';



//styling for warning messages
const styles = {
  warningStyle: {
    color: 'rgb(255,204,0)',
  }
};

const FormStyle = {
  background: '#fff',
  borderRadius: '15px',
  boxShadow: '0px 0px 1px #5B5B5B'
}

const renderTextField = (
  {
    input,
    label,
    required,
    dateField,
    textArea,
    meta: { touched, error, warning },
    ...custom
  }) => (
    <TextField
      // don't show the hint text when it's a date because the default date always shows
      hintText={!dateField && !textArea && label}
      // add the asterisk to the end of the label if it's a required field
      floatingLabelText={label + (required ? '*' : '')}
      // show the label above the date always because we're not showing the hint text
      floatingLabelFixed={!!dateField}
      // defines the error/warning text
      errorText={touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
      // changes the color of the text to yellow from red when it's a warning and not an error
      errorStyle={(warning && !error) ? styles.warningStyle : {}}
      // determines whether it's going to be a text box
      multiLine={!!textArea}
      // sets the initial and maximum size of the text box
      rows={textArea ? 2 : 1}
      rowsMax={textArea ? 4 : 1}
      {...input}
      {...custom}
    />
  );

let AddJobForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <form style={FormStyle} onSubmit={handleSubmit}>
    <Row className="justify-content-center">
      <Col size="12 md-12 lg-5">
        <Field className="text-input" name="title" component={renderTextField} type="text" label="Job Title" required></Field>
      </Col>
      <Col size="12 md-12 lg-5">
        <Field className="text-input" name="company_name" component={renderTextField} type="text" label="Company" required></Field>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col size="12 md-12 lg-5">
        <Field className="text-input" name="url" component={renderTextField} type="text" label="Link URL"></Field>
      </Col>
      <Col size="12 md-12 lg-5">
        <Field className="text-input" name="location" component={renderTextField} type="text" label="Location"></Field>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col size="12 md-12 lg-5">
        <Field className="text-input" name="post_date" component={renderTextField} type="date" label="Job Post Date" dateField></Field>
      </Col>
      <Col size="12 md-12 lg-5">
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col size="12 md-12 lg-10">
        <Field className="text-input" name="note" component={renderTextField} type="text" label="note" textArea></Field>
      </Col>
    </Row>
    <Row className="justify-content-center text-right">
    <Col size="12 lg-5">
    </Col>
      <Col size="12 md-12 lg-5">
        <h6>{errorMessage}</h6>
        <Button variant="contained" color="primary" className="btn btn-info my-1" type="submit" disabled={pristine || submitting}>
          Track It!
        </Button>
        <p className="text-right">* indicates a required field.</p>
      </Col>
    </Row>
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
export default AddJobForm;
