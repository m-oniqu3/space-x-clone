import styled from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <div className={styled.footer}>
      <section>
        <p>Spacex &copy; 2022</p>
        <ul>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Flickr</li>
          <li>Linkedin</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
