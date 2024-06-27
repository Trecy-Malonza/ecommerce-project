import React from 'react';
import './HeroSection.css'; 
import heroImage from '../Images/base_hero.png'; 

const HeroSection = () => (
  <div className="hero-wrapper">
    <div className="hero-text">
      <h1 className="title">Shopping And Department Store.</h1>
      <p className="subtitle">
        Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
      </p>
      <button className="button">Learn More</button>
    </div>
    <img src={heroImage} alt="Hero" className="hero-image" />
  </div>
);

export default HeroSection;
