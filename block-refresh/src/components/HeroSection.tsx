import React from "react";
import "../css/HeroSection.css";
interface Props {};
const HeroSection: React.FC<Props> = () => {
return (
<div className="hero-section-about">
<img src="2.png" alt="Hero Image" className="hero-img-about" />
<div className="hero-text-container-about">
<h1>Making a Difference</h1>
<p>Join us in creating a better world through our programs and initiatives</p>
</div>
</div>
);
};
export default HeroSection;