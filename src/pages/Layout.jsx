import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Layout.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo-link">
            API Exploration
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/weather" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Weather API
          </Link>
          <Link to="/explore-apis" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Explore APIs
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
