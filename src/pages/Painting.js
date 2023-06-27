import React from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiImages } from "react-icons/bi";

const Painting = ({ can }) => {
  const { id } = useParams();

  return (
    <div className="section">
      <div className="card-container">
        <div className="img-painting-box">
          <Swiper
            className="mySwiperCard"
            // install Swiper modules
            modules={[Pagination, A11y]}
            grabCursor={true}
            loop={true}
            pagination={{
              bulletClass: "swiper-pagination-bullet",
              clickable: true,
            }}
            breakpoints={{
              // when window width is <= 1000px
              750: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {can[id - 1].images.map((img) => {
              return (
                <SwiperSlide className="swiper-slide-painting" key={img}>
                  <img
                    src={img}
                    className="swiper-images"
                    alt="slide image"
                    loading="lazy"
                  />
                  <BiImages className="images-icon" />
                </SwiperSlide>
              );
            })}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
            </div>
          </Swiper>
        </div>
        <div className="img-painting-text">
          <div className="arrow-page">
            {id < can.length ||
              (id !== 1 && (
                <Link to={`${can[0].path}`}>
                  <button className="link-btn">
                    {" "}
                    <BsChevronLeft className="arrow " />
                  </button>
                </Link>
              ))}
          </div>
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
                  <BsChevronRight className="arrow " />
                </button>
              </Link>
            )}
          </div>
        </div>
        <Link to="/art" className="link-back-btn">
          <BsChevronLeft className="arrow back-arrow" />{" "}
          <span>back to ART Gallery</span>
        </Link>
      </div>
    </div>
  );
};

export default Painting;
