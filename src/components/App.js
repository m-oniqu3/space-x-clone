import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import Background from "./Background";
import Content from "./Content";
import starlink from "../images/starlink.png";

function App() {
  return (
    <div>
      <Background style={{ backgroundImage: `url(${starlink})` }}>
        <div className="container">
          <Navigation />
          <Content
            subTitle="Recent Launch"
            title="Starlink Mission"
            link="Re-watch"
          />
        </div>
      </Background>

      <Background>
        <div className="container">
          <Content />
        </div>
      </Background>
    </div>
  );
}

//<div style={{ backgroundImage: "url(/image.png)" }}>
export default App;
