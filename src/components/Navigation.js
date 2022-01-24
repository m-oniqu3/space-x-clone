import "./Navigation.css";
import React from "react";
import logo from "../images/spacexlogo.png";

function Navigation() {
  return (
    <div>
      <nav>
        <figure>
          <img src={logo} alt="space x logo" />
        </figure>
        <div className="menu">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
