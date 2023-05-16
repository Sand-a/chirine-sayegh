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
            {" "}
            <h1 className="primary-headline">contact</h1>
          </li>
          <li className="contact-items">
            <p className="contact-item bodytext">{data.text}</p>
          </li>
          <li className="contact-items">
            <a className="contact-link" href={`tel:${data.tel}`}>
              {" "}
              <FiPhone className="contact-icon" />
            </a>

            <p className="contact-item">{data.phone}</p>
          </li>

          <li className="contact-items">
            <a href={`mailto:${data.email}`} className="contact-link">
              {" "}
              <FiMail className="contact-icon" />
            </a>
            <p className="contact-item">{data.email}</p>
          </li>
          <li className="contact-items">
            <a target="_blank" href={data.insta_url} className="contact-link">
              <GrInstagram className="contact-icon" />
            </a>
            <p className="contact-item">{data.insta}</p>
          </li>
          <li className="contact-items">
            <a
              target="_blank"
              href={data.location_url}
              className="contact-link"
            >
              <FiMapPin className="contact-icon" />
            </a>
            <p className="contact-item">{data.address}</p>
          </li>
        </ul>
        <SectionReveal
          direction={"right"}
          section={
            <form ref={form} onSubmit={sendEmail} className="form-container">
              <h1> Send us your requirement:</h1>
              <input
                className="searchfield"
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                className="searchfield"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                className="searchfield"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea name="message" id="" cols="30" rows="10"></textarea>
              <button type="submit" className="btn btn-form">
                Send Message
              </button>
            </form>
          }
        />
      </div>
    </>
  );
};

export default ContactForm;
