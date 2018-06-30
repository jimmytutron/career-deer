import React from "react";

const CardBody = ({className="", children, ...props}) => (
  <div className={`card-body ${className}`} {...props}>
    {children}
  </div>
);

export {CardBody};
