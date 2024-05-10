import React from 'react';
import './Header.css';

export const Header = () => {
  const handleOnSwap = () => {
    console.log('handleOnSwap logged!');
  };

  const handleWhitepaperClick = () => {
    alert('Whitepaper coming soon!');
  };

  const handleRoadmapClick = () => {
    alert('Roadmap coming soon!');
  };

  return (
    <div className="header">
      <div className="header-inner">
        <a className="header-whitepaper" onClick={handleWhitepaperClick}>WHITEPAPER</a>
        <a className="header-roadmap" onClick={handleRoadmapClick}>ROADMAP</a>
        <a href={'https://docs.crosscall.pro'} target="_blank" rel="noopener noreferrer">DOCS</a>
      </div>
    </div>
  );
};
