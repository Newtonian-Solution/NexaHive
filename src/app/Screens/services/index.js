import React from "react";
import { ReactComponent as Software } from "../../../Assets/Images/image 2.svg";
import  cyber from '../../../Assets/Images/cyber.png'
import  sass from '../../../Assets/Images/sass.png'
import "./index.scss";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__first-row">
        <h1 className="services__heading ">Our Services</h1>
        <p className="services__paragraph paragraph">
          We bestow these services professionally, give a trial and get
          convinced
        </p>

        <div className="services__card  card-1" data-aos="zoom-in">
          <Software className="services__card--icon" />
          <h3 className="services__card--heading">Software Development</h3>
          <p className="services__card--paragraph">
            We build responsive web site / engine that detects the visitor's
            screen size & orientation and change the layout accordingly with
            flexible layouts,images,application and database for your business
            or institution.
          </p>
        </div>
      </div>
      <div className="services__second-row">
        <div className="services__card card-2" data-aos="zoom-in">
          <img src={cyber} alt="cyber-logo" className="services__card--icon" />
          <h3 className="services__card--heading">CyberSecurity</h3>
          <p className="services__card--paragraph">
            We help you to prevent data breaches, identity, theft and
            cyber-attacks as well as risk management is some cases.
          </p>
        </div>
        <div className="services__card card-3" data-aos="zoom-in">
          <img src={sass} alt="sass-logo" className="services__card--icon" />
          <h3 className="services__card--heading">SaaS</h3>
          <p className="services__card--paragraph">
            We help you deliver on-demand computing services through
            applications over the internet. It improves accessibility,
            scalability, and reliability while minimizing overhead and
            maintenance costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
