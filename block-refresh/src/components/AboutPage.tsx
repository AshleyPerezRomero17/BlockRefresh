import React from "react";
import HeroSection from "./HeroSection";
import Mission from "./Mission";
import ImpactSection from "./ImpactSection";
import Partners from "./Partners";



interface AboutProps {}

const AboutPage: React.FC<AboutProps> = () => {
return (
<div className="about-us">
<HeroSection />
<Mission />
<ImpactSection />
<Partners />
</div>
);
};

export default AboutPage;

