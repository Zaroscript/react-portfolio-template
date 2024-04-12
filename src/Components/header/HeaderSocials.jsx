import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaSquareFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
