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
        alt1="About Us Image"
        header1="About Us"
        text1="Learn more about our organization and mission"
        imgUrl2="about-us-image.jpg"
        alt2="About Us Image"
        header2="About Us"
        text2="Learn more about our organization and mission"
        />
        <OurPrograms />
        <Slideshow />
    </div>
    );
    };