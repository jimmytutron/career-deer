import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, Col, Row } from '../../components/Grid';
 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './actions';

class LoginPage extends Component {
  login = values => {
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

const mapStateToProps = (state, props) => {
  return {
    app: state.app,
    test: state.test,
    loggedIn: state.loggedIn
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
