import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Shaik Chandu Basha. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/chandu-basha-shaik-68718127a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/chandubasha" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="mailto:jamalabasha123@gmail.com"><FaEnvelope /></a>
    </div>
  </footer>
);

export default Footer;
