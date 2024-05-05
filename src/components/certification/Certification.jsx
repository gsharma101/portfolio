import React from "react";
import "./certification.scss";
const certification = ({ img, titile, link }) => {
  return (
    <div className="certification">
      <div className="imgBox">
        <img src={img} alt="certificateimg" />
      </div>
      <h1 className="u-margin-top-small">{titile}</h1>
      <h3 className="u-margin-top-small">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Click Here
        </a>
      </h3>
    </div>
  );
};

export default certification;
