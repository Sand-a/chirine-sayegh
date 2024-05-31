import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = ({ data }) => {
  return (
    <div className="section contact-section">
      <ContactForm data={data} />
    </div>
  );
};

export default Contact;
