import React from "react";
import './HomePageJumbo.css';
import {Col, Row} from "../Grid";

const HomePageJumbo = () => (
  <Row className="justify-content-center home-jumbotron p-0">
  <Col size="12 md-7" className="pl-5 pt-5">
    <h1 className="display-3 font-weight-bold">Don't be a deer in headlights...</h1>
    <p className="lead">Track down your next job with CareerDeer</p>
    <p>pew pew pew. lorem ipsum deer bucks tracks antlers rudolph the red nose reindeer had a very shiny nose.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </Col>
  <Col size="12 md-5" className="m-0">
  </Col>
  </Row>
);

export {HomePageJumbo};
