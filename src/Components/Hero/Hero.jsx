import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profile_img from "../../assets/Gueldon.jpg";
import TextType from "@/Components/Text/SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Letter animation finished!");
  };

  return (
    <div className="hero">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img className="Pic" src={profile_img} alt="Picture of Gueldon" />
      </motion.div>
      <h1>
        <TextType
          text={[
            "Hi, I am Gueldon!",
            "Welcome to my portfolio website!",
            "Feel free to reach out!",
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </h1>
      <p>
        Self-taught and continuously learning junior software developer.
        Currently pursuing B.Sc. in Information Systems at the University of
        Skövde, with a focus on information system architecture, data modeling,
        and IT solutions. Strong communicator with attention to detail, eager to
        expand my skillsset and gain hands-on experience in real-world projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-myresume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
