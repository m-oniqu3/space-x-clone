import styled from "./Navigation.module.css";
import React from "react";
import logo from "../images/spacexlogo.png";

function Navigation() {
  return (
    <div>
      <nav>
        <figure>
          <img src={logo} alt="space x logo" />
        </figure>

        <ul className={styled.navlinks}>
          <li>Falcon 9</li>
          <li>Falcon Heavy</li>
          <li>Dragon</li>
          <li>Starship</li>
          <li>Human Spaceflight</li>
          <li>Rideshare</li>
          <li>Shop</li>
        </ul>

        <div className={styled.menu}>
          <i className="fas fa-bars fa-lg"></i>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
