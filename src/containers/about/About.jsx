import React from "react";
import "./about.scss";
import aboutImg from "../../assets/images/about.png";
import Heading from "../../components/heading/Heading";
const About = () => {
  return (
    <section className="about" id="about">
      <Heading heading="Little about me" />
      <div className="section__container">
        <div className="about__left">
          <img src={aboutImg} alt="aboutimg" />
        </div>
        <div className="about__right">
          <h3 className="para_heading">I'am Gaurav Sharma</h3>
          <p>
            junior software developer from India. I'm deeply passionate about
            software development, computers and cyber security. Apart from that
            I have a habit of reading books of different genres like self-help,
            business & non-fiction etc;
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
