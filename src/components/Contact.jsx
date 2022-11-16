import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../components/Contact.css";
import { useNavigate } from "react-router-dom";
function Contact() {
  // const [value, setValue] = useState();
  const [state, handleSubmit] = useForm("meqdlolb");

  const navigate = useNavigate();

  if (state.succeeded) {
    return (
      // history.push("/")
      navigate("/")
    );
  }
  return (
    <>
      <div className="container_form">
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="h2form">
        
            <h2 className="h2_form">Contact Us</h2>
          </div>
          <div className="mained">
            <div className="main_form">
              <div className="name_form">
                <label className="name" htmlFor="name">
                  Full Name
                </label>
                <input id="name" type="text" name="name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="email_form">
                <label className="email" htmlFor="email">
                  Email Address
                </label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="subject_form">
                <label className="subject" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" type="text" name="subject" />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="textarea_form">
                <label className="message" htmlFor="message">
                  Meassage
                </label>
                <textarea id="message" name="message" rows="40" cols="50" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="btn_form">
                <button
                  className="btn_form"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="img_mained">
              <img
                className="imgform"
                src="../../src/assets/Images/contact.svg"
                alt=" logo"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
