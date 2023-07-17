import React, { useState, useEffect } from "react";
import s from "./Carousel.module.css";
import { slides } from "../../../../Helpers/carouselData";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBullseye,
  FaRegCircle,
  FaCircle,
} from "react-icons/fa";

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const goToSlide = (currImg) => {
    setCurrImg(currImg);
  };
  const goToPrevious = () => {
    const isFirstSlide = currImg === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currImg - 1;
    setCurrImg(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currImg === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currImg + 1;
    setCurrImg(newIndex);
  };
  return (
    <div className={s.carousel}>
      <div
        className={s.carouselInner}
        style={{ backgroundImage: `url(${slides[currImg].img})` }}
      >
        <div onClick={goToPrevious} className={s.left}>
          <FaAngleLeft />
        </div>
        <div className={s.center}>{slides[currImg].title}</div>
        <div onClick={goToNext} className={s.right}>
          <FaAngleRight />
        </div>
      </div>
      <div className={s.slideStyles}>
        <div className={s.dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              onClick={() => goToSlide(slideIndex)}
              className={s.dotStyles}
              key={slideIndex}
            >
              <FaCircle />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
