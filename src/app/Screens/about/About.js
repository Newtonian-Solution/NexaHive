import React from "react";
import "./About.scss";
import img1 from "../../../Assets/Images/wireless-technology.jpg";
import Button from "../../../Component/Button/Button";
import img2 from "../../../Assets/Images/img_2.jpg";
import img3 from "../../../Assets/Images/img_5.jpg";
import img4 from "../../../Assets/Images/img_6.jpg";
import { GoRocket } from 'react-icons/go'
import { CgToolbox } from 'react-icons/cg'
import {SiBookstack} from 'react-icons/si'
import { TfiInfinite } from 'react-icons/tfi'
import { GoLightBulb } from 'react-icons/go'
import {CiSettings} from 'react-icons/ci'

function About() {
  return (
    <div className="about__container">
      <section className="about">
        <div className="textbox">
          <h1 className="heading--primary textbox--primary margin-bottom-small">
            About Us{" "}
          </h1>
          <div className="u-center-text">
            <h5 className="heading--tertiary textbox--tertiary">
              Home &rarr; About{" "}
            </h5>
          </div>
        </div>
      </section>
      <section className="feature--box__container">
        <div className="feature--box">
          <span className="feature--box__logo margin-bottom-small"><GoRocket className="feature--box__logo"/></span>
          <h2 className="heading--secondary margin-bottom-small">Innovative</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt
            nobis dolores fugiat quisquam atque, minus iure magnam culpa alias
          </p>
        </div>
        <div className="feature--box">

          <span className="feature--box__logo margin-bottom-small"><CgToolbox className="feature--box__logo"/></span>
          <h2 className="heading--secondary margin-bottom-small">Solutions</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt
            nobis dolores fugiat quisquam atque, minus iure magnam culpa alias
          </p>
        </div>
        <div className="feature--box">
          <span className="feature--box__logo margin-bottom-small"><SiBookstack  className="feature--box__logo"/></span>
          <h2 className="heading--secondary margin-bottom-small">Effective</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt
            nobis dolores fugiat quisquam atque, minus iure magnam culpa alias
          </p>
        </div>
        <div className="feature--box">
          <span className="feature--box__logo margin-bottom-small"><TfiInfinite className="feature--box__logo"/></span>
          <h2 className="heading--secondary margin-bottom-small">Hi-Tech</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt
            nobis dolores fugiat quisquam atque, minus iure magnam culpa alias
          </p>
        </div>
      </section>
      <section className="sustain">
        <div className="sustain__textbox">
          <h3 className="heading--primary margin-bottom-medium">
            Sustainability, Innovation, and Craftmanship.
          </h3>
          <p className="paragraph">
            Ad lectus vehicula condimentum pellentesque sapien phasellus felis
            interdum tortor fames sagittis
          </p>
        </div>

        <img src={img1} alt="" className="sustain__img" />
      </section>
      <section className="lead margin-bottom-big">
        <h2 className="heading--secondary margin-bottom-medium">
          Leading through innovation.
        </h2>
        <p className="paragraph margin-bottom-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Button className="leadBtn">
          <span> Learn more{" "}</span>
         
        </Button>
      </section>
      <section className="history margin-bottom-big">
        <div className="u-center-text margin-bottom-small">
          <p className="paragraph margin-bottom-small sub-heading">History</p>
          <h2 className="heading--primary">
            Business attitude - innovation,
            <br /> responsibility, humanism.
          </h2>
        </div>
        <div className="history__text">
          <p className="paragraph">
            Duis cubilia neque primis eros etiam posuere diam. Maximus sed purus
            senectus cubilia euismod. Torquent adipiscing vitae iaculis.
            Condimentum augue lacus mattis dictum. Tristique accumsan metus
            laoreet nascetur nibh class. Scelerisque arcu neque habitasse justo
            viverra malesuada hendrerit. Cubilia gravida fringilla turpis
            himenaeos dapibus penatibus eros. Sodales vestibulum sit nisl
            cubilia gravida efficitur quam. Sem leo iaculis adipiscing fames
            consectetuer. Nulla consequat velit lacinia. Non morbi mollis urna.
            Mauris penatibus integer himenaeos feugiat class enim. Fermentum
            penatibus blandit ullamcorper ante tincidunt sapien taciti. Montes
            blandit convallis ultricies tellus eros ut. Pede metus euismod
            sagittis pulvinar vulputate.
          </p>
        </div>
      </section>
      <section className="value">
        <div className="u-center-text">
          <p className="paragraph margin-bottom-small sub-heading">Our Value</p>
          <h2 className="heading--primary">Innovation is our tradition.</h2>
          <p className="paragraph margin-bottom-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="value-box__container">
            <div className="value-box">
              <span className="margin-bottom-small"><GoLightBulb className="value-box__logo" /></span>
              <h5 className="paragraph margin-bottom-small">Vision</h5>
              <p className="paragraph margin-bottom-small">
                Finibus consectetur interdum tempus penatibus ridiculus sagittis
                vivamus litora senectus luctus lorem
              </p>
            </div>
            <div className="value-box">
              <span className="margin-bottom-small"><CiSettings  className="value-box__logo"/></span>
              <h5 className="paragraph margin-bottom-small">Vision</h5>
              <p className="paragraph margin-bottom-small">
                Finibus consectetur interdum tempus penatibus ridiculus sagittis
                vivamus litora senectus luctus lorem
              </p>
            </div>
            <div className="value-box">
              <span className="margin-bottom-small"><SiBookstack  className="value-box__logo"/></span>
              <h5 className="paragraph margin-bottom-small">Vision</h5>
              <p className="paragraph margin-bottom-small">
                Finibus consectetur interdum tempus penatibus ridiculus sagittis
                vivamus litora senectus luctus lorem
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="leadership">
        <div className="leadership-box">
          <p className="paragraph margin-bottom-small sub-heading">Our Leadership</p>
          <h2 className="heading--primary margin-bottom-small">
            Awesome people behind us.
          </h2>
          <p className="paragraph margin-bottom-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <Button className="leaderBtn">More Team</Button>
        </div>
        <div className="leadership-box">
          <img src={img2} className="img" alt="" />
          <div className="overlay">
            <h3 className="heading--secondary">Leroy M Burton</h3>
            <p className="paragraph">Founder</p>
          </div>
        </div>
        <div className="leadership-box">
          <img src={img3} alt="" className="img" />
          <div className="overlay">
            <h3 className="heading--secondary">Cyntia Gravis</h3>
            <p className="paragraph">Co-Founder</p>
          </div>
        </div>
        <div className="leadership-box">
          <img src={img4} alt="" className="img" />
          <div className="overlay">
            <h3 className="heading--secondary">William Laux</h3>
            <p className="paragraph">VP-Product</p>
          </div>
        </div>
      </section>
    </div>
  );
}
const data = {
  routeProps: {
    path: "about",
    element: <About />,
  },
  name: "about",
};
export default data