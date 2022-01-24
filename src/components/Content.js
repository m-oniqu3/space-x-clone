import "./Content.css";
import React from "react";

function Content(props) {
  return (
    <div className="content" style={props.style}>
      <small className="subTitle">{props.subTitle}</small>

      <div className="title">{props.title}</div>

      <a class="btn btn-swipe-left btn-swipe-left--black" href="/">
        {props.link}
      </a>
    </div>
  );
}

export default Content;
