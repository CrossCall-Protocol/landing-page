import React from "react";
import logo from "./crosscall-logo.svg";
import "./App.css";
import "./Background2.css";
import { Footer } from "./components/Footer/Footer";
import "./assets/fonts/Quicksand.ttf";
import { Header } from "./components/Header/Header";

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
        <Header/>
        <img src={logo} className="landing-logo" alt="logo" />
        <div className="landing-slogan">Company slogan</div>

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
