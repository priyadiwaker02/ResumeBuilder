import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import resume1 from "../assets/Professional-Minimalist-CV-Resume-(1).png";
import resume2 from "../assets/Professional-Minimalist-CV-Resume.png";
import resume3 from "../assets/Simple-Professional-CV-Resume.png";

export default function FlipSlider() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [resume1, resume2, resume3];

  return (
    <div className="md:w-[50%] w-[40%]">
      <Slider {...settings}>
        {images.map((resume, index) => (
          <div key={index}>
            {/* Simple img tag without Link */}
            <img src={resume} alt={`Resume ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
