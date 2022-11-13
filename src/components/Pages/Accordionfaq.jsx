import React, { useState } from "react";
import accordion from "../Json/Accordion";
import "./faq.css";
const Accordionfaq = () => {
  const [data, setdata] = useState(accordion);
  const [Selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (Selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="wrapper">
        {/* <div className="box"> */}
          <div className="heading">
            <h1 className="head">Frequently Asked Questions</h1>
          </div>
          <div className="accordion">
            {data.map((curr, i) => {
              return (
                <>
                  <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <h2>{curr.question}</h2>
                      <span>{Selected == i ? "-" : "+"}</span>
                    </div>
                    <div className={Selected == i ? "content show" : "content"}>
                      <p>{curr.answer}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Accordionfaq;
