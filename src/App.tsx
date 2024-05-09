import React from 'react';
import logo from './crosscall-logo.svg';
import './App.css';

// Import the image URL
const backgroundImageUrl = 'https://fauux.neocities.org/bg/bgN6.gif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>Logo</div>
      <div>Company slogan</div>
      <div>whitepaper</div>
      <div>docs</div>
      <div>
        <div>Signup Box</div>
        <div>SIgnup Test</div>
        <div>
          <div>Gitbook</div>
          <div>Twitetr</div>
        </div>
      </div>
    </div>
  );
}

export default App;
