import React, { useEffect, useState } from "react";
import "./index.scss";
import Education from "../../../Assets/Images/Education-Online-exams-tests.png";
import Wireframe from "../../../Assets/Images/wireframe.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const About = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showSlider, setShowSlider] = useState(false);
  // console.log(windowSize);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
      window.addEventListener("resize", handleWindowResize);
      if (windowSize.innerWidth <= 600) setShowSlider(true);
      else if(windowSize.innerWidth > 600) setShowSlider(false)

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return (
    <section className="about" id="about">
      <div className="about__first-row">
        <h1 className="about__heading">About Us</h1>
        <p className="about--paragraph paragraph">
          NexaHive is an operating organization. We are one of Nigeria’s
          fastest-growing information technology service and software
          development companies, utilizing an extensive and robust indigenous
          infrastructure to provide bespoke software solutions to clients and
          partners worldwide. We are a team of seasoned experts dedicated to our
          craft of choice.
        </p>
        <div className={`about__img--container ${showSlider ? "hidden" : ""}`}>
          <img src={Education} alt="" className="img" />
        </div>
      </div>
      <div className={`about__second-row  ${showSlider && "hidden"}`}>
        <div className="about__img--container">
          <img src={Wireframe} alt="wireframe" className="img" />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false}}
        pagination={{ clickable: true,}}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${showSlider ? 'show' : 'hidden'}`}
          >
              <SwiperSlide><img src={Wireframe} alt="" /></SwiperSlide>
              <SwiperSlide><img src={Education} alt="" /></SwiperSlide>
             
      </Swiper>
    </section>
  );
};

export default About;
