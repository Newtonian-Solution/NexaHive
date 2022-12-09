import React,{useContext} from "react";
import "./index.scss";
import WorkingSpace from "../../../Assets/Images/co-working-space.png";
import Button from "../../../Component/button";
import ModalContext from "../../../state-manager/modalProvider";


const HeroSection = () => {
  const {setModal} = useContext(ModalContext)
  return (
    <section className="hero" id="home">
      <div className="first-row">
        <h1
          className="hero--heading "
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Building Digital Products, Brands & Experience.{" "}
        </h1>
        <div
          className="hero__img--container"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src={WorkingSpace} alt="working-space" className="img" />
        </div>
      </div>
      <div className="second-row" data-aos="fade-left" data-aos-duration="1500">
        <p className="hero--paragraph paragraph">
          We take you to where you need to be through Visuals, we are everything
          that happens between your first idea to a product everyone is using.
        </p>
        <Button className={"hero-btn"} onclick={setModal}>
          Start a Project
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
