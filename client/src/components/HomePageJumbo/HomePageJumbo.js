import React from "react";
import './HomePageJumbo.css';
import {Col, Row} from "../Grid";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Scrollchor from 'react-scrollchor';
import Button from '@material-ui/core/Button';


const HomePageJumbo = () => (
  <Fade duration={2000}>
  <Row id="top" className="justify-content-center home-jumbotron p-0">

  <Col size="12 md-6" className="pl-5 mt-5">
    <Zoom cascade>
    <h1 className="main-heading font-weight-bold montserrat text-left">Don't be a deer in headlights...</h1>
    </Zoom>
    <h4 className="sub-heading font-italic montserrat">Track down your next job with CareerDeer</h4>
    
    <p className="heading-lead roboto">We’ll turn you from the hunted into the hunter and help you track down the job of your dreams. The job hunt is a challenging and scary process. There’s a lot of names to keep track of and even more dates. We provide you with a single location to organize and schedule your progress. There's even job search functionality so you can look at job listings without leaving our site and get reminders when your interviews are coming up.
    </p>
    <Scrollchor 
    to="#sign-up">
    <Button variant="extendedFab" color="secondary">
      <span className="montserrat">Learn More</span>
    </Button>
    </Scrollchor>
  </Col>
  <Col size="12 md-4" >
  <Rotate top right duration={1700}>
  <img className="main-deer" src="/imgs/logo-white.svg" alt="career deer logo white"/>
  </Rotate>
  </Col>
  </Row>

  <Row className="justify-content-center home-jumbotron-small p-0">
  <Col size="12">
  <h1 className="montserrat font-weight-bold text-center mobile-heading">Don't be a deer in headlights...</h1>
  <h4 className="font-italic montserrat text-center">Track down your next job with CareerDeer</h4>
  </Col>
  <Col size="12" >
  <img className="main-deer" src="/imgs/logo-white.svg" alt="career deer logo white"/>
  </Col>
  </Row>
  <span id="about"></span>
  </Fade>
);

export {HomePageJumbo};
