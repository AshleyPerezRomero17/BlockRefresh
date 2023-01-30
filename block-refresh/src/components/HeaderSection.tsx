import React from "react";
import "../css/HeaderSection.css";
interface Props {}
const HeaderSection: React.FC<Props> = () => {
return (
<div>
<div className="header-section">
<div className="left-section">
<h2>Our Mission</h2>
<p>To make a positive impact in the world through our actions and initiatives.</p>
</div>
<div className="right-section">
<div className="right-header">
<h3>
<a href="AboutPage.tsx">Programs</a>
</h3>
<p>Learn about the programs we offer to make a difference.</p>
</div>
<hr />
<div className="right-header">
<h3>
<a href="#projects">Projects</a>
</h3>
<p>Check out our current and past projects making an impact.</p>
</div>
<hr />
<div className="right-header">
<h3>
<a href="#partners">Partners</a>
</h3>
<p>See the organizations and companies we collaborate with.</p>
</div>
</div>
</div>
<hr />
</div>
);
};
export default HeaderSection;
