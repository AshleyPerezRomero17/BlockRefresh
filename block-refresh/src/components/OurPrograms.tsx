import React from "react";
import "../css/OurPrograms.css";
interface OurProgramsProps {}

const OurPrograms: React.FC<OurProgramsProps> = () => {
        return (
        <div className="our-programs-section">
        <hr />

        <div className="left-section">
        <h2 className="font-extrabold">Our Programs</h2>
        <p>
                We offer a variety of programs that focus on different areas such as
                education, environment, and community development. Our programs are
                designed to create a positive impact and empower individuals and
                communities to make a difference. We work closely with our partners
                and communities to ensure that our programs are effective and
                sustainable. We are constantly evaluating and improving our programs
                to make sure that we are making a real difference.
        </p>
        </div>
        <div className="right-section">
        <img src="5.png" alt="Tree and park bench." className="programs-img" />
        </div>
        </div>
        );
};

export default OurPrograms;
