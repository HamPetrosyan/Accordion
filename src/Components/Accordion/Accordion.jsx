import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <i
          className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}
        ></i>
      </div>
      <div className={`accordion-body ${isOpen ? "show" : ""}`}>{body}</div>
    </div>
  );
};

export default Accordion;
