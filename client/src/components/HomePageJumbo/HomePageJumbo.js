import React from "react";
import './HomePageJumbo.css';
import {Col, Row} from "../Grid";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

const HomePageJumbo = () => (
  <Fade duration={2000}>
  <Row className="justify-content-center home-jumbotron p-0">

  <Col size="12 md-6" className="pl-5">
    <Zoom cascade>
    <h1 className="display-4 font-weight-bold">Don't be a deer in headlights...</h1>
    </Zoom>
    <h4 className="font-italic">Track down your next job with CareerDeer</h4>
    
    <p>We’ll turn you from the hunted into the hunter and help you track down the job of your dreams. The job hunt is a challenging and scary process. There’s a lot of names to keep track of and even more dates. We provide you with a single location to organize and schedule your progress. There's even job search functionality so you can look at job listings without leaving our site and get reminders when your interviews are coming up.
    </p>

    <p className="lead">
      <Link className="btn btn-primary btn-lg" to="/" role="button">Learn More</Link>
    </p>
  </Col>
  <Col size="12 md-4" className="m-0">
  </Col>
  </Row>
  </Fade>
);

export {HomePageJumbo};
