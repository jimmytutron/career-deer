import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import './NoMatch.css';
import Fade from 'react-reveal/Fade';

const FOOTPRINT_DELAY = 800;

class NoMatch extends Component {

  render() {
    return (
      <React.Fragment>

        <Container fluid className="nomatch-jumbotron">
        <div className="ml-3">
        <Fade delay={FOOTPRINT_DELAY * 1}>
        <img width="40px" className="mt-5" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 2}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 3}>
        <img width="40px" className="mt-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 4}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 5}>
        <img width="40px" className="mt-3" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        </div>
          <Row>
            <Col className="ml-5 mt-4">
              <h1 className="display-4 font-weight-bold">404 - Page not found</h1>
              <h4 className="font-italic">Oh, deer! You've gone off the trail!</h4>
              
              <p className="mt-3">Maybe one of the links at the top of the page will help?</p>
            </Col>
          </Row>
        <div className="footprints">
        <Fade delay={FOOTPRINT_DELAY * 6}>
        <img width="40px" className="mt-5" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 7}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 8}>
        <img width="40px" className="mt-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 9}>
        <img width="40px" className="mb-4" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        <Fade delay={FOOTPRINT_DELAY * 10}>
        <img width="40px" className="mt-3" src="/imgs/icons/footprint.svg" alt="deer footprint" />
        </Fade>
        </div>
        </Container>
        </React.Fragment>
    );
  }
}

export default NoMatch;
