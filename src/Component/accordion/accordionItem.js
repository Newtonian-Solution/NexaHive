import { useState, useRef } from "react";
import "./style.scss";
import {TfiAngleDown, TfiAngleUp} from 'react-icons/tfi'


const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const { question, answer } = faq;
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {question}
{clicked ? <TfiAngleUp  className="control"/> : <TfiAngleDown  className="control"/>}
      </button>
      <div
        className="answer_wrapper"
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
          >
              <div className="answer">{ answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
