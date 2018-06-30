import React from "react";

const CardTitle = ({className="", children, ...props}) => (
  <div className={`card-title ${className}`} {...props}>
    {children}
  </div>
);

export {CardTitle};
