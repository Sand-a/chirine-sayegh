import React from "react";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="section hero-section">
      <div className="container hero-container">
        <Link to="/architecture" className="img-box">
          <img
            className="img-box--img"
            src="/images/imgSection/architecture-section.jpg"
            alt="design"
          />
          <div className="img--overlay">
            <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
            <h1 className="img--title">architecture</h1>
            <p className="img--text bodytext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              odit quos, nesciunt facere sequi labore rerum qui doloremque error
              nemo quam. Sapiente ipsum saepe porro temporibus debitis!
              Molestiae, quidem natus.
            </p>
          </div>
        </Link>

        <div className="img--text--box">
          <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
          <h1 className="img--title">architecture</h1>
          <p className="img--text bodytext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odit
            quos, nesciunt facere sequi labore rerum qui doloremque error nemo
            quam. Sapiente ipsum saepe porro temporibus debitis! Molestiae,
            quidem natus.
          </p>
        </div>

        <Link to="/design" className="img-box">
          <img
            className="img-box--img"
            src="/images/imgSection/design-section.jpg"
            alt="design"
          />
          <div className="img--overlay">
            <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
            <h1 className="img--title">design</h1>
            <p className="img--text bodytext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              odit quos, nesciunt facere sequi labore rerum qui doloremque error
              nemo quam. Sapiente ipsum saepe porro temporibus debitis!
              Molestiae, quidem natus.
            </p>
          </div>
        </Link>

        <div className="img--text--box">
          <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
          <h1 className="img--title">design</h1>
          <p className="img--text bodytext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odit
            quos, nesciunt facere sequi labore rerum qui doloremque error nemo
            quam. Sapiente ipsum saepe porro temporibus debitis! Molestiae,
            quidem natus.
          </p>
        </div>

        <Link to="/art" className="img-box">
          <img
            className="img-box--img"
            src="/images/imgSection/art-section.jpg"
            alt="art"
          />
          <div className="img--overlay">
            <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
            <h1 className="img--title">Art</h1>
            <p className="img--text bodytext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              odit quos, nesciunt facere sequi labore rerum qui doloremque error
              nemo quam. Sapiente ipsum saepe porro temporibus debitis!
              Molestiae, quidem natus.
            </p>
          </div>
        </Link>

        <div className="img--text--box">
          <img src="/logo/logo2.svg" alt="" className="logo-spinning" />
          <h1 className="img--title">Art</h1>
          <p className="img--text bodytext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odit
            quos, nesciunt facere sequi labore rerum qui doloremque error nemo
            quam. Sapiente ipsum saepe porro temporibus debitis! Molestiae,
            quidem natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
