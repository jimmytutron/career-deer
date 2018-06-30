import React from "react";

const Badge = ({color, className="", children, ...props}) => (
  <span type="badge" className={`badge ${color ? `badge-${color}`: ""} ${className}`} {...props}>
    {children}
  </span>
);

export {Badge};
