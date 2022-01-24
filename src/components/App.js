import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import Background from "./Background";
import Content from "./Content";

function App() {
  return (
    <div>
      <Background>
        <div className="container">
          <Navigation />
          <Content />
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
