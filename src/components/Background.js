import "./Background.css";
import React from "react";

function Background(props) {
  return (
    <div className="background" style={props.style}>
      {props.children}
    </div>
  );
}

export default Background;
