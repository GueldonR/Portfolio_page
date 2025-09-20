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
    swipeToSlide: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
      <div {...otherProps}>
        <h3>{index}</h3>
      </div>
    );
  }

  const placeholderUrl = "vite.svg";
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <section>
            <h1>1</h1>
            <img src={CustomSlide} alt="Slide 1" />
          </section>
        </div>
        <div>
          <section>
            <h1>2</h1>
            <img src={CustomSlide} alt="Slide 2" />
          </section>
        </div>
        <div>
          <section>
            <h1>3</h1>
            <img src={CustomSlide} alt="Slide 3" />
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default About;
