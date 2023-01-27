import React from "react";
interface Props {};
const HeroSection: React.FC<Props> = () => {
return (
<div className="hero-section">
<img src="hero-image.jpg" alt="Hero Image" className="hero-img" />
<div className="hero-text-container">
<h1>Making a Difference</h1>
<p>Join us in creating a better world through our programs and initiatives</p>
<button className="hero-button">
<a href="#about-us">Learn More</a>
</button>
</div>
</div>
);
};
export default HeroSection;