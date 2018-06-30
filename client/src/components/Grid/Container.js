import React from "react";

const Container = ({fluid, className="", children, ...props}) => (
  <div className={`container${fluid ? "-fluid" : ""} ${className}`} {...props}>
    {children}
  </div>
);

export {Container};
