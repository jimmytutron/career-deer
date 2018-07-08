import React from 'react';

//Redux Form
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';

const validate = values => {
  const errors = {}
  if (!values.keywords) {
    errors.keywords = 'Please enter a field or skill'
  }
  if (!values.location) {
    errors.location = 'Please enter a location'
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



let SearchForm = ({ handleSubmit, pristine, reset, submitting, errorMessage }) => {
  return (
    <div className="justify-content-center">
      <Row className="">
        <h2 className="col-12 col-md-10 col-lg-10 text-center">Lets go hunting!</h2>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row className="">
          <Col size="12 md-12 lg-6">
            <Field name="keywords" component={renderTextField} type="text" label="What are you hunting for?"></Field>
          </Col>
          <Col size="12 md-12 lg-6">
            <Field name="location" component={renderTextField} type="text" label="Where shall we look?"></Field>
          </Col>
        </Row>
        <h6>{errorMessage}</h6>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

SearchForm = reduxForm({
  form: 'search',
  validate
})(SearchForm);


export default SearchForm;

