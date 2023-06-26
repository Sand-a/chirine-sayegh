import React from "react";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = ({ introData }) => {
  return (
    <div className="section hero-section">
      <div className="hero-container">
        {introData.map((data) => {
          return (
            <>
              <Link key={data._id} to={data.path} className="img-box">
                <img
                  className="img-box--img"
                  src={data.image}
                  loading="lazy"
                  alt={data.alt}
                />
                <div className="img--overlay">
                  <img
                    src={data.icon}
                    alt=""
                    loading="lazy"
                    className={
                      data.icon_flower
                        ? "logo-spinning icon-flower"
                        : "logo-spinning"
                    }
                  />
                  <h1 className="img--title">{data.title}</h1>
                  <p className="img--text bodytext">{data.text}</p>
                </div>
              </Link>

              <div className="img--text--box">
                <img
                  src={data.icon}
                  alt=""
                  loading="lazy"
                  className={
                    data.icon_flower
                      ? "logo-spinning icon-flower"
                      : "logo-spinning"
                  }
                />
                <h1 className="img--title">{data.title}</h1>
                <p className="img--text bodytext">{data.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
