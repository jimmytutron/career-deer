import React from "react";

const Jumbotron = ({ children, className, ...props }) => (
  <div className={`jumbotron ${className}`} {...props}>
    {children}
  </div>
);

export {Jumbotron};
