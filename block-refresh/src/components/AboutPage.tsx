import React from "react";
import HeroSection from "./HeroSection";
import Mission from "./Mission";
import ImpactSection from "./ImpactSection";
import Partners from "./Partners";



interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
return (
<div className="about-us">
<HeroSection />
<Mission />
<ImpactSection />
<Partners />
</div>
);
};

export default Hero;