import React from "react";
import "./index.scss";

function Button({ onclick, className, children }) {
  return <button className={`btn ${className}`} onClick={onclick}>{children}</button>;
}

export default Button;
