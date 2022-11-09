import React from "react";
import "./index.scss";

function Button({ onclick, className, children }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export default Button;
