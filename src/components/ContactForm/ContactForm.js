import React, { useRef } from "react";
import SectionReveal from "../SectionReveal/SectionReveal";
import {
  FiPhone,
  FiInstagram,
  FiMapPin,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

import "./ContactForm.css";

const ContactForm = ({ data }) => {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <>
      <div className="grid grid--2-cols">
        <ul className="contact-list">
          <li className="contact-items">
            <p className="bodytext">
              {data.text}
              <strong className="uppercase">contact </strong>
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
            <a target="_blank" href={data.insta_url} className="contact-link">
              <GrInstagram className="contact-ico contact-icon-insta" />{" "}
              <p className="contact-item">{data.insta}</p>
            </a>
          </li>
          <li className="contact-items">
            <a
              target="_blank"
              href={data.location_url}
              className="contact-link"
            >
              <FiMapPin className="contact-icon" />{" "}
              <p className="contact-item">{data.address}</p>
            </a>
          </li>
        </ul>
        <SectionReveal
          direction={"right"}
          section={
            <form ref={form} onSubmit={sendEmail} className="form-container">
              {/* <h1> Send us your requirement:</h1> */}
              <input
                className="searchfield"
                type="text"
                placeholder=" Your name"
                name="user_name"
                required
              />
              <input
                className="searchfield"
                type="email"
                placeholder="Your email address"
                name="user_email"
                required
              />

              <textarea
                name="message"
                placeholder="Your message"
                id=""
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
