import React, { useState } from "react";
import "./Course.css";
import Courses from "../components/Json/Course";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const [course, setcourse] = useState(Courses);
  const [more, setmore] = useState(false);
  const showmore = () => {
    setmore(true);
  };
  const showless = () => {
    setmore(false);
  };
  const navigate = useNavigate();
  const coursenavigate = () =>{
    navigate('/course/python')
  };

  return (
    <>
      <div id="main">
        {course.map((data) => {
          return (
            <>
              <article key={data.id} className="categoryd">
                <div className="img_main">
                  <img
                    className="hello"
                    src="../../src/assets/Images/contact.jpg"
                    alt=""
                  />
                </div>
                <h2 className="h2_heading">{data.Name}</h2>
                <p className="paracourse">
                  {" "}
                  <b> Skills you'll gain:</b>{" "}
                  {more ? `${data.description}` : `${data.top_show}`}
                  <span
                    className="colorspan"
                    onClick={showmore}
                    id={more ? "notshow" : " "}
                  >
                    Readmore
                  </span>
                  <span
                    onClick={showless}
                    className="colorspan"
                    id={more ? "show" : "notshow"}
                  >
                    Readless
                  </span>
                </p>
                <div className="btndiv">
                  <button onClick={coursenavigate} className=" buy">Go to Course</button>
                </div>

            
              </article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Course;
