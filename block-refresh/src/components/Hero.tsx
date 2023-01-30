import React from "react";
import "../css/Hero.css";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
return (
<div className="hero-section-home">
<img src="hero-img.png" alt="Hero Image" className="hero-img-home" />
<div className="hero-text-home">
<h1>Welcome to our website</h1>
<p>We are dedicated to making a difference in the world</p>
<a href="">
<button>Learn More</button>
</a>
</div>
</div>
);
};

export default Hero;