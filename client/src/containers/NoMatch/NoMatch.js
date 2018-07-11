import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import './NoMatch.css';
import Fade from 'react-reveal/Fade';

class NoMatch extends Component {

  render() {
    return (
      <React.Fragment>

        <Row className="justify-content-center footprints">
        <Col size="12 md-4">
        <Fade delay={1000}>
        <img width="40px" className="mt-5" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={1600}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={2000}>
        <img width="40px" className="mt-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={2600}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={3000}>
        <img width="40px" className="mt-3" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        </Col>
        </Row> 

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
