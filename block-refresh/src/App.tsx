import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import Hero from './Hero';
import HeaderSection from './HeaderSection';
import AboutUsSection from './AboutUsSection';
import OurPrograms from './OurPrograms';
import Slideshow from './Slideshow';

function App() {
  return (
    <div className="App">
      <Navbar />
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
      <Footer />
      
    </div>
  );
}

export default App;
