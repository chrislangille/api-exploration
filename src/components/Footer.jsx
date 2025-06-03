import { Link } from "react-router-dom";
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
          <Link to="/explore-apis">Explore APIs</Link>
          <a href="https://www.linkedin.com/in/chris-langille/">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
