import React from "react";

const Nav = ({ children, className, ...props }) => (
  <nav className={`navbar ${className}`} {...props}>
    {children}
  </nav>
);

export {Nav};
