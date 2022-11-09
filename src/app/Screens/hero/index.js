import React from "react";
import "./index.scss";
import WorkingSpace from "../../../Assets/Images/co-working-space.png";
import Button from "../../../Component/button";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="first-row">
        <h1 className="hero--heading">
          Building Digital Products, Brands & Experience.{" "}
        </h1>
        <div className="hero__img--container">
          <img src={WorkingSpace} alt="working-space" className="img" />
        </div>
      </div>
      <div className="second-row">
        <p className="hero--paragraph">
          We take you to where you need to be through Visuals, we are everything
          that happens between your first idea to a product everyone is using.
              </p>
              <Button className={'hero-btn'}>Start a Project</Button>
      </div>
    </div>
  );
};

export default HeroSection;
