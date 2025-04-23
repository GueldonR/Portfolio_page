import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profile_pic from "../../assets/Gueldon.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div className="About">
      <div className="About-title" data-aos="fade-up">
        <h2>About me</h2>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="aboutleft" data-aos="fade-right">
          <img src={profile_pic} alt="Picture of Gueldon" />
        </div>
        <div className="aboutright" data-aos="fade-left">
          <div className="aboutparagraph">
            <p>
              I’m studying 'Information System Science' during which I have
              gained experience in both academic and business-related projects.
              Throughout my studies, I’ve had the privilege of working on
              real-world applications, collaborating in team environments, and
              gaining insights into both technical and strategic aspects of
              development. These experiences have shaped my ability to adapt,
              problem-solve, and continuously grow in the field of technology.
            </p>
            <p>
              I thrive on solving complex problems and turning ideas into
              business impactful solutions. With experience in leading
              development teams, optimizing system performance, and integrating
              data-driven technologies, I continuously seek opportunities to
              refine my knowledge. Whether working on software development,
              business intelligence, full-stack applications, or database
              management, I approach each challenge with hunger, precision, and
              a commitment to do my best.
            </p>
          </div>
          <div className="about-skills" data-aos="fade-up">
            <h1>My tech stack</h1>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <p>Communication & Problem-Solving</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <p>UML</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <p>Project Management</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <p>PHP</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <p>JavaScript & TypeScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <p>Agile (Scrum)</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <p>React.js & Next.js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <p>REST API</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <p>MySQL & PostgreSQL</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              <p>ASP.NET MVC</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="1300"
            >
              <p>OpenSearch</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div
              className="about-skill"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <p>FastAPI</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement" data-aos="fade-up">
            <h1>Hackathon Winner 2024 at Ingenium Winter School MTU</h1>
            <p>
              Collaborated across 5 disciplines to develop an app prototype
              called ‘MTUFit’, a student fitness app with gamified rewards,
              activity boards, and exclusive sports discounts, leading to 1st
              place in the competition.
            </p>
          </div>
          <div
            className="about-achievement"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>More than 55% through my studies</h1>
            <p>
              Throughout my studies, I have worked on both academic and
              business-related projects while building a solid theoretical
              foundation that enables me to adapt and excel in any new
              development environment.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
