import React,{useState} from "react";
import Logo from '../../Assets/Images/Logo.png'
import './index.scss'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
const Nav = () => {
    const [checked, setChecked] = useState(false)
    return (
      <nav className="nav">
        <div className="nav__logo--container">
          <img src={Logo} alt="nexahive-logo" />
        </div>
        <ul className={`nav__items ${checked && 'active'}`}>
          <li className="nav__items--item">
            <Link>Home</Link>
          </li>
          <li className="nav__items--item">
            <Link>About Us</Link>
          </li>
          <li className="nav__items--item">
            <Link>Services</Link>
          </li>
          <li className="nav__items--item">
            <Link>Projects</Link>
          </li>
          <li className="nav__items--item">
            <Link>Team</Link>
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
    );
};

export default Nav;
