import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, Col, Row } from '../../components/Grid';
 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './actions';

class LoginPage extends Component {
  login = values => {
    // This calls the login action creator, passing the form values to it
    this.props.login(values);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6" className="log-in">
            <LoginForm onSubmit={this.login} />
          </Col>
        </Row>
      </Container>
    )
  }
};

// LoginPage needs to be aware of the signedUp state, since it will be used for
// auto logins after signing up for an account.
const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn,
    signedUp: state.signedUp
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
