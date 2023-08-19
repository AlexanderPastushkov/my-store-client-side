import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { productsAPI } from "../../../../api/api";
import s from "./Carousel.module.css";

const Carousel = () => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    productsAPI.getAllItems().then((data) => {
      console.log(data);
      setBackendData(data);
    });
  }, []);

  const arrayOfSlides = backendData.rows;

  const [currImg, setCurrImg] = useState(0);

  const goToSlide = (currImg) => {
    setCurrImg(currImg);
  };
  const goToPrevious = () => {
    const isFirstSlide = currImg === 0;
    const newIndex = isFirstSlide ? arrayOfSlides.length - 1 : currImg - 1;
    setCurrImg(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currImg === arrayOfSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currImg + 1;
    setCurrImg(newIndex);
  };
  if (arrayOfSlides)
    return (
      <div className={s.carousel}>
        <div
          className={s.carouselInner}
          style={{ backgroundImage: `url(${arrayOfSlides[currImg].img})` }}
        >
          <div onClick={goToPrevious} className={s.left}>
            <FaAngleLeft />
          </div>
          <div className={s.center}>
            <NavLink
              className={s.nameLink}
              to={`/product/${arrayOfSlides[currImg].id}`}
            >
              {arrayOfSlides[currImg].name}
            </NavLink>
          </div>
          <div onClick={goToNext} className={s.right}>
            <FaAngleRight />
          </div>
        </div>
        <div className={s.slideStyles}>
          <div className={s.dotsContainerStyles}>
            {arrayOfSlides.map((slide, slideIndex) => (
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
