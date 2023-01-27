import React from "react";
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
<img src="impact-img1.jpg" alt="Impact Image 1" className="impact-img1" />
</div>
<div className="left-section">
<img src="impact-img2.jpg" alt="Impact Image 2" className="impact-img2" />
</div>
<div className="right-section">
<h2 className="underline-header">Our Results</h2>
<p>
We have helped thousands of individuals and communities to improve their lives through our programs. Our results speak for themselves and we are proud of the difference that we have made.
</p>
</div>
<div className="separation-line-section">
<hr />
</div>
</div>
);
};
export default ImpactSection;