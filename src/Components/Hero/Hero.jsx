import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Gueldon.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <motion className="div">
        <img className="Pic" src={profile_img} alt="Picture of Gueldon" />
      </motion>
      <h1>
        {""}
        <span>I'm Gueldon Roble,</span> a Software Developer based in Sweden.
      </h1>
      <p>
        Self-taught and continuously learning junior software developer.
        Currently pursuing B.Sc. in Information Systems at the University of
        Skövde, with a focus on information system architecture, data modeling,
        and IT solutions. Strong communicator with attention to detail, eager to
        expand my skillsset and gain hands-on experience in real-world projects.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-myresume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
