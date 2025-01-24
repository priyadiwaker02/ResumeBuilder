import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import resume1 from "../assets/Professional-Minimalist-CV-Resume-(1).png";
import resume2 from "../assets/Professional-Minimalist-CV-Resume.png";
import resume3 from "../assets/Simple-Professional-CV-Resume.png";

export default function Carousel() {
  const settings = {
    dots: false, // Disable dots
    arrows: true, // Enable navigation buttons
    autoplay: true, // Always autoplay
    autoplaySpeed: 2000,
    speed: 500, // Transition speed
    infinite: true, // Enable infinite looping
    slidesToShow: 4, // Show 4 items on the screen at once
    slidesToScroll: 1, // Slide one item at a time
  };

  const images = [resume1, resume2, resume3]; // List of images
  const templateKeys = ["template1", "template2", "template3"]; // Unique template keys corresponding to images
  const routes = ['/Resume-Builder']

  return (
    <div style={{ width: "80%", margin: "0 auto" }} className="py-[4rem]">
      <Slider {...settings} className="flex gap-6">
        {images.map((resume, index) => (
          <div
            key={index}
            style={{ position: "relative", overflow: "hidden" }} // Ensure proper positioning
          >
            <img
              src={resume}
              alt={`Resume ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            {/* Always visible button */}
            <button
              className="button w-80"
              style={{
                position: "absolute",
                zIndex: "1",
                top: "40%",
                marginLeft: "0.2%",
                width: "15rem",
                background:
                  "linear-gradient(90deg, rgba(86,46,124,1) 0%, rgba(132,53,115,1) 35%, rgba(131,82,63,1) 100%)",
              }}
            >
              <Link 
              to="/resume-builder"
              state={{template: templateKeys[index]}}
             
              >
                 Select
              </Link>
              
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
