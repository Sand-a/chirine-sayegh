import { useState, useEffect } from "react";
import "./CarouselInsta.css";
import BtnSlider from "./BtnSlider";

export default function CarouselInsta({
  projectImages,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = projectImages.length;

  // SWIPE 2:

  const nextSlideTouch = () => {
    currentSlide !== slideLength - 1 && setCurrentSlide(currentSlide + 1);
  };

  const prevSlideTouch = () => {
    currentSlide !== 0 && setCurrentSlide(currentSlide - 1);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? nextSlideTouch() : prevSlideTouch();
  };

  // SWIPE 1:

  // const [touchPosition, setTouchPosition] = useState(null);
  // const handleTouchStart = (e) => {
  //   const touchDown = e.touches[0].clientX;
  //   setTouchPosition(touchDown);
  // };

  // const handleTouchMove = (e) => {
  //   const touchDown = touchPosition;
  //   if (touchDown === null) {
  //     return;
  //   }
  //   const currentTouch = e.touches[0].clientX;
  //   const diff = touchDown - currentTouch;
  //   if (diff > 5) {
  //     nextSlideTouch();
  //   }
  //   if (diff < -5) {
  //     prevSlideTouch();
  //   }
  //   setTouchPosition(null);
  // };
  // const nextSlideTouch = () => {
  //   currentSlide !== slideLength - 1 && setCurrentSlide(currentSlide + 1);
  // };

  // const prevSlideTouch = () => {
  //   currentSlide !== 0 && setCurrentSlide(currentSlide - 1);
  // };

  // AUTOSLIDE:

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const timer = setTimeout(() => {
  //     if (currentSlide === slideLength - 1) {
  //       setCurrentSlide(0);
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //   }, autoSlideInterval);
  //   return () => clearTimeout(timer);
  // }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide !== slideLength - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === slideLength - 1) {
      setCurrentSlide(0);
    }
  };
  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1);
    }
  };
  // const onKeyPressed = (e) => {
  //   e.key === "ArrowLeft" && prevSlide();
  //   e.key === "ArrowRight" && nextSlide();
  // };
  // useEffect(() => {
  //   document.addEventListener("keydown", onKeyPressed, true);
  // }, [currentSlide]);

  const moveDot = (i) => {
    setCurrentSlide(i);
  };

  return (
    <div className="container-slider">
      {projectImages.map((img, i) => {
        const styles = {
          transform: `translateX(${i * 100}%)`,
        };
        return (
          <div
            key={i}
            className={
              currentSlide === i + 1
                ? `slide active slide--${i + 1}`
                : `slide slide--${i + 1}`
            }
            style={
              currentSlide === 0
                ? styles
                : { transform: `translateX(${100 * (i - currentSlide)}%)` }
            }
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            // onTouchStart={handleTouchStart}
            // onTouchMove={handleTouchMove}
          >
            <img src={process.env.PUBLIC_URL + img} alt="" />
          </div>
        );
      })}

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <div className="container-dots">
        {Array.from({ length: projectImages.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i)}
            className={currentSlide === i ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
