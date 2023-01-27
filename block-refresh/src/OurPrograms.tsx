import React from "react";

interface OurProgramsProps {}

const OurPrograms: React.FC<OurProgramsProps> = () => {
return (
<div className="our-programs-section">
<h2>Our Programs</h2>
<div className="left-section">
<p>
We offer a variety of programs that focus on different areas such as
education, environment, and community development. Our programs are
designed to create a positive impact and empower individuals and
communities to make a difference. We work closely with our partners and communities to ensure that our
programs are effective and sustainable. We are constantly evaluating
and improving our programs to make sure that we are making a real
difference.
</p>
</div>
<div className="right-section">
<img
        src="programs-img.jpg"
        alt="Programs Image"
        className="programs-img"
        />
</div>
</div>
);
};

export default OurPrograms;