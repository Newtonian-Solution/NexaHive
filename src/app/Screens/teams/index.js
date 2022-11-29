import React, { useState, useEffect } from "react";
import "./index.scss";
import team1 from "../../../Assets/Images/team4.png";
import team2 from "../../../Assets/Images/team3.png";
import team3 from "../../../Assets/Images/team2.png";
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
        <div className="img__container">
          <img src={team1} alt="" />
          <h4 className="teams__name">Ahmed Nurudeen</h4>
          <span className="teams__role">C.E.O</span>
        </div>
        <div className="img__container">
          <img src={team2} alt="" />
          <h4 className="teams__name">Ahmed Omuya</h4>
          <span className="teams__role">C.T.O</span>
        </div>
        <div className="img__container">
          <img src={team3} alt="" />
          <h4 className="teams__name">Bruno Mars</h4>
          <span className="teams__role">Cyber Security Expert</span>
        </div>
        <div className="img__container">
          <img src={team4} alt="" />
          <h4 className="teams__name">Bella Hadid</h4>
          <span className="teams__role">Saas Expert</span>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false, }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${showSlider ? "show" : "hidden"}`}
      >
        <SwiperSlide>
          <img src={team1} alt="team1" />
          <h4 className="teams__name">Ahmed Nurudeen</h4>
          <span className="teams__role">C.E.O</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={team2} alt="team2" />
          <h4 className="teams__name">Ahmed Omuya</h4>
          <span className="teams__role">C.T.O</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={team3} alt="team3" />
          <h4 className="teams__name">Bruno Mars</h4>
          <span className="teams__role">Cyber Security Expert</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={team4} alt="team3" />
          <h4 className="teams__name">Bella Hadid</h4>
          <span className="teams__role">Saas Expert</span>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Teams;
