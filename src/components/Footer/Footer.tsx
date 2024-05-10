import React, { useEffect } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import github from '../../assets/svg/github-icon.svg';
// import telegram from '../../assets/svg/gitbook-icon.svg';
// import discord from '../../assets/svg/discord-logo.svg';
import xtwitter from '../../assets/svg/xtwitter-icon.svg';
import gitbook from '../../assets/svg/gitbook-icon.svg';

export const Footer = () => {
  const handleOnSwap = () => {
    console.log('handleOnSwap logged!');
  };

  return (
    <div className="footer">
      <div className="footer-copyright">© 2024 CrossCall Labs Inc.</div>
      <div className="footer-socials">
        <div className="footer-socials-inner">
          <a href={'github.com'} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github"/>
          </a>
          <a href={'github.com'} target="_blank" rel="noopener noreferrer">
            <img src={gitbook} alt="Gitbook"/>
          </a>
          <a href={'github.com'} target="_blank" rel="noopener noreferrer">
            <img src={xtwitter} alt="X"/>
          </a>
        </div>
      </div>
    </div>
  );
};
