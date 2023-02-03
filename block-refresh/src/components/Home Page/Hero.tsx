import React from "react";
import "./css/Hero.css";
import { Link } from "react-router-dom";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero-section-home">
      <img src="hero-img.png" alt="Hero Banner" className="hero-img-home" />
      <div className="hero-text-home">
        <h1 className="font-extrabold">Welcome to our website</h1>
        <p className="font-medium">We are dedicated to making a difference in the world</p>
        <Link to="/AboutPage">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
