import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} API Exploration — Built by Chris Langille</p>
        <div className="footer-links">
          <a href="https://github.com/chrislangille" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#explore">Explore APIs</a>
          <a href="mailto:langillechris25@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
