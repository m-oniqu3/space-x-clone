import "./Background.css";
import React from "react";

function Background(props) {
  return <div className="background">{props.children}</div>;
}

export default Background;
