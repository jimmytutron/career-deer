import React from "react";
import {Col, Row} from "../Grid";
import "./Footer.css";

const Footer = () => (
<Row className="justify-content-center footer p-0 mt-2">
  <Col size="12 col-md-10" className="pt-3">
  <p className="text-center font-italic footer-text">Made with <i className="fas fa-heart"></i> by Robert, Eric, Nick &amp; Jimmy. Find us on <a href="https://github.com/jimmytutron/career-deer"><i className="fab fa-github"></i> Github</a></p>
  </Col>
</Row>
);

export {Footer};
