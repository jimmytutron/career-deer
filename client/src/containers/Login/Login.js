import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import { connect } from 'react-redux';
import { mapActionsToProps } from '../../actions';

class ContactPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <LoginForm onSubmit={this.submit} />
  }
}

const {  } = mapActionsToProps();

export default ContactPage;
