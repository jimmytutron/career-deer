import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';

const renderHomeNav = () => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto w-100 justify-content-end">
      <li className="nav-item">
        <Scrollchor
          to="#top"
          className="nav-link active">
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
)

const renderDefaultNav = () => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto w-100 justify-content-end">
      <li className="nav-item">
        <Link 
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup"
          className={
            window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
          }>
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login"
          className={
            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
          }>
          Login
        </Link>
      </li>
    </ul>
  </div>
)

const Nav = ({className="", children, ...props}) => (

<nav className={`navbar sticky-top navbar-expand-lg navbar-light ${className}`} {...props}>
  <a className="navbar-brand" href="/"><img className="logo" src="/imgs/logo-horizontal.svg" alt="Career Deer"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

 {window.location.pathname === "/"
  ? renderHomeNav()
  : renderDefaultNav() }
</nav>

);


export {Nav};
