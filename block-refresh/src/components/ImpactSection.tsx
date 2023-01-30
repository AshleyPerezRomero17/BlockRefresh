import React from "react";
import "../css/ImpactSection.css";
interface ImpactProps {}
const ImpactSection: React.FC<ImpactProps> = () => {
return (
<div className="impact-section">
<div className="left-section">
<h2 className="underline-header">Our Impact</h2>
<p>
We are committed to making a real difference in the world through our programs and initiatives. Our impact can be seen in the lives of individuals and communities that we have helped.
</p>
</div>
<div className="right-section">
<img src="1.png" alt="Impact Image 1" className="impact-img1" />
</div>
<div className="left-section">
<img src="5.png" alt="Impact Image 5" className="impact-img5" />
</div>
<div className="right-section">
<h2 className="underline-header">Our Results</h2>
<p>
We have helped thousands of individuals and communities to improve their lives through our programs. Our results speak for themselves and we are proud of the difference that we have made.
</p>
</div>

</div>
);
};
export default ImpactSection;