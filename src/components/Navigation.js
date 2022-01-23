import "./Navigation.css";
import React from "react";

function Navigation() {
  return (
    <div>
      <nav>
        <figure>
          <img src="/images/spacexlogo.png" alt="space x logo" />
        </figure>
        <div className="menu">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
