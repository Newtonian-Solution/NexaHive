import React from 'react'
import logo from '../../../Assets/Images/footerLogo.png'
import './index.scss'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci'
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
        <span className="footer__links footer__text">Home</span>
        <span className="footer__links footer__text">About Us</span>
        <span className="footer__links footer__text">Services</span>
        <span className="footer__links footer__text">Projects</span>
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
          <FaFacebookF className="footer__icon" />
          <CiTwitter className="footer__icon" />
        </div>
      </div>
      <div className="footer__line"></div>
      <span className="footer__copyright">&copy; Copyright 2022 NexaHive All Right Reserved</span>
    </div>
  );
}

export default Footer