import React from "react";
import "./projects.scss";
import Heading from "../../components/heading/Heading";
import { ProjectCards } from "../../components";
import { Movie, Spotify, TwitterImg, Game, Pig, Nexter } from "./index";
const projects = () => {
  return (
    <section className="projects" id="projects">
      <Heading heading="My Projects" />
      <div className="row">
        <ProjectCards
          img={TwitterImg}
          name={"Twitter Full Stack Clone"}
          stack={"Html, Css, Javascript, php, Mysql"}
          demo={"https://github.com/gsharma101/Twitter-Social-Network-Clone"}
          sourcecode={
            "https://github.com/gsharma101/Twitter-Social-Network-Clone"
          }
        />
        <ProjectCards
          img={Movie}
          name={"Movie Rating Web App "}
          stack={"React.js & OMDB Api"}
          demo={"https://gsharma101.github.io/Popcorn/"}
          sourcecode={"https://github.com/gsharma101/Popcorn"}
        />
        <ProjectCards
          img={Spotify}
          name={"Spotify Clone"}
          stack={"React, Tailwind, Redux, Rapid API"}
          demo={"https://spotify010.netlify.app/"}
          sourcecode={"https://github.com/gsharma101/Spotify-Clone"}
        />
      </div>
      <div className="row u-margin-top-medium u-margin-bottom-medium">
        <ProjectCards
          img={Game}
          name={"Guess My Number"}
          stack={"Html, Css, JavaScript"}
          demo={"https://gsharma101.github.io/Guess-My-Number/"}
          sourcecode={"https://github.com/gsharma101/Guess-My-Number/"}
        />
        <ProjectCards
          img={Pig}
          name={"Pig Game"}
          stack={"Html, Css, JavaScript"}
          demo={"https://gsharma101.github.io/Pig-game/"}
          sourcecode={"https://github.com/gsharma101/Natours"}
        />
        <ProjectCards
          img={Nexter}
          name={"Nexter Responsive Website"}
          stack={"Html, Css Grid"}
          demo={"https://gsharma101.github.io/Nexter/"}
          sourcecode={"https://github.com/gsharma101/Nexter/"}
        />
      </div>
    </section>
  );
};

export default projects;
