import React from "react";
import './HomePageJumbo.css';
import {Col, Row} from "../Grid";

const HomePageJumbo = () => (
  <Row className="justify-content-center home-jumbotron p-0">
  <Col size="12 md-6" className="pl-5">
    <h1 className="display-4 font-weight-bold">Don't be a deer in headlights...</h1>
    <h4 className="font-italic">Track down your next job with CareerDeer</h4>
    
    <p>We’ll turn you from the hunted into the hunter and help you track down the job of your dreams. The job hunt is a challenging and scary process. There’s a lot of names to keep track of and even more dates. We provide you with a single location to organize and schedule your progress. There's even job search functionality so you can look at job listings without leaving our site and get reminders when your interviews are coming up.
    </p>

    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
    </p>
  </Col>
  <Col size="12 md-4" className="m-0">
  </Col>
  </Row>
);

export {HomePageJumbo};
