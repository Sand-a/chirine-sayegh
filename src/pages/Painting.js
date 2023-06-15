import React from "react";
import { useParams } from "react-router";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BtnSlider from "../components/CarouselInsta/BtnSlider";
import { Link } from "react-router-dom";

const Painting = ({ can }) => {
  const { id } = useParams();

  return (
    <div className="section">
      <div className="canvas-section">
        <div className="img-painting-box">
          <div className="painting-img painting-img-1">
            <img src={can[id - 1].image1_url} alt="" />
          </div>
          <div className="painting-img painting-img-2">
            {" "}
            <img src={can[id - 1].image2_url} alt="" />
          </div>
        </div>
        <div className="img-painting-text">
          <div>
            <h1 className="painting-title">{can[id - 1].title}</h1>
            <i className="painting-dimension">
              {can[id - 1].media}: {can[id - 1].dimension} cm
            </i>
            <h1 className="painting-date">{can[id - 1].date}</h1>
          </div>
          <div className="arrow-page">
            {id < can.length && (
              <Link to={`${can[id].path}`}>
                <button className="link-btn">
                  {" "}
                  <BsChevronRight className="arrow arrow-right" />
                </button>
              </Link>
            )}
            {id < can.length ||
              (id !== 1 && (
                <Link to={`${can[0].path}`}>
                  <button className="link-btn">
                    {" "}
                    <BsChevronLeft className="arrow arrow-right" />
                  </button>
                </Link>
              ))}
          </div>
        </div>

        <Link to="/art" className="link-back-btn">
          {" "}
          &larr; ART Gallery
          <img src="icons/flower.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Painting;
