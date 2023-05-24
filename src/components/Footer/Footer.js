import React from "react";
import "./Footer.css";
import { MdCall } from "react-icons/md";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";
import { GrInstagram, GrLinkedinOption, GrMailOption } from "react-icons/gr";
import {
  FiPhone,
  FiInstagram,
  FiMapPin,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Footer = ({ data }) => {
  return (
    <>
      <footer className="section footer-section">
        <ul className="social__media_list">
          <li className="social__media_links">
            <a href={`tel:${data.tel}`} className="social__media_link">
              <FiPhone className="social__media_icon social__media_icon-phone" />
            </a>
          </li>
          <li className="social__media_links">
            <a href={`mailto:${data.email}`} className="social__media_link">
              <FiMail className="social__media_icon social__media_icon-mail" />
            </a>
          </li>
          <li className="social__media_links">
            <a
              target="_blank"
              href={data.location_url}
              className="social__media_link"
            >
              <FiMapPin className="social__media_icon social__media_icon-map" />
            </a>
          </li>
          <li className="space">|</li>
          <li className="social__media_links">
            <a
              target="_blank"
              href={data.linkedIn_url}
              className="social__media_link"
            >
              <RiLinkedinBoxFill className="social__media_icon social__media_icon-linkedin" />
            </a>
          </li>
          <li className="social__media_links">
            <a
              target="_blank"
              href={data.insta_url}
              className="social__media_link"
            >
              <GrInstagram className="social__media_icon social__media_icon-insta" />
            </a>
          </li>
          {/* <li className="social__media_links">
            <a href={data.facebook_url} className="social__media_link">
              <RiFacebookCircleFill className="social__media_icon social__media_icon-facebook" />
            </a>
          </li> */}
        </ul>
        <div className="footer-signature">
          <p className="copyright">
            Copyright &copy;
            <span className="year"> {new Date().getFullYear()} </span> Chirine
            <strong>Sayegh</strong> &#124; Architect - All rights reserved.
          </p>

          <p className="copyright">
            Developed & Designed by s<span className="symbol">@</span>nid .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
