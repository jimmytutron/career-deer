import React from "react";

const Col = ({size, className="", children, ...props}) => {
  <div className={`${size.split(" ").map(size => "col-" + size).join(" ")} ${className}`} {...props}>
    {children}
  </div>
}

export {Col};
