import React, { useState, useEffect } from "react";
import "./index.scss";
import project1 from "../../../Assets/Images/project1.png";
import project2 from "../../../Assets/Images/project2.png";
import project3 from "../../../Assets/Images/project3.png";
import project4 from "../../../Assets/Images/project4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/scss/autoplay'

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Projects = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showSlider, setShowSlider] = useState(false);
  SwiperCore.use([Autoplay])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth <= 600) setShowSlider(true);
    else if (windowSize.innerWidth > 600) setShowSlider(false);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);
  return (
    <div className="projects">
      <h1 className="projects__heading">Our Recent Projects</h1>
      <p className="projects__paragraph paragraph">
        Here are some of our recent projects that you can key in as an
        investor/partnership or request for bespoke software for your business.
      </p>

      <div className={`projects__work ${showSlider ? "hidden" : ""}`}>
        <div className="project__container1">
          <img src={project1} alt="project1" className="project" />
          <span className="projects__work--title">Spotify Software</span>
        </div>
        <div className="project__container2">
          <img src={project2} alt="project1" className="project" />
          <span className="projects__work--title">Figma Software</span>
        </div>
        <div className="project__container3">
          <img src={project3} alt="project1" className="project" />
          <span className="projects__work--title">Adobe Software</span>
        </div>
        <div className="project__container4">
          <img src={project4} alt="project1" className="project" />
          <span className="projects__work--title">Cyber Security</span>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
       
        className={`mySwiper ${showSlider ? "show" : "hidden"}`}
      >
        <SwiperSlide>
          <img src={project1} alt="project1" className="project" />
          <span className="projects__work--title">Spotify Software</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="project1" className="project" />
          <span className="projects__work--title">Figma Software</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="project1" className="project" />
          <span className="projects__work--title">Adobe Software</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="project1" className="project" />
          <span className="projects__work--title">Cyber Security</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
