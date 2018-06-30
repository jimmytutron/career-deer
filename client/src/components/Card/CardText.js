import React from "react";

const CardText = ({className="", children, ...props}) => (
  <div className={`card-text ${className}`} {...props}>
    {children}
  </div>
);

export {CardText};
