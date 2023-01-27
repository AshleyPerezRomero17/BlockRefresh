import React, { useState, useEffect } from "react";

interface SlideshowProps {}
interface Images {
    url: string;
    text: string;
}

const Slideshow: React.FC<SlideshowProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images: Images[] = [
    {
        url: "image1.jpg",
        text:
        "Our program helping children in underprivileged communities access education",
    },
    {
        url: "image2.jpg",
        text: "Volunteers planting trees to promote sustainable living",
    },
    {
        url: "image3.jpg",
        text: "Our community development program empowering local businesses to grow",
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






