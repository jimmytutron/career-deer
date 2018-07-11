import React, { Component } from 'react';
import { Col, Container, Row } from '../../components/Grid';
import './NoMatch.css';
import Fade from 'react-reveal/Fade';

const FOOTPRINT_DELAY = 800;


class NoMatch extends Component {

  messageDisplay() {
    if (window.location.pathname === "/unauthorized") {
      return {
        title: 'Unauthorized',
        message: "You've gone off the trail... Please Login or Sign Up"}
    }
    else {
      return {
        title: '404 Page Not Found',
        message: "Oh, deer... Looks like you've made a wrong turn!"
      }
    }
  }

  render() {
    const message = this.messageDisplay();
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
              <h1 className="display-4 font-weight-bold">{message.title}</h1>
              <h4 className="font-italic">{message.message}</h4>
              
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
