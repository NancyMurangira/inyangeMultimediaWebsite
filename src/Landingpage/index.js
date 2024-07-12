import React from 'react';
import './index.css';
import logo from './logo.png';
import headphones from './headphones.png';




function LandingPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} alt="SimbaNet Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-text">
          <h1>SimbaNet</h1>
          <p>Dive into captivating journey crafted by our talented team. Explore our website and learn more about my team.</p>
          <p className="enjoy">Enjoy !</p>
        </div>
        <div className="hero-image">
          <img src={headphones} alt="Headphones" />
        </div>
      </div>
    </div>
  );
}
export default LandingPage;