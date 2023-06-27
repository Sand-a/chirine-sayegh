import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = ({ canvas }) => {
  return (
    <div className="gallery ">
      {canvas.map((can, i) => {
        return (
          <>
            <Link to={can.path} key={can.id} className={"canvas"}>
              <img src={can.image_square} alt={can.alt} loading="lazy" />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
