// src/Components/Footer.js

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Something Street, Something City, Something Pincode | Something Phone No.</p>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <p>&copy; 20xx by The ABC Hotel. Powered and secured by ABC Org</p>
      </div>
      <div className="footer-center">
        <p>Thanks for Visiting!</p>
      </div>
    </footer>
  );
}

export default Footer;
