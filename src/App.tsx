import React from "react";
import logo from "./crosscall-logo.svg";
import "./App.css";
import "./Background2.css";
import { Footer } from "./components/Footer/Footer";
import "./assets/fonts/Quicksand.ttf";

function App() {
  return (
    <div>
      <div className="Background">
        <div className="dark">
          <div className="darker">
            <div className="opacity2"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="landing-logo">Logo</div>
        <div className="landing-slogan">Company slogan</div>
        <div className="header">
          <div className="landing-header-whitepaperz">whitepaperz</div>
          <div className="landing-header-docs">docs</div>
        </div>

        <div>
          <div className="signup">
            <div className="landing-signup-input">Signup Input</div>
            <div className="landing-signup-text">Signup Text</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
