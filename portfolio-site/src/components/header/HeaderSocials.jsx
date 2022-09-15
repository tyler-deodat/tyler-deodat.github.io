import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGitlab } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tyler-deodat/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://gitlab.com/tylerkdeodat" target="_blank">
        <AiOutlineGitlab />
      </a>
    </div>
  );
};

export default HeaderSocials;
