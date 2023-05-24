import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

import { RiFacebookCircleFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const Navbar = ({ navLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const toggleMenuClick = () => setMenuClicked(!menuClicked);
  return (
    <>
      <nav className="navbar">
        <img className="nav__logo" src="/logo/logo1-1.svg" alt="logo" />

        <ul className={menuClicked ? "nav-list active" : "nav-list"}>
          {navLinks.map((item) => {
            return (
              <li key={item._id} className="nav-item">
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className={`nav-link ${item.classname ? "art" : ""}`}
                  to={item.path}
                  onClick={toggleMenuClick}
                >
                  {item.title}{" "}
                  {item.icon && <img src={item.icon_url} alt="flower" />}
                </NavLink>
              </li>
            );
          })}
          <li className="social__media--icons">
            {/* {" "}
            <Link>
              <RiFacebookCircleFill className="social__media--icon social__media--icon-facebook" />
            </Link> */}
            <Link>
              <GrInstagram className="social__media--icon social__media--icon-insta" />
            </Link>
          </li>
        </ul>
        {menuClicked ? (
          <FiX
            className="navbar__menu navbar__menu--close"
            onClick={toggleMenuClick}
          />
        ) : (
          <FiMenu
            className="navbar__menu navbar__menu--open"
            onClick={toggleMenuClick}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
