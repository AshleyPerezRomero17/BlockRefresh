import React from "react";
import "../css/Partners.css";
const Partners: React.FC = () => {
return (
<div className="our-partners-section">
<div className="separation-line-section">
<hr />
</div>
<div className="left-section">
<h2>Our Partners</h2>
<p>We have a strong network of partners that support our mission and help us make a difference in the world.</p>
<button className="partner-button">Learn More</button>
</div>
<div className="right-section">
<div className="partner-section">
<img src="partner1.jpg" alt="Partner 1" className="partner-img" />
<img src="partner2.jpg" alt="Partner 2" className="partner-img" />
<img src="partner3.jpg" alt="Partner 3" className="partner-img" />
</div>
<div className="partner-section">
<img src="partner4.jpg" alt="Partner 4" className="partner-img" />
<img src="partner5.jpg" alt="Partner 5" className="partner-img" />
<img src="partner6.jpg" alt="Partner 6" className="partner-img" />
</div>
</div>
</div>
);
};
export default Partners;