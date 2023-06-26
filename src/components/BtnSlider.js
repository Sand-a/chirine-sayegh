import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? (
        <BsChevronRight className="arrow arrow-right" />
      ) : (
        <BsChevronLeft className="arrow arrow-left" />
      )}
    </button>
  );
}
