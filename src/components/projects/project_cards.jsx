import React from "react";
import "./project_cards.scss";

const project_cards = ({ img, name, stack, demo, sourcecode }) => {
  return (
    <div className="project__card">
      <div className="img__box">
        <img src={img} alt="projectImage" />
      </div>
      <div className="project__details">
        <h2 className="u-margin-bottom-small">{name}</h2>
        <div className="stack">{stack}</div>
        <div className="action u-margin-top-small">
          <div className="link__box u-margin-bottom-small">
            <a href={demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          </div>
          <div className="link__box">
            <a href={sourcecode} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project_cards;
