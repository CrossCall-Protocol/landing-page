import React from 'react';
import logo from './crosscall-logo.svg';
import './App.css';
import './Background2.css';
import { Footer } from './components/Footer/Footer';

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
        <div>Company slogan</div>
        <div>
          <div>whitepaper</div>
          <div>docs</div>
        </div>

        <div>
          <div>
            <div>Signup Input</div>
            <div>Signup Text</div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
