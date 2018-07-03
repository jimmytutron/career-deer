import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './actions';

class ContactPage extends Component {

  submit = values => {
    this.props.login(values);
  }

  render() {
    return <LoginForm onSubmit={this.submit} />
  }

}

const mapStateToProps = (state, props) => {
  return {
    app: state.app,
    test: state.test
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(ContactPage);
// export default ContactPage;

