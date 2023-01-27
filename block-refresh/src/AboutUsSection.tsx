import React from "react";
interface AboutUsProps {
imgUrl1: string;
imgUrl2: string;
alt1: string;
alt2: string;
header1: string;
header2: string;
text1: string;
text2: string;
}
const AboutUsSection: React.FC<AboutUsProps> = ({imgUrl1,imgUrl2,alt1,alt2,header1,header2,text1,text2}) => {
return (

<div className="about-us-section">
<div className="left-section">
<h2>{header1}</h2>
<p>{text1}</p>
</div>
<div className="right-section">
<img src={imgUrl1} alt={alt1} className="about-us-img" />
</div>
<div className="left-section">
<img src={imgUrl2} alt={alt2} className="about-us-img" />
</div>
<div className="right-section">
<h2>{header2}</h2>
<p>{text2}</p>
</div>
</div>
);
};
export default AboutUsSection;