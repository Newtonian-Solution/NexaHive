import React from "react";
import logo from "../../../Assets/Images/footerLogo.png";
import "./index.scss";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="column1">
        <div className="img__wrapper">
          <img src={logo} alt="" className="footer__logo" />
        </div>
        <span className="footer__address">
          31, Biada, Gaakanbi,Ilorin,Kwara State,Nigeria
        </span>
        <span className="footer__address">Email: nexahive@gmail.com</span>
        <span className="footer__address">Phone no: +234896745347 </span>
      </div>
      <div className="column2">
        <span className="footer__link--heading">Useful links</span>
        <span className="footer__links footer__text">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </span>
        <span className="footer__links footer__text">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About Us
          </Link>
        </span>
        <span className="footer__links footer__text">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </span>
        <span className="footer__links footer__text">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </span>
        <span className="footer__links footer__text">Privacy policy</span>
      </div>
      <div className="column3">
        <span className="footer__link--heading">Our Services</span>
        <span className="footer__links footer__text">Software Development</span>
        <span className="footer__links footer__text">Cyber Security</span>
        <span className="footer__links footer__text">Sass</span>
      </div>
      <div className="column4">
        <span className="footer__link--heading">Our Socials</span>
        <div className="icon__container">
          <IoLogoInstagram className="footer__icon" />

          <a href="https://www.facebook.com/profile.php?id=100076316062414&mibextid=ZbWKwL" target="_blank">
            <FaFacebookF className="footer__icon" />
          </a>

          <CiTwitter className="footer__icon" />
        </div>
      </div>
      <div className="footer__line"></div>
      <span className="footer__copyright">
        &copy; Copyright 2022 NexaHive All Right Reserved
      </span>
    </div>
  );
};

export default Footer;
