import { SiLeetcode as LeetCode, SiGeeksforgeeks as GFG } from "react-icons/si";

import {
  BsGithub as GitHub,
  BsTwitter as Twitter,
  BsLinkedin as Linkedin,
} from "react-icons/bs";

import { AiOutlineMail as Email } from "react-icons/ai";

import React from "react";
import "./links.scss";

const links = () => {
  return (
    <div className="links">
      <a href="mailto: sharmag8121@gmail.com" target="_blank" rel="noreferrer">
        <Email />
      </a>
      <a
        href="https://leetcode.com/gsharma101/"
        target="_blank"
        rel="noreferrer"
      >
        <LeetCode />
      </a>
      <a
        href="https://auth.geeksforgeeks.org/user/gsharma101/"
        target="_blank"
        rel="noreferrer"
      >
        <GFG />
      </a>
      <a href="https://github.com/gsharma101" target="_blank" rel="noreferrer">
        <GitHub />
      </a>
      <a href="https://twitter.com/gsharma010" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/in/gsharma010/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default links;
