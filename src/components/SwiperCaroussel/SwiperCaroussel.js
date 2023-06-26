// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperCaroussel.css";

const SwiperCaroussel = ({ images }) => {
  return (
    <div className="container">
      <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        grabCursor={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={"auto"}
        pagination={{
          bulletClass: "swiper-pagination-bullet",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((img) => {
          return (
            <SwiperSlide key={img}>
              <img src={img} alt="slide image" />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCaroussel;
