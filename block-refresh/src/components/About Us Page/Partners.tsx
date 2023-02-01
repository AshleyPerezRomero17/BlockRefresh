import React from "react";
import "./css/Partners.css";
const Partners: React.FC = () => {
  return (
    <div className="our-partners-section">
      <div className="separation-line-section">
        <hr />
      </div>
      <div className="left-section">
        <h2 className="font-extrabold">Our Partners</h2>
        <p>
          Block Refresh's Neighborhood Revitalization project was successful
          thanks to partnerships with local government agencies, community
          organizations, and businesses. These partnerships provided resources,
          expertise, funding, volunteer support, and community outreach. The
          collaboration was critical to the project's success and created a more
          vibrant and sustainable community for residents.
        </p>
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
