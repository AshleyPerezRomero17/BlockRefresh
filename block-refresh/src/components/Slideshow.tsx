import React, { useState, useEffect } from "react";
import "../css/Slideshow.css";
interface SlideshowProps {}
interface Images {
    url: string;
    text: string;
}

const Slideshow: React.FC<SlideshowProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images: Images[] = [
    {
        url: "6.png",
        text:
        "A group of people coming together as a community",
    },
    {
        url: "7.png",
        text: "A solar panel installation on a community building",
    },
    {
        url: "8.png",
        text: "A busy street corner with a mix of small businesses and residential buildings",
    },
    ];

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
    }, [currentIndex]);

    return (
    <div className="slideshow-section">
        <img
        src={images[currentIndex].url}
        alt="Slideshow Image"
        className="slideshow-img"
        />
        <p className="slideshow-text">{images[currentIndex].text}</p>
    </div>
    );
};

export default Slideshow;






