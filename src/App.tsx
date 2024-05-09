import React from 'react';
import logo from './crosscall-logo.svg';
import './App.css';
import './Background2.css';

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
        <div>whitepaper</div>
        <div>docs</div>
        <div>
          <div>Signup Box</div>
          <div>Signup Test</div>
          <div>
            <div>Gitbook</div>
            <div>Github</div>
            <div>Twitetr</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
