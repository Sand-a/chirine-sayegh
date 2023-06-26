import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = ({ canvas }) => {
  return (
    <div className="gallery ">
      {canvas.map((can, i) => {
        return (
          <>
            <Link to={can.path} key={can.id} className={`canvas canvas--${i}`}>
              <img src={can.images[0]} alt={can.alt} loading="lazy" />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
