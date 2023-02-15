import React from "react";
import "./Title.css";

function Title(props) {
  const { children, className } = props;

  return (
    <p className={`use-across-any-app-and-currency gotham-book-normal-black-24px ${className || ""}`}>{children}</p>
  );
}

export default Title;
