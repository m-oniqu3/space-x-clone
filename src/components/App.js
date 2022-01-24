import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import Background from "./Background";
import Content from "./Content";
import starlink from "../images/starlink.png";
import transporter from "../images/transporter.png";
import crs24 from "../images/CRS24.png";

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

      <Background style={{ backgroundImage: `url(${transporter})` }}>
        <div className="container">
          <Content
            subTitle="Recent Launch"
            title="Transporter-3 Mission"
            link="Re-watch"
          />
        </div>
      </Background>

      <Background style={{ backgroundImage: `url(${crs24})` }}>
        <div className="container">
          <Content
            subTitle="Recent Launch"
            title="CRS-24 Mission"
            link="Re-watch"
          />
        </div>
      </Background>
    </div>
  );
}

//<div style={{ backgroundImage: "url(/image.png)" }}>
export default App;
