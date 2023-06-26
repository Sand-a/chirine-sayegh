import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionReveal from "../SectionReveal/SectionReveal";
import { FiPhone, FiMail } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

import "./ContactForm.css";

const ContactForm = ({ data }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ppuro6u",
        "template_71qalw4",
        form.current,
        "Mbl4W-STm0JZa1T0J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="grid grid--2-cols contact-content">
        <ul className="contact-list">
          <li className="contact-items">
            <p className="bodytext contactus-text">
              <strong className="uppercase">contact</strong>
              <span className="uppercase">us:</span>
            </p>
          </li>

          <li className="contact-items">
            <a className="contact-link" href={`tel:${data.tel}`}>
              {" "}
              <FiPhone className="contact-icon" />
              <p className="contact-item">{data.phone}</p>
            </a>
          </li>

          <li className="contact-items">
            <a href={`mailto:${data.email}`} className="contact-link">
              {" "}
              <FiMail className="contact-icon" />{" "}
              <p className="contact-item">{data.email}</p>
            </a>
          </li>

          <li className="contact-items">
            <a target="_blank" href={data.insta_1_url} className="contact-link">
              <GrInstagram className="contact-icon contact-icon-insta" />{" "}
              <p className="contact-item">{data.insta_1}</p>
            </a>
          </li>
          <li className="contact-items">
            <a target="_blank" href={data.insta_2_url} className="contact-link">
              <GrInstagram className=" contact-icon contact-icon-insta contact-icon-insta-green" />{" "}
              <p className="contact-item contact-item-green">{data.insta_2}</p>
            </a>
          </li>
        </ul>
        <SectionReveal
          // direction={"left or right"} no direction for bottom
          section={
            <form ref={form} onSubmit={sendEmail} className="form-container">
              {/* <h1> Send us your requirement:</h1> */}
              <input
                className="searchfield"
                type="text"
                placeholder="Name"
                name="user_name"
                required
              />
              <input
                className="searchfield"
                type="text"
                placeholder="Surname"
                name="user_surname"
                required
              />
              <input
                className="searchfield"
                type="email"
                placeholder="Email "
                name="user_email"
                required
              />
              <input
                className="searchfield searchfield-last"
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />
              <textarea
                type="text"
                name="user_message"
                placeholder="Your message"
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit" className="btn btn-form">
                Send
              </button>
            </form>
          }
        />
      </div>
    </>
  );
};

export default ContactForm;
