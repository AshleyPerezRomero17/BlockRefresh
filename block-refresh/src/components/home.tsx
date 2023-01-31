import React from "react";
import Hero from "./Hero";
import HeaderSection from "./HeaderSection";
import AboutUsSection from "./AboutUsSection";
import OurPrograms from "./OurPrograms";
import Slideshow from "./Slideshow";

export const Home = () => {
    return (
        <div className="home">
        <Hero />
        <HeaderSection />
        <AboutUsSection 
        imgUrl1="about-us-image.jpg"
        alt1="tree, park bench"
        header1="Who Are We"
        text1="We are a dedicated group of individuals committed to the revitalization of our neighborhoods through environmental efforts. With a passion for preserving and creating green spaces, we work tirelessly to improve the well-being of our communities and the planet. We believe that access to open spaces and parks is a basic right for all and strive to make this a reality for everyone."
        imgUrl2="about-us-image.jpg"
        alt2="tree, park bench"
        header2="What We Do"
        text2="We are dedicated to promoting sustainable communities by implementing environmental initiatives that preserve, create, and restore open spaces, parks, and community gardens. Our work includes advocating for the protection of green spaces, collaborating with community organizations and local governments, fundraising for park and garden projects, and engaging volunteers in hands-on green space revitalization efforts."
        />
        <OurPrograms />
        <Slideshow />
    </div>
    );
    };