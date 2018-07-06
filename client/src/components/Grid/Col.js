import React from "react";

const Col = ({size="", className="", children, ...props}) => (
  <div className={`${(size ? size.split(" ").map(size => "col-" + size).join(" ") : "col")} ${className}`} {...props}>
    {children}
  </div>
);

export {Col};
