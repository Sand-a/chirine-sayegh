import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselSlide.css";
import { FiChevronRight } from "react-icons/fi";

const CarouselSlide = ({ projectImages }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 320 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <FiChevronRight
        className="custom-right-arrow"
        onClick={() => onClick()}
      />
    );
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        arrows={false}
        customRightArrow={<CustomRightArrow />}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {projectImages.map((img, i) => {
          return (
            <div key={i} className="slide-container">
              <img
                className="slide-image"
                src={process.env.PUBLIC_URL + img}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselSlide;
