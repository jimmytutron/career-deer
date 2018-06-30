import React from "react";

const CardSubtitle = ({className="", children, ...props}) => (
  <div className={`card-subtitle ${className}`} {...props}>
    {children}
  </div>
);

export {CardSubtitle};
