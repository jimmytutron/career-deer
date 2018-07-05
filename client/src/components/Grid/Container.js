import React from "react";

export const Container = ({fluid, className="", children, ...props}) => (
  <div className={`container${fluid ? "-fluid" : ""} ${className}`} {...props}>
    {children}
  </div>
);