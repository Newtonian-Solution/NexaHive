import React,{useState, useEffect} from "react";
import './index.scss'
import team1 from "../../../Assets/Images/team4.png";
import team2 from "../../../Assets/Images/team3.png"
import { getWindowSize } from "../../../utils/utility";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener("resize", handleWindowResize);
      if (windowSize.innerWidth <= 550) setShowSlider(true);
      else if (windowSize.innerWidth > 550) setShowSlider(false);

      return () => window.removeEventListener("resize", handleWindowResize);
    }, [windowSize]);
  return (
    <div className="testimonial">
      <h1 className="testimonial__heading">Testimonials</h1>
      <div className={`testimonial__box ${showSlider ? "hidden" : ""}`}>
        <div className="testimonial__box--img">
          <img src={team1} alt="" />
        </div>
        <span className="testimonial__box--name">Fatima Elmagnifico</span>
        <span className="testimonial__box--text">
          NexaHive is an amazing organization, they are the best when it comes
          to this kinda job
        </span>
      </div>
      <div className={`testimonial__box ${showSlider ? "hidden" : ""}`}>
        <div className="testimonial__box--img">
          <img src={team2} alt="" />
        </div>
        <span className="testimonial__box--name">Fatima Elmagnifico</span>
        <span className="testimonial__box--text">
          NexaHive is an amazing organization, they are the best when it comes
          to this kinda job
        </span>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper testimonial__swiper ${showSlider ? "show" : "hidden"}`}
      >
        <SwiperSlide className="testimonial__swiper-slide">
          <div className="testimonial__box">
            <div className="testimonial__box--img">
              <img src={team1} alt="" />
            </div>
            <span className="testimonial__box--name">Fatima Elmagnifico</span>
            <span className="testimonial__box--text">
              NexaHive is an amazing organization, they are the best when it
              comes to this kinda job
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial__swiper-slide">
          <div className="testimonial__box">
            <div className="testimonial__box--img">
              <img src={team2} alt="" />
            </div>
            <span className="testimonial__box--name">Fatima Elmagnifico</span>
            <span className="testimonial__box--text">
              NexaHive is an amazing organization, they are the best when it
              comes to this kinda job
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
