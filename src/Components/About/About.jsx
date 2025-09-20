import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
  };

  function CustomSlide({ index, placeholderUrl }) {
    return index === 1 ? (
      <img src={placeholderUrl} alt={`Slide ${index}`} />
    ) : (
      <img src="vite.svg" alt={`Slide ${index}`} />
    );
  }

  const placeholderUrl = "vite.svg";

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <section>
            <h1>1</h1>
            <CustomSlide index={1} placeholderUrl={placeholderUrl} />
          </section>
        </div>
        <div>
          <section>
            <h1>2</h1>
            <CustomSlide index={2} placeholderUrl={placeholderUrl} />
          </section>
        </div>
        <div>
          <section>
            <h1>3</h1>
            <CustomSlide index={3} placeholderUrl={placeholderUrl} />
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default About;
