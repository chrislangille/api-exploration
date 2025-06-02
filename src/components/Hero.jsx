import { Link } from "react-router-dom";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My API Exploration</h1>
        <p className="hero-subtitle">
          This is a simple React app where I test and explore different public APIs — from weather and quotes
          to images and AI.
        </p>
        <Link to="/explore-apis" className="hero-button">
          Explore APIs
        </Link>
      </div>
    </section>
  );
};

export default Hero;
