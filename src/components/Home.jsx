import React, { useState, useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Categorgy from "./Json/Category";
import accordion from "./Json/Accordion";
import Accordionfaq from "./Pages/Accordionfaq";
const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="main_content">
            <pre>
              {" "}
              <h3>
                Grow Your Skills To <br />
                Advance Your career Path
              </h3>
            </pre>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates perspiciatis molestias aut saepe doloremque est sunt,
              quam doloribus in excepturi nisi ut sit deserunt animi omnis
              deleniti distinctio at? Odit Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus, sapiente vel tenetur,
              quam asperiores non fugit repudiandae officiis in possimus
              adipisci eum ipsa, natus minima molestiae quasi quis neque ad?
              Harum aspernatur animi perspiciatis omnis rerum. Saepe veritatis
              natus obcaecati!!
            </p>
            <a href="#">hello</a>
          </div>
          <div className="img_section">
            <img
              className="img_edu"
              src="../../src/assets/Images/education.svg"
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="conatiner categories_container">
          <div className="categories_left">
            <h1>COURSE</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia id
              quisquam mollitia odit ullam repellat illum veritatis consectetur
              maiores debitis quis ipsa nam fuga, expedita suscipit. Voluptatum
              repellat assumenda porro. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta esse animi quas sapiente labore nesciunt
              assumenda, tempore sed! Eaque excepturi, voluptatum rem,
              perferendis a dolore saepe enim culpa deleniti sint rerum eum ut
              dolores cupiditate! Ea, tenetur rem vero ipsam, fugiat optio
              libero, adipisci consequuntur doloribus dolores odio sunt iste ab
              recusandae corporis laboriosam provident!
            </p>
            {/* <a href="#" className="btn_category">
              Learn More
            </a> */}
            <NavLink to="/course" className="btn_category">Learn More</NavLink>
          </div>
          <div className="categories_right">
            {Categorgy.map((category) => {
              return (
                <>
                  <article key={category.id} className="category">
                    <span className="category_icon">
                      <i className={category.icon}></i>
                    </span>
                    <h5>{category.name}</h5>
                    <p>{category.data}</p>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="faq">
      <div>  <Accordionfaq/> </div>
      </section>
    </>
  );
};

export default Home;
