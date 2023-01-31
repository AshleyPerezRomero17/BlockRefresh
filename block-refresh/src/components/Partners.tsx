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
<img src="p1.png" alt="Partner 1" className="partner-img" />
<img src="p2.png" alt="Partner 2" className="partner-img" />
<img src="p3.png" alt="Partner 3" className="partner-img" />
</div>
<div className="partner-section">
<img src="p4.png" alt="Partner 4" className="partner-img" />
<img src="p5.png" alt="Partner 5" className="partner-img" />
<img src="p6.png" alt="Partner 6" className="partner-img" />
</div>
</div>
</div>
);
};
export default Partners;