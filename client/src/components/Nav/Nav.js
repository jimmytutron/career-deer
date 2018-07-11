import React from "react";
import "./Nav.css";
import Scrollchor from 'react-scrollchor';

const Nav = ({className="", children, ...props}) => (

<nav className={`navbar sticky-top navbar-expand-lg navbar-light ${className}`} {...props}>
  <a className="navbar-brand" href="/"><img className="logo" src="/imgs/logo-horizontal.svg" alt="Career Deer"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto w-100 justify-content-end">
      <li className="nav-item">
        <Scrollchor
          to="#top"
          className="nav-link">
          Home
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor
         to="#about"
          className="nav-link">
          About
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#foreal"
          className="nav-link">
         Learn More
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#sign-up"
          className="nav-link">
          Join Now
        </Scrollchor>
      </li>
      <li className="nav-item">
        <a
          href="/login"
          className="nav-link">
          Login
        </a>
      </li>
    </ul>
  </div>
</nav>

);


export {Nav};
