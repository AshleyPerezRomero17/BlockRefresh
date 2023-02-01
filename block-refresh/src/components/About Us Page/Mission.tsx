import React from "react";
import "./css/Mission.css";
interface Props {}
const Mission: React.FC<Props> = () => {
  return (
    <div className="mission">
      <h2 className="font-extrabold">History</h2>
      <p>
        Our organization was established with the goal of improving
        neighborhoods through environmental initiatives. With a focus on
        preserving and creating open spaces, parks, and community gardens, we
        have grown to collaborate with key stakeholders and engage volunteers in
        our efforts. Our history is marked by significant accomplishments and a
        continued commitment to making a positive difference in communities.
      </p>
      <div className="separation-line-section">
        <hr />
      </div>
    </div>
  );
};
export default Mission;
