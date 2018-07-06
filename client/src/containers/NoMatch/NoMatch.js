import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import './NoMatch.css';

class NoMatch extends Component {

  render() {
    return (
      <React.Fragment>
        <Container fluid className="nomatch-jumbotron">
          <Row>
            <Col className="ml-5 mt-4">
              <h1 className="display-4 font-weight-bold">404 - Page not found</h1>
              <h4 className="font-italic">Oh, deer! You've gone off the trail!</h4>
              
              <p className="mt-3">Maybe one of the links at the top of the page will help?</p>
            </Col>
          </Row>
        </Container>
        </React.Fragment>
    );
  }
}

export default NoMatch;
