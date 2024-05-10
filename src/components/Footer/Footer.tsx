import React, { useEffect } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import { Swap } from '../Swap/Swap';

export const Footer = () => {
  const handleOnSwap = () => {
    console.log('handleOnSwap logged!');
  };

  return (
    <div className="footer">
      <div className="footer-copyright">Copyright</div>
      <div className="footer-socials">
        <div className="footer-socials-gitbook">Gitbook</div>
        <div className="footer-socials-github">Github</div>
        <div className="footer-socials-x">X</div>
      </div>
    </div>
  );
};
