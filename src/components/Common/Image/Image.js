import React from "react";
import s from "../../Main/ProductPage/ProductPage.module.css";

export const Image = ({ img, name }) => {
  return (
    <img className={s.img} src={`http://localhost:3000/${img}`} alt={name} />
  );
};
