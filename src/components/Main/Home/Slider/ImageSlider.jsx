import React, { useState } from "react";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "12px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "12px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ⇦
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ⇨
      </div>
      <div style={slideStyles}>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              onClick={() => goToSlide(slideIndex)}
              style={dotStyles}
              key={slideIndex}
            >
              ο
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
