import React, { useState } from "react";
import Logo from "../../Assets/Images/Logo.png";
import "./index.scss";
import Button from "../button";
import { Link } from "react-scroll";
const Nav = () => {
  const [checked, setChecked] = useState(false);

  const handleClose = () => {
    setChecked(false)
  };

  return (
    <>
      <nav className={`nav sticky`}>
        <div className="nav__logo--container">
          <img src={Logo} alt="nexahive-logo" />
        </div>
        <ul className={`nav__items ${checked && "active"}`}>
          <li className="nav__items--item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li className="nav__items--item" onClick={handleClose}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              About Us
            </Link>
          </li>
          <li className="nav__items--item" onClick={handleClose}>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Services
            </Link>
          </li>
          <li className="nav__items--item" onClick={handleClose}>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Projects
            </Link>
          </li>
          <li className="nav__items--item" onClick={handleClose}>
            <Link
              activeClass="active"
              to="teams"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Team
            </Link>
          </li>
        </ul>
        <Button className={"nav__btn"}>Contact Us</Button>
        <div className="nav__icon">
          <input
            type="checkbox"
            className={`navigation__checkbox`}
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="navi-toggle" className={`navigation__button`}>
            <span className={`navigation__icon`}>&nbsp;</span>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Nav;
