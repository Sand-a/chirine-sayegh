import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperCaroussel.css";

const SwiperCaroussel = ({ images, arrow }) => {
  return (
    <div className="container">
      <Swiper
        className="mySwiper"
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
          <div
  className={
    arrow
      ? "swiper-button-prev slider-arrow-black"
      : "swiper-button-prev slider-arrow"
  }
/>
          <div
  className={
    arrow
      ? "swiper-button-next slider-arrow-black"
      : "swiper-button-next slider-arrow"
  }
/>

        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCaroussel;
