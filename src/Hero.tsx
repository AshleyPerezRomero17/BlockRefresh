import React from "react";
import { Navbar } from "./components/navbar";
import "./Hero.css";
interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="hero-section">
      <img src="logo.png" alt="Hero Image" className="hero-img" />
      <div className="hero-text">
        <h1>Welcome to our website</h1>
        <p>We are dedicated to making a difference in the world</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};
export default Hero;
