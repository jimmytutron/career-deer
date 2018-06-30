import React from "react";

const Card = ({className="", children, ...props}) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

export {Card};
