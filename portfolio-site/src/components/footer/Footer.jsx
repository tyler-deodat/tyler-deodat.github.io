import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Tyler Deodat
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tyler-deodat/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/tyler_deodat/">
          <FiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
