import React from "react";
import "./experiencecard.scss";

const ExperienceCard = ({ title, timePeriod, description, link }) => {
  return (
    <div className="timeline">
      <div className="experiene__box">
        <div className="title">{title}</div>
        <div className="timePeriod">{timePeriod}</div>
        <p>{description}</p>
        <a
          className="link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Certification of Completion
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
