import React from "react";
import s from "../../Main/ProductPage/ProductPage.module.css";

export const Image = ({ img, name }) => {
  return (
    <img
      className={s.img}
      src={process.env.REACT_APP_API_URL + img}
      alt={name}
    />
  );
};
