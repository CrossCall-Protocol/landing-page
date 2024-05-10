import React, { useEffect } from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import { Swap } from '../Swap/Swap';

export const Footer = () => {

  const handleOnSwap = () => {
    console.log('handleOnSwap logged!');
  };



  return (
    <div className="dashbaord-box">
      Footer
      <div className="footer">
            <div>Copyright</div>
            <div>
              <div>Gitbook</div>
              <div>Github</div>
              <div>Twitetr</div>
            </div>
          </div>
    </div>
  );
};
