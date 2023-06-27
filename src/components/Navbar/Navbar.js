import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

import { GrInstagram } from "react-icons/gr";
import { contactData } from "../../datas/contactData";

const Navbar = ({ navLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const menuOpen = () => {
    setMenuClicked(true);
    document.body.style.overflow = "hidden";
  };
  const menuClose = () => {
    setMenuClicked(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <nav className="navbar">
        <img className="nav__logo" src="/logo/logo.svg" alt="logo" />

        <ul className={menuClicked ? "nav-list active" : "nav-list"}>
          {navLinks.map((item) => {
            return (
              <li key={item._id} className="nav-item">
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className={`nav-link ${item.classname ? "art" : ""}`}
                  to={item.path}
                  onClick={menuClose}
                >
                  {item.title}{" "}
                  {item.icon && <img src={item.icon_url} alt="flower" />}
                </NavLink>
              </li>
            );
          })}

          <li className="social__media--icons">
            <a
              className="social__media--icon-insta-link"
              target="_blank"
              href={contactData.insta_1_url}
            >
              <GrInstagram className="social__media--icon social__media--icon-insta" />
            </a>
          </li>
        </ul>

        {menuClicked ? (
          <FiX
            className="navbar__menu navbar__menu--close"
            onClick={menuClose}
          />
        ) : (
          <FiMenu
            className="navbar__menu navbar__menu--open"
            onClick={menuOpen}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
