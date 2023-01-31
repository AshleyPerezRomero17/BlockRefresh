import React from "react";
import "../css/ImpactSection.css";
interface ImpactProps {}
const ImpactSection: React.FC<ImpactProps> = () => {
return (
<div className="impact-section">
<div className="left-section">
<h2 className="underline-header font-extrabold">Our Impact</h2>
<p className="width">
Our organization has made a significant impact on neighborhoods and the environment through our efforts. From creating new green spaces for recreation and community building, to preserving existing parks and gardens, we have made a lasting difference in the lives of many. Our work has also helped to raise awareness about the importance of environmental sustainability and has inspired others to get involved in making their communities better places to live.
</p>
</div>
<div className="right-section">
<img src="1.png" alt="Impact Image 1" className="impact-img1" />
</div>
<div className="left-section">
<img src="5.png" alt="Impact Image 5" className="impact-img5" />
</div>
<div className="right-section">
<h2 className="underline-header font-extrabold">Our Results</h2>
<p className="width">
Block Refresh's Neighborhood Revitalization project has transformed the community by preserving, creating, or restoring open spaces, parks, and community gardens. These efforts have improved the environment and residents' quality of life by providing green spaces for gardening, recreation, and social gathering. The project has also reduced environmental degradation by planting trees and creating walking trails. The success of this project has demonstrated the positive impact of environmental efforts on communities.
</p>
</div>
</div>
);
};
export default ImpactSection;