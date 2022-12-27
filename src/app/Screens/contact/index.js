import React,{useContext} from "react";
import "./index.scss";
import ModalContext from "../../../state-manager/modalProvider";
const Contact = () => {
    const {value: {modal}, setModal} = useContext(ModalContext)
  return (
    <div className={`contact__wrapper ${modal ? "active" : ""}`} onClick={setModal}>
      <div className={`contact ${modal ? 'contact-active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <span className="contact__close" onClick={setModal}>
          &times;
        </span> 
        <div className="contact__heading--wrapper">
          <h1 className="contact__heading">Contact Us</h1>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form--group grid1">
            <label htmlFor="name" className="contact__form--label">
              Your Name
            </label>
            <input type="text" className="contact__form--input" id="name" />
          </div>
          <div className="contact__form--group grid2">
            <label htmlFor="email" className="contact__form--label">
              Your Email
            </label>
            <input type="email" className="contact__form--input" name="email" />
          </div>
          <div className="contact__form--group grid3">
            <label htmlFor="number" className="contact__form--label">
              Your phone number
            </label>

            <input type="text" className="contact__form--input" id="number" />
          </div>
          <div className="contact__form--group grid4">
            <label htmlFor="subject" className="contact__form--label">
              Subject
            </label>

            <input type="text" className="contact__form--input" id="subject" />
          </div>
          <div className="contact__form--group grid5">
            <label htmlFor="message" className="contact__form--label">
              Message
            </label>

            <textarea
              name=""
              id="message"
              className="contact__form--input"
            ></textarea>
          </div>
          <div className="contact__form--group grid6">
            <button className="contact__form--btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
