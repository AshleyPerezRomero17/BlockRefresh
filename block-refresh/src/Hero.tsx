import React from "react";
import Navbar from "./components/navbar";
import "./Hero.css";
interface HeroProps {
}
const Hero: React.FC<HeroProps> = () => {
return (
<div className="hero-section">
<img src="hero-image.jpg" alt="Hero Image" className="hero-img" />
<Navbar />
<div className="hero-text">
<h1>Welcome to our website</h1>
<p>We are dedicated to making a difference in the world</p>
<button>Learn More</button>
</div>
</div>
);
};
export default Hero;