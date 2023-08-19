import React from "react";

import Carousel from "./Carousel/Carousel";
import s from "./Home.module.css";
import BigSales from "./BigSales/BigSales";

export default function Home() {
  return (
    <div>
      <div className={s.carouselParent}>
        <Carousel />
      </div>
      <BigSales />
    </div>
  );
}
