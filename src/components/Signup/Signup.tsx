import React, { useState } from 'react';
import './Signup.css';
import { stringify } from 'querystring';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch(`https://crosscall-landing-api.vercel.app/api/sql?query=post&email=${email}`);

      if (response.ok) {
        const data = await response.json();
        if (data === 'Email saved successfully.') {
          setMessage('Thank you for submitting your email!');
        }
      } else {
        throw new Error(`Server responded with status ${response.status}`);
      }
    } catch (error: any) {
      // Error during fetch request
      setMessage(error.toString());
      alert(`Error: ${error}`);
    }
  };

  return (
    <div className="signup">
      <div className="signup-inner">
        <div className="signup-inner-title">Follow us to keep update-to-date on our newest breakthroughs!</div>
        <div className="signup-inner-input">
          <form onSubmit={handleSubmit} className="signup-inner-field">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            <div className="signup-inner-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>{message && <p>{message}</p>}</div>
        {/* <p>For inquiries contract us via crosscallprotocol@gmail.com</p> */}
        <div className="signup-inner-test"></div>
      </div>
    </div>
  );
};
