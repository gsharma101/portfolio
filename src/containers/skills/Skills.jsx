import React from "react";
import "./skills.scss";
import techLogo from "../../assets/images/tech.jpg";
import Heading from "../../components/heading/Heading";
function Skills() {
  return (
    <section className="skills" id="skills">
      <Heading heading="My Skills" />
      <div className="section__container">
        <div className="section__container--left left">
          <div className="skills__box">
            <div className="skill__data u-margin-bottom-medium">
              <div class="skill__name">
                <span>Full-Stack Development</span>
              </div>
              <div class="skill__bar skill__1"></div>
              <div class="skill__percentage">
                <span>85%</span>
              </div>
            </div>

            <div className="skill__data u-margin-bottom-medium">
              <div class="skill__name">
                <span>Data Structures and Algorithms</span>
              </div>
              <div class="skill__bar skill__2"></div>
              <div class="skill__percentage">
                <span>75%</span>
              </div>
            </div>

            <div className="skill__data">
              <div class="skill__name">
                <span>Cyber Security</span>
              </div>
              <div class="skill__bar skill__3"></div>
              <div class="skill__percentage">
                <span>65%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section__container--right right">
          <img src={techLogo} alt="techlogo" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
