import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Col, Row } from '../Grid';
import { validate } from './validate';

import Button from '@material-ui/core/Button';

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

const FormStyle = {
  background: '#fff',
  borderRadius: '15px',
  paddingLeft: '50px',
  paddingRight: '50px',
  boxShadow: '0px 0px 1px #5B5B5B'
};

let UpdatePWForm = ({ handleSubmit, pristine, submitting, errorMessage }) => {
  return (
    <Row className="justify-content-center text-center">
      <Col size="10">

        <form style={FormStyle} onSubmit={handleSubmit}>

          <Row>
          <h2 className="text-left">Enter New Password.</h2>
            <Field className="text-input" name="password" component={renderTextField} type="password" label="Please enter a new password." />
            <Field className="text-input" name="passwordRepeat" component={renderTextField} type="password" label="Please enter your new password again." />
          </Row>
          <h6>{errorMessage}</h6>
          <Button
            variant="contained"
            color="secondary"
            className = "btn btn-info my-3"
            type="submit"
            disabled={pristine || submitting}
          >
            Update Password</Button>
        </form>
       </Col>
     </Row>
  );
};

UpdatePWForm = reduxForm({
  form: 'updatePW',
  validate
})(UpdatePWForm);


export default UpdatePWForm;





