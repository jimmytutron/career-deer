import React from "react";

const Button = ({color, className="", children, ...props}) => (
  <button type="button" className={`btn ${color ? `btn-${color}`: ""} ${className}`} {...props}>
    {children}
  </button>
);

export {Button};
