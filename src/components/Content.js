import styled from "./Content.module.css";
import React from "react";

function Content(props) {
  return (
    <div className={styled.content} style={props.style}>
      <small className={styled.subTitle}>{props.subTitle}</small>

      <div className={styled.title}>{props.title}</div>

      <a class="btn btn-swipe-left btn-swipe-left--black" href="/">
        {props.link}
      </a>
    </div>
  );
}

export default Content;
