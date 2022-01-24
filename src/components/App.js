import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import Background from "./Background";
import Content from "./Content";
import starlink from "../images/starlink.png";
import transporter from "../images/transporter.png";
import crs24 from "../images/CRS24.png";
import postlaunch from "../images/post-launch.png";
import moon from "../images/moon.png";

function App() {
  return (
    <div>
      {/* First Section */}
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

      {/* Second Section */}
      <Background style={{ backgroundImage: `url(${transporter})` }}>
        <div className="container">
          <Content
            subTitle="Recent Launch"
            title="Transporter-3 Mission"
            link="Re-watch"
          />
        </div>
      </Background>

      {/* Third Section */}
      <Background style={{ backgroundImage: `url(${crs24})` }}>
        <div className="container">
          <Content
            subTitle="Recent Launch"
            title="CRS-24 Mission"
            link="Re-watch"
          />
        </div>
      </Background>

      {/* Fourth Section */}
      <Background style={{ backgroundImage: `url(${postlaunch})` }}>
        <div className="container">
          <Content
            subTitle="Recent Launch"
            title="Imaging X-ray polarimetry explorer (ixpe) mission"
            link="Re-watch"
          />
        </div>
      </Background>

      {/* Fifth Section */}
      <Background style={{ backgroundImage: `url(${moon})` }}>
        <div className="container">
          <Content
            title="Starship to land nasa astronauts on the moon"
            link="learn more"
          />
        </div>
      </Background>
    </div>
  );
}

export default App;
