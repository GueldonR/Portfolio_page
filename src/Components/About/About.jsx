import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const placeholderUrl = "vite.svg";
  return (

    <Slider {...settings}>
      <div>
        <h1>1</h1>
        <img src={placeholderUrl} alt="Slide 1" />
      </div>
      <div>
            <h1>2</h1>
        <img src={placeholderUrl} alt="Slide 2" />
      </div>
      <div>
            <h1>3</h1>
        <img src={placeholderUrl} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default About;
