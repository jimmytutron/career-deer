import React from "react";
import "./nav.css";

const Nav = ({className="", children, ...props}) => (

<nav className={`navbar sticky-top navbar-expand-lg navbar-light bg-light ${className}`} {...props}>
  <a className="navbar-brand" href="#"><img className="logo" src="imgs/logo-horizontal.svg"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto w-100 justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Another Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/login">Sign Up</a>
          <a className="dropdown-item" href="/login">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="login">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

);


export {Nav};
