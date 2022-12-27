import React, { useState, useEffect } from "react";
import "./index.scss";
import Jubril from "../../../Assets/Images/Jubril.jpg";
import Omuya from "../../../Assets/Images/Omuya.jpg";
import Aminu from "../../../Assets/Images/Aminu.jpg";
import team4 from "../../../Assets/Images/team1.png";
import { getWindowSize } from "../../../utils/utility";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Teams = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth <= 1300) setShowSlider(true);
    else if (windowSize.innerWidth > 1300) setShowSlider(false);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);
  return (
    <section className="teams" id="teams">
      <div className="u-center-text">
        <h1 className="teams__heading">Our Teams</h1>
      </div>
      <div className={`teams__container ${showSlider ? "hidden" : ""}`}>
        <div className="img__container" data-aos="fade-up" data-aos-duration="1000">
          <img src={Omuya} alt="" />
          <h4 className="teams__name">Ahmed Nurudeen</h4>
          <span className="teams__role">C.E.O</span>
        </div>
        <div className="img__container" data-aos="fade-down">
          <img src={Jubril} alt="" />
          <h4 className="teams__name">Lukman Jubril</h4>
          <span className="teams__role">Frontend Developer</span>
        </div>
        <div className="img__container" data-aos="fade-up">
          <img src={Aminu} alt="" />
          <h4 className="teams__name">Aminu Idris</h4>
          <span className="teams__role">Cyber Security Expert</span>
        </div>
        
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${showSlider ? "show" : "hidden"}`}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <SwiperSlide>
          <img src={Omuya} alt="team1" />
          <h4 className="teams__name">Ahmed Nurudeen</h4>
          <span className="teams__role">C.E.O</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jubril} alt="team2" />
          <h4 className="teams__name">Lukman Jubril</h4>
          <span className="teams__role">C.T.O</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Aminu} alt="team3" />
          <h4 className="teams__name">Aminu Idris</h4>
          <span className="teams__role">Cyber Security Expert</span>
        </SwiperSlide>
       
      </Swiper>
    </section>
  );
};

export default Teams;
