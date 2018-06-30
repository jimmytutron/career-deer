import React from "react";

const Row = ({fluid, className="", children, ...props}) => (
  <div className={`row${fluid ? "-fluid" : ""} ${className}`} {...props}>
    {children}
  </div>
)

export {Row};
