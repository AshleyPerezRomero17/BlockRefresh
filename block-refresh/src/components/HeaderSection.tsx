import React from "react";
import "../css/HeaderSection.css";
interface Props {}
const HeaderSection: React.FC<Props> = () => {
return (
<div>
<div className="header-section">
<div className="left-section-hs">
<h2 className="font-extrabold">Our Mission</h2>
<p>Our mission is to enhance the quality of life in our neighborhoods by promoting environmental sustainability through the preservation, creation, and restoration of open spaces, parks, and community gardens. We strive to create vibrant and healthy communities that foster a connection to nature and provide opportunities for recreation and community building."</p>
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
