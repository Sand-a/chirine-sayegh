import React from "react";
import { useParams } from "react-router";

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
          <h1 className="painting-title">{can[id - 1].title}</h1>
          <i className="painting-dimension">{can[id - 1].dimension} cm</i>
          <h1 className="painting-date">{can[id - 1].date}</h1>
        </div>
      </div>
    </div>
  );
};

export default Painting;
