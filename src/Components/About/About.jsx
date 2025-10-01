import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

// Import of slide pictures
import slide1pic from "../../assets/slide1.jpg";
import slide2pic from "../../assets/CIRCLE_APP_ICON_05.svg";
//import slide3pic from "../../assets/slide3.jpg";
import { color } from "motion/react";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const slides = [
    { id: 1, img: slide1pic, title: "MTU Hackathon winner" },
    {
      id: 2,
      img: slide2pic,
      title: "Currently a Software Dev at Circle Socials",
    },
    // { id: 3, img: slide3pic, title: "Third Slide" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="each-slide">
            <section>
              <h1>{slide.title}</h1>
              <img src={slide.img} alt={slide.title} className="slide-image" />
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default About;
