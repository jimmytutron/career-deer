import React from 'react';

//Redux Form
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';
import { validate } from './validate';

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
  );



let SearchForm = ({ handleSubmit, pristine, submitting, errorMessage }) => {
  return (
    <Col size="12 col-md-12 lg-5">
        <h2 className="text-center mt-5 pt-4 montserrat font-weight-bold">Time to start the hunt!</h2>
        <h6 className="text-center">Let's hunt for some jobs! Add jobs to your progress tracker</h6>
      <form onSubmit={handleSubmit}>
          <Row>
            <Field className="px-2 text-input" name="keywords" component={renderTextField} type="text" label="What are you hunting for?"></Field>
          </Row>
          <Row>
            <Field className="px-2 text-input" name="location" component={renderTextField} type="text" label="Where shall we look?"></Field>
          </Row>
        <h6>{errorMessage}</h6>
        <Row className="justify-content-end">
        <button className="btn btn-info my-3" type="submit" disabled={pristine || submitting}>
          Search <i className="fas fa-bullseye"></i>
        </button>
        </Row>
      </form>
      </Col>
  );
};

SearchForm = reduxForm({
  form: 'search',
  validate
})(SearchForm);


export default SearchForm;

